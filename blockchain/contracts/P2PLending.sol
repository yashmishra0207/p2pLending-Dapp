pragma solidity ^0.4.0;

contract P2PLending 
{
    mapping (address => uint) balances;
    
    mapping (address => User) public users; 
    
    uint numApplications;
    uint numLoans;

    mapping (uint => LoanApplication) public applications;
    mapping (uint => Loan) public loans;

    mapping(address => bool) hasOngoingLoan;
    mapping(address => bool) hasOngoingApplication;
    mapping(address => bool) hasOngoingInvestment;


    struct User
    {
        address user_public_key;
        string name;
        bool EXISTS;
    }
   
    struct LoanApplication
    {
        bool openApp;
        uint applicationId;

        address borrower;
        uint duration; // In months
        uint credit_amount; // Loan amount
        uint interest_rate;
        uint collateral;
        uint loan_to_value;
    }
    
    struct Loan
    {
        bool openLoan;
        uint loanId;

        address borrower;
        address investor;
        uint interest_rate;
        uint duration;
        uint principal_amount;
        uint original_amount;
        unit loan_to_value;
        uint collateral;
        uint amount_paid;
        uint startTime;
        uint monthlyCheckpoint;
        uint appId;

    }

    constructor()
    {
        numLoans = 1;
        numApplications = 1;
    }
    
    function createUser(string memory name) public
    {
        User user;
        user.name = name;
        user.user_public_key = msg.sender;
        user.EXISTS = true;
        
        users[msg.sender] = user;
        hasOngoingInvestment[msg.sender] = false;
        balances[msg.sender] = 0; 

    }
    
    function viewBalance() public returns (uint)
    {
        return balances[msg.sender];
    }
    
    function deposit(uint amount) public
    {
        balances[msg.sender] += amount;
    }
    
    function withdraw(uint amount) public returns (uint) 
    {
        require(amount <= balances[msg.sender]);
        balances[msg.sender] -= amount;
        return amount;
    }
   
    
    function createApplication(uint duration, uint interest_rate, uint credit_amount, uint collateral, uint loan_to_value) public
    {
        applications[numApplications] = LoanApplication(true, numApplications, msg.sender, duration, credit_amount, interest_rate, collateral, loan_to_value);
        numApplications += 1;
        hasOngoingApplication[msg.sender] = true;
    }
    
    function grantLoan(uint appId) public
    {
        require(balances[msg.sender] >= applications[appId].credit_amount);
        
        balances[msg.sender] -= applications[appId].credit_amount;
        balances[applications[appId].borrower] += applications[appId].credit_amount;

        loans[numLoans] = Loan(true, numLoans, applications[appId].borrower, msg.sender, applications[appId].interest_rate, applications[appId].duration,
        applications[appId].credit_amount, applications[appId].credit_amount,applications[appId].loan_to_value,applications[appId].collateral, 0, now,0, appId);
        numLoans += 1;

        applications[appId].openApp = false;
        hasOngoingLoan[applications[appId].borrower] = true;
        hasOngoingInvestment[msg.sender] = true;
    }
    
    function repayLoan(uint amount, uint estimatedInterest, uint timeSinceLastPayment) public
    {
        require(balances[msg.sender] >= amount);

        uint id_ = 0;
        for(uint i=1; i<=numLoans; i++)
        {
                if(loans[i].borrower == msg.sender)
                {
                    id_ = i;
                    break;
                }
        }
        Loan loan = loans[id_];
        
        require(loan.openLoan == true);

        uint p = loan.principal_amount;
        uint r = loan.interest_rate;
        uint checkpoint = loan.monthlyCheckpoint;
        uint n = 12; //Number of times loan is compounded annually


        uint amountWithInterest = estimatedInterest;

        uint interest = amountWithInterest - p;
        uint t = timeSinceLastPayment;

        require(amountWithInterest>=amount);

        require(amount>=interest);

        balances[msg.sender] -= interest;
        balances[loan.investor] += interest;

        amount -= interest;
        loan.monthlyCheckpoint += timeSinceLastPayment;
        loan.amount_paid += interest;

        if(amount>0)
        {
            loan.principal_amount -= amount;
            loan.amount_paid += amount;

            balances[msg.sender] -= amount;
            balances[loan.investor] += amount;
        }

        if(loan.principal_amount == 0)
        {
            loans[id_].openLoan = false;
            hasOngoingLoan[msg.sender] = false;
            hasOngoingApplication[msg.sender] = false;
            hasOngoingApplication[loan.investor] = false;
            hasOngoingLoan[loan.investor] = false;
        }
    }
    
    function ifApplicationOpen(uint index) returns (bool) public
    {
        LoanApplication app = applications[index];
        if(app.openApp) return true; else return false;
    }
    
    function ifLoanOpen(uint index) returns (bool) public
    {
        Loan loan = loans[index];
        if (loan.openLoan == true) return true; else return false;
    }
    
    function getApplicationData(uint index) returns (uint[], address) public
    {
        uint[] memory numericalData = new uint[](4);
        numericalData[0] = index;
        numericalData[1] = applications[index].duration;
        numericalData[2] = applications[index].credit_amount;
        numericalData[3] = applications[index].interest_rate;

        address borrower = applications[index].borrower;
        return (numericalData, borrower);
        // numericalData format = [index, duration, amount, interestrate]
    }
    
    function getLoanData(uint index) returns (uint[], address, address) public
    {
        uint[] memory numericalData = new uint[](11);
        numericalData[0] = index;
        numericalData[1] = loans[index].interest_rate;
        numericalData[2] = loans[index].duration;
        numericalData[3] = loans[index].principal_amount;
        numericalData[4] = loans[index].original_amount;
        numericalData[5] = loans[index].amount_paid;
        numericalData[6] = loans[index].collateral;
        numericalData[7] = loans[index].loan_to_value;
        numericalData[8] = loans[index].startTime;
        numericalData[9] = loans[index].monthlyCheckpoint;
        numericalData[10] = loans[index].appId;

        return (numericalData, loans[index].borrower, loans[index].investor);
        // numericalData format = [index, interestrate, duration, p_amnt, o_amnt, paid_amnt, collateral, ltv, starttime, app_index]
    }
    
    function getNumApplications() returns (uint) public { return numApplications;}
    function getNumLoans() returns (uint) public { return numLoans;}
    function isUser(address account) returns (bool) public {return users[account].EXISTS;}
    function getTime() returns (uint) public {return now;}
}    

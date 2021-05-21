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
        string otherData; // Encoded string with delimiters (~)

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
    
    function transfer(address giver, address taker, uint amount) public
    {
        require(balances[giver] >= amount);
        balances[giver] -= amount;
        balances[taker] += amount;
    }
    
    function createApplication(uint duration, uint interest_rate, uint credit_amount, string memory otherData) public
    {
        applications[numApplications] = LoanApplication(true, numApplications, msg.sender, duration, credit_amount, interest_rate, otherData);
        numApplications += 1;
        hasOngoingApplication[msg.sender] = true;
    }
}    

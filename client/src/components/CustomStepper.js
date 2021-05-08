import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepIcon: {
    width: "15px",
    height: "15px",
  },
}));

const CustomStepper = (props) => {
  const useStepStyles = makeStyles({
    active: {
      color: `${props.color} !important`,
      fontWeight: "bold !important",
    },
    disabled: {
      color: `${props.color} !important`,
      // opacity: '0.6',
    },
    completed: {
      color: `${props.color} !important`,
    },
  });
  const stepStyles = useStepStyles();

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = props.getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      {props.heading}
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              // icon={<Link />}
              StepIconProps={{
                classes: {
                  // root: classes.step,
                  completed: stepStyles.active,
                  active: stepStyles.active,
                  disabled: stepStyles.disabled,
                },
              }}
              classes={{
                completed: stepStyles.completed,
                active: stepStyles.active,
                disabled: stepStyles.disabled,
              }}
            >
              {label}
            </StepLabel>
            <StepContent>
              <Typography>{props.getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: props.color, color: "white" }}
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default CustomStepper;

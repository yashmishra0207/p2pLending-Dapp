import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import WTButton from "../WTButton";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 300,
    backgroundColor: (props) => props.color,
    color: "white",
    margin: theme.spacing(2),
    padding: theme.spacing(2, 1, 0, 1),
    border: "10px double",
    borderRadius: "10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  majorWrapper: {
    padding: 0,
    margin: 0,
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
    },
  },
  iconContainer: {
    margin: "10px",
    padding: theme.spacing(4, 2),
    border: "15px solid transparent",
    width: 100,
    height: 100,
    borderRadius: "50%",
    backgroundColor: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
  },
}));

const ApplyAndInvestCard = (props) => {
  const classes = useStyles(props);

  return (
    <Card className={classes.card} elevation={0}>
      <div className={classes.majorWrapper}>
        <div
          className={classes.iconContainer}
          style={{ backgroundImage: `url(${props.icon})` }}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.heading}
          </Typography>
          <Typography className={classes.pos}>{props.detail}</Typography>
          <WTButton text={props.buttonText} url={props.buttonUrl} />
        </CardContent>
      </div>
      <hr />
      <CardContent style={{ textAlign: "center" }}>
        {props.countDetail}
        <br />
        <Typography varient="h5" component="h2" style={{ fontWeight: "bold" }}>
          {props.count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ApplyAndInvestCard;

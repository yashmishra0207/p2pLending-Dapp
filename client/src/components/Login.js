import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import { AppContext } from "../store/AppProvider";
import { Chip } from "@material-ui/core";
import { Error } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [state, setState] = useState();
  const [showError, setShowError] = useState();

  const { login, appState } = useContext(AppContext);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(state);
    setShowError(true);
  };

  if (localStorage.getItem("auth")) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Typography component="h1" variant="h5">
        Log In
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          type="email"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Login
        </Button>
        <div style={{ width: "100%", textAlign: "center" }}>
          {showError && appState?.auth?.authError && (
            <Chip
              icon={<Error />}
              label={appState.auth.authError}
              onDelete={() => {
                setShowError(false);
              }}
              color="secondary"
              variant="outlined"
            />
          )}
        </div>
        <Grid container>
          <Grid item xs>
            {/* <Link href="#" variant="body2">
              Forgot password?
            </Link> */}
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Link to="/auth/signup" variant="body2">
              <p>Don't have an account? Sign Up</p>
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default Login;

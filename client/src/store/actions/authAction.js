import axios from "axios";
import { base_url, AuthActions } from "../../constants/index";

export const login = async (dispatch, credentials) => {
  axios
    .post(`${base_url}/user/login`, credentials)
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("auth", JSON.stringify(res.data));
        dispatch({ type: AuthActions.LOGIN_SUCCESS, data: res.data });
      }
    })
    .catch((err) => {
      dispatch({
        type: AuthActions.LOGIN_FAILED,
        data: err.response.data.message,
      });
    });
};

export const signup = (dispatch, details) => {
  axios
    .post(`${base_url}/user/signup`, details)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: AuthActions.SIGNUP_SUCCESS, data: res.data });
        window.location.href = "./login";
      }
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({
        type: AuthActions.SIGNUP_FAILED,
        data: err.response.data.message,
      });
    });
};

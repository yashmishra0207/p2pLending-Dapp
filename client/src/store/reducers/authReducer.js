const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        authError: action.data,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_FAILED":
      return {
        ...state,
        authError: action.data,
      };
    default:
      return state;
  }
};

export default authReducer;

import authReducer from "./authReducer";
import combineReducers from "./CombineReducers";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;

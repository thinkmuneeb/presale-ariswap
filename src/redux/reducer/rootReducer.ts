import { combineReducers } from "redux";
import smartContractReducer from "./smartContractReducer";

const rootReducer = combineReducers({
  smartContractReducer,
});

export default rootReducer;

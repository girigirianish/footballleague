import {combineReducers} from "redux";
import ResultsReducer from "../results/reducer-results";
import {reducer as formReducer} from "redux-form";

const allReducer = combineReducers({results: ResultsReducer, form: formReducer});

export default allReducer;

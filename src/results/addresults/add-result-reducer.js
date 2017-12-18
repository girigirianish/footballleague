// import {ADD_RESULT} from "./add-result-constant"; const INITIAL_STATE = {
// newResults: {         results: null,         error: null,         loading:
// null     } }; export default function (state = INITIAL_STATE, action) {
// switch (action.type) {         case ADD_RESULT:             return {
// ...state,                 newResults: {                     results:
// action.payload.results,                     loading: true                 }
//       };             break;         default:             return state;  } }
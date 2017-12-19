import {ADD_RESULT} from "./addresults/add-result-constant";

const INITIAL_STATE = {
  newResults: {
    results: null,
    error: null,
    loading: null
  },
  addedResults: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_RESULT:
      let currentResults = state.addedResults;
      currentResults.push(action.payload.results);
      return {
        ...state,
        newResults: {
          results: action.payload.results,
          loading: true
        },
        addedResults: currentResults
      };
      break;
    default:
      return state;
  }
}

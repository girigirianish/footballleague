import {ADD_RESULT} from "./add-result-constant";
import {reset} from "redux-form";

export const addResults = () => {
    console.log("here am i");
    return (dispatch, getState) => {
        const form = getState().form;
        const newResults = {
            date: form.addresults.values.date,
            teamnamea: form.addresults.values.teamnamea,
            teamnameb: form.addresults.values.teamnameb,
            scorea: form.addresults.values.scorea,
            scoreb: form.addresults.values.scoreb
        };
        dispatch({
            type: ADD_RESULT,
            payload: {
                results: newResults
            }
        });
        dispatch(reset("addresults"));
    };
};

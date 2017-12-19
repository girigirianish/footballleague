import {createSelector} from "reselect";
import _ from "lodash";
import moment from "moment";

const resultItemsSelector = state => state.results;

const getResultItemsData = results => {
    let resultItemData = [];
    const currentResults = results.addedResults;

    const uniqueResultDates = getUniqueResults(currentResults, "date");
    uniqueResultDates.map((resultDate, key) => {
        let resultItemsData = {};
        let filteredItemsArray = [];
        let filtereditemsObject = {};

        const filteredResults = filterResultsDateWise(currentResults, resultDate);

        filteredResults.map((filteredResult, key) => {
            filtereditemsObject.teamnamea = filteredResult.teamnamea;
            filtereditemsObject.teamnameb = filteredResult.teamnameb;
            filtereditemsObject.scorea = filteredResult.scorea;
            filtereditemsObject.scoreb = filteredResult.scoreb;
            filteredItemsArray.push(filtereditemsObject);
        });

        resultItemsData.date = resultDate;
        resultItemsData.teams = filteredItemsArray;
        resultItemData.push(resultItemsData);
    });

    resultItemData = _.sortBy(resultItemData, item => {
        return moment(item.date, "MM/DD/YYYY");
    }).reverse();
    return resultItemData;
};

const getUniqueResults = (arrayResults, key) => {
    if (arrayResults.length > 0) {
        return arrayResults.reduce(function (carry, item) {
            if (item[key] && !~ carry.indexOf(item[key])) 
                carry.push(item[key]);
            return carry;
        }, []);
    } else {
        return [];
    }
};

const filterResultsDateWise = (results, date) => {
    let filteredResults = results.filter(result => {
        return result.date === date;
    });
    return filteredResults;
};

export default createSelector(resultItemsSelector, getResultItemsData);

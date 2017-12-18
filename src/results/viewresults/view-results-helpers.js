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

export default {
    getUniqueResults,
    filterResultsDateWise
};

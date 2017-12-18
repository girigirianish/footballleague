import React from "react";
import ViewResultsHelpers from "./view-results-helpers";
require("./results-items.css");

const styles = {
    winning: "winning",
    loosing: "loosing"
};

const createResultBlock = props => {
    let uniqueResultDates = ViewResultsHelpers.getUniqueResults(props.results, "date");
    return uniqueResultDates.map((resultdate, key) => {
        let filteredResults = ViewResultsHelpers.filterResultsDateWise(props.results, resultdate);
        return (
            <div className="panel panel-default" key={key}>
                <div className="panel-body">
                    <div className="pannel pannel-default">
                        <div className="row ">
                            <div className="col-sm-12">{resultdate}</div>
                        </div>

                        {filteredResults.map((filteredResult, key) => {
                            return (
                                <div className="row" key={key}>
                                    <div className="media">
                                        <div className="media-body">
                                            <div className="col-sm-5">
                                                <span
                                                    className={parseInt(filteredResult.scorea) > parseInt(filteredResult.scoreb)
                                                    ? styles.winning
                                                    : styles.loosing}>
                                                    {filteredResult.teamnamea + " (" + filteredResult.scorea + ")"}
                                                </span>
                                            </div>
                                            <div className="col-sm-2">{"vs"}</div>
                                            <div className="col-sm-5">
                                                <span
                                                    className={parseInt(filteredResult.scoreb) > parseInt(filteredResult.scorea)
                                                    ? styles.winning
                                                    : styles.loosing}>
                                                    {filteredResult.teamnameb + " (" + filteredResult.scoreb + ")"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    });
};

const ResultItems = props => <div>{createResultBlock(props)}</div>;

export default ResultItems;

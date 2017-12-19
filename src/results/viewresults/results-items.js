import React from "react";
// require("./results-items.css");

const styles = {
    winning: "winning",
    loosing: "loosing"
};

const createResultBlock = props => {
    let currentResultData = props.results;
    return currentResultData.map((currentResult, key) => {
        return (
            <div className="panel panel-default resultblocks" key={key}>
                <div className="panel-body">
                    <div className="pannel pannel-default">
                        <div className="row ">
                            <div className="col-sm-12">{currentResult.date}</div>
                        </div>

                        {currentResult
                            .teams
                            .map((team, key) => {
                                return (
                                    <div className="row teamblock" key={key}>
                                        <div className="media">
                                            <div className="media-body">
                                                <div className="col-sm-5">
                                                    <span
                                                        className={parseInt(team.scorea) > parseInt(team.scoreb)
                                                        ? styles.winning
                                                        : styles.loosing}>
                                                        {team.teamnamea + " (" + team.scorea + ")"}
                                                    </span>
                                                </div>
                                                <div className="col-sm-2">{"vs"}</div>
                                                <div className="col-sm-5">
                                                    <span
                                                        className={parseInt(team.scoreb) > parseInt(team.scorea)
                                                        ? styles.winning
                                                        : styles.loosing}>
                                                        {team.teamnameb + " (" + team.scoreb + ")"}
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

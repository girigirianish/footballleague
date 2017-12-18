import React from "react";

const createLeagueTable = props => {
    let leagueData = props.results;
    return (
        <div className="panel panel-default">
            <div className="panel-heading  panel-relative">League Table</div>
            <div className="panel-body">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="col-xs-1">Pos</th>
                            <th className="col-xs-3">Team</th>
                            <th className="col-xs-1">Pld</th>
                            <th className="col-xs-1">W</th>
                            <th className="col-xs-1">D</th>
                            <th className="col-xs-1">L</th>
                            <th className="col-xs-1">Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leagueData.map((league, key) => {
                            return (
                                <tr key={key + 1}>
                                    <th>{key + 1}</th>
                                    <td>{league.teamName}</td>
                                    <td>{league.gamesPlayed}</td>
                                    <td>{league.gameWon}</td>
                                    <td>{league.gameDraw}</td>
                                    <td>{league.gameLost}</td>
                                    <td>{league.totalPoints}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const LeagueTable = props => <div>{createLeagueTable(props)}</div>;

export default LeagueTable;

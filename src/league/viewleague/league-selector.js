import {createSelector} from "reselect";
import _ from "lodash";

const leagueSelector = state => state.results;

const getLeagueData = results => {
    const leagueData = [];
    const currentResults = results.addedResults;

    const teamA = getUniqueTeam(currentResults, "teamnamea");
    const teamB = getUniqueTeam(currentResults, "teamnameb");
    const teams = _.uniq(teamA.concat(teamB));

    _.map(teams, (team, key) => {
        let teamData = {};
        teamData.teamName = team;
        teamData.gamesPlayed = numberOfgamesPlayed(currentResults, team);
        teamData.gameWon = numberOfGameWon(currentResults, team);
        teamData.gameLost = numberOfGameLost(currentResults, team);
        teamData.gameDraw = numberOfGameDraw(currentResults, team);
        teamData.totalPoints = totalAcumulatedPoints(currentResults, team);
        leagueData.push(teamData);
    });

    return _.orderBy(leagueData, ["totalPoints"], ["desc"]);
};

const getUniqueTeam = (arrayResults, key) => {
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

const numberOfgamesPlayed = (currentResults, teamName) => {
    let individualGamesPlayed = _.filter(currentResults, result => {
        if (result.teamnamea === teamName || result.teamnameb === teamName) {
            return result;
        }
    });
    return individualGamesPlayed.length;
};

const numberOfGameWon = (currentResults, teamName) => {
    let gameWon = _.filter(currentResults, result => {
        if ((result.teamnamea === teamName && parseInt(result.scorea) > parseInt(result.scoreb)) || (result.teamnameb === teamName && parseInt(result.scoreb) > parseInt(result.scorea))) {
            return result;
        }
    });
    return gameWon.length;
};

const numberOfGameLost = (currentResults, teamName) => {
    let gameLost = _.filter(currentResults, result => {
        if ((result.teamnamea === teamName && parseInt(result.scorea) < parseInt(result.scoreb)) || (result.teamnameb === teamName && parseInt(result.scoreb) < parseInt(result.scorea))) {
            return result;
        }
    });
    return gameLost.length;
};

const numberOfGameDraw = (currentResults, teamName, teamKey, scoreKeyFirst, scoreKeySecond) => {
    let gameDraw = _.filter(currentResults, result => {
        if ((result.teamnamea === teamName && parseInt(result.scorea) === parseInt(result.scoreb)) || (result.teamnameb === teamName && parseInt(result.scoreb) === parseInt(result.scorea))) {
            return result;
        }
    });
    return gameDraw.length;
};

const totalAcumulatedPoints = (currentResults, teamName) => {
    let totalScore = 0;
    let individualGamesPlayed = _.filter(currentResults, result => {
        if (result.teamnamea === teamName || result.teamnameb === teamName) {
            return result;
        }
    });
    _.map(individualGamesPlayed, (gamePlayed, key) => {
        if (gamePlayed.teamnamea === teamName) {
            totalScore += parseInt(gamePlayed.scorea);
        } else if (gamePlayed.teamnameb === teamName) {
            totalScore += parseInt(gamePlayed.scoreb);
        }
    });
    return totalScore;
};

export default createSelector(leagueSelector, getLeagueData);

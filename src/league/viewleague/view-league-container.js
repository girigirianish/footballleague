import React, {Component} from "react";
import {bindActionCreaters} from "redux";
import {connect} from "react-redux";
import LeagueTable from "./league-table";
import LeagueSelector from "./league-selector";

class ViewLeagueContainer extends Component {
    render() {
        return <LeagueTable results={this.props.results}/>;
    }
}

function mapStateToProps(state) {
    return {results: LeagueSelector(state)};
}

export default connect(mapStateToProps)(ViewLeagueContainer);

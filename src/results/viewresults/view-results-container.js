import React, {Component} from "react";
import {bindActionCreaters} from "redux";
import {connect} from "react-redux";
import ResultItems from "./results-items";

class ViewResultsContainer extends Component {
    render() {
        return (
            <div>
                <ResultItems results={this.props.results}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {results: state.results.addedResults};
}

export default connect(mapStateToProps)(ViewResultsContainer);

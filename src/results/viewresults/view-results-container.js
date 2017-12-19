import React, {Component} from "react";
import {bindActionCreaters} from "redux";
import {connect} from "react-redux";

import ResultItems from "./results-items";
import ResultItemsSelector from "./result-items-selector";

class ViewResultsContainer extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading text-center panel-relative">Results</div>
                <div className="panel-body">
                    <ResultItems results={this.props.results}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {results: ResultItemsSelector(state)};
}

export default connect(mapStateToProps)(ViewResultsContainer);

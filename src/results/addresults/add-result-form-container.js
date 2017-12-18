import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import AddResultForm from "./add-results-form";

import {addResults} from "./add-result-form.actions";

class AddResultContainer extends Component {
    render() {
        return (
            <div>
                <AddResultForm {...this.props}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {results: state.results};
}

function matchDispatchToProps(dispatch) {
    return {
        addResults: data => dispatch(addResults(data))
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(AddResultContainer);

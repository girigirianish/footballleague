import React from "react";
import {reduxForm, Field} from "redux-form";

import _ from "lodash";

const FIELDS = {
    teamnamea: {
        type: "input",
        label: "Team Name"
    },
    teamnameb: {
        type: "input",
        label: "Team Name"
    },
    scorea: {
        type: "input",
        label: "Score"
    },
    scoreb: {
        type: "input",
        label: "Score"
    },
    date: {
        type: "input",
        label: "Date"
    }
};

const validate = values => {
    const errors = {};
    if (!values.teamnamea) {
        errors.teamnamea = "Please Enter Team Name";
    }
    if (!values.teamnameb) {
        errors.teamnameb = "Please Enter TeamName ";
    }
    if (!values.scorea) {
        errors.scorea = "Please Enter Score";
    }
    if (!values.scoreb) {
        errors.scoreb = "Please Enter Score";
    }
    if (!values.date) {
        errors.date = "Please Enter Date";
    }
    return errors;
};

const renderField = ({
    input,
    label,
    type,
    meta: {
        touched,
        error
    }
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            <div>{touched && (error && <span>{error}</span>)}</div>
        </div>
    </div>
);

const AddResultsForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <div className="panel panel-default">
            <div className="panel-heading text-center panel-relative">
                New Results
            </div>
            <div className="panel-body">
                <div className="formBox">
                    <form onSubmit={handleSubmit(props.addResults)}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="inputText">
                                    <Field name="teamnamea" component={renderField} type="text" label="Team Name"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="inputText">
                                    <Field name="teamnameb" component={renderField} type="text" label="Team Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="inputText">
                                    <Field name="scorea" component={renderField} type="number" label="Score"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="inputText">
                                    <Field name="scoreb" component={renderField} type="number" label="Score"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="inputText">
                                    <Field name="date" component={renderField} type="date" label="Date"/>
                                </div>
                            </div>
                            <div className="col-sm-6"/>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 text-left"/>
                            <div className="col-sm-6">
                                <button type="submit" disabled={submitting} className="btn btn-primary">
                                    Enter Results
                                </button>
                            </div>
                            <div className="col-sm-4 pull-right"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default reduxForm({form: "addresults", validate})(AddResultsForm);

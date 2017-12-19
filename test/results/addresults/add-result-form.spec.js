import React from "react";
import {Provider} from "react-redux";

import {shallow, mount} from "enzyme";
import {expect} from "chai";

import configureStore from "redux-mock-store";

import AddResultForm from "../../../src/results/addresults/add-results-form";
import ResultMockState from "../../mockdata/view-result-mock-state";

describe("Add Result form component", () => {
    const mockStore = configureStore();
    const store = mockStore(ResultMockState);
    let responseState; // to test response state
    let wrapper;

    //we can further pass desired props and check if it is correctly render or not

    beforeEach(() => {
        const mockSubmitCallBack = state => {
            responseState = state;
        };

        wrapper = mount(
            <Provider store={store}>
                <AddResultForm onSubmit={mockSubmitCallBack}/>
            </Provider>
        );
    });

    it("should successfully render components without exploding", () => {
        expect(wrapper)
            .to
            .have
            .length(1);
    });

    it("It should have First team field", () => {
        expect(wrapper.find('input[name="teamnamea"]'))
            .to
            .have
            .length(1);
    });

    it("It should have Second team field", () => {
        expect(wrapper.find('input[name="teamnameb"]'))
            .to
            .have
            .length(1);
    });

    it("It should have First team score field", () => {
        expect(wrapper.find('input[name="scorea"]'))
            .to
            .have
            .length(1);
    });

    it("it should have second team score field", () => {
        expect(wrapper.find('input[name="scoreb"]'))
            .to
            .have
            .length(1);
    });

    it("it should have date field", () => {
        expect(wrapper.find('input[name="date"]'))
            .to
            .have
            .length(1);
    });
});

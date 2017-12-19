import React from "react";

import {shallow} from "enzyme";
import {expect} from "chai";

import configureStore from "redux-mock-store";

import AddFormContainer from "../../../src/results/addresults/add-result-form-container";

import ResultMockState from "../../mockdata/view-result-mock-state";

describe("Add result form Container", () => {
    const mockStore = configureStore();
    const store = mockStore(ResultMockState);
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AddFormContainer store={store}/>);
    });

    it("should render container component without exploding", () => {
        expect(wrapper.length)
            .to
            .equal(1);
    });

    it("should check if the props passed is mathced", () => {
        expect(wrapper.props().results)
            .to
            .deep
            .equal(ResultMockState.results);
    });

    //here we can add test on state changes
});

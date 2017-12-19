import React from "react";

import {shallow} from "enzyme";
import {expect} from "chai";

import configureStore from "redux-mock-store";

import ViewResults from "../../../src/results/viewresults/view-results-container.js";

import ViewResultMockState from "../../mockdata/view-result-mock-state";
import ResultItemMockProps from "../../mockdata/result-items-mock-props";

describe("View Results Container", () => {
    const mockStore = configureStore();
    const store = mockStore(ViewResultMockState);
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ViewResults store={store}/>);
    });

    it("should renders a container component", () => {
        expect(wrapper.length)
            .to
            .equal(1);
    });

    it("check if props matches the mocked result-item-selector props", () => {
        expect(wrapper.props().results)
            .to
            .deep
            .equal(ResultItemMockProps.results);
    });
});

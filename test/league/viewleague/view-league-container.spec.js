import React from "react";

import {shallow} from "enzyme";
import {expect} from "chai";

import configureStore from "redux-mock-store";

import ViewLeagueContainer from "../../../src/league/viewleague/view-league-container";

import leagueTableMockState from "../../mockdata/view-result-mock-state";
import LeagueMockProps from "../../mockdata/league-table-mock-props";

describe("View league Container", () => {
    const mockStore = configureStore();
    const store = mockStore(leagueTableMockState);
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ViewLeagueContainer store={store}/>);
    });

    it("should succesfully render a contianer component", () => {
        expect(wrapper.length)
            .to
            .equal(1);
    });

    it("check if props matches the mocked league-table-selecetor props", () => {
        expect(wrapper.props().results)
            .to
            .deep
            .equal(LeagueMockProps.results);
    });
});

import React from "react";

import {shallow} from "enzyme";
import {expect} from "chai";

import LeagueTable from "../../../src/league/viewleague/league-table";
import LeagueMockState from "../../mockdata/league-table-mock-props";

describe("League Table", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LeagueTable results={LeagueMockState.results}/>);
    });

    it("should successfully render components without exploding", () => {
        expect(wrapper)
            .to
            .have
            .length(1);
    });

    it("should successfully render league data rows including header", () => {
        expect(wrapper.find("table").find("tr").length)
            .to
            .equal(10);
    });
});

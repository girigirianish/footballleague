import React from "react";

import {shallow} from "enzyme";
import {expect} from "chai";

import ResultItems from "../../../src/results/viewresults/results-items.js";
import ResultItemMockProps from "../../mockdata/result-items-mock-props";

describe("Results items for view results", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ResultItems results={ResultItemMockProps.results}/>);
    });

    it("should successfully render components without exploding", () => {
        expect(wrapper)
            .to
            .have
            .length(1);
    });

    it("should successfully render resultitems", () => {
        expect(wrapper.find(".resultblocks").length)
            .to
            .equal(2);
    });

    it("should succesfully render teams", () => {
        expect(wrapper.find(".teamblock").length)
            .to
            .equal(5);
    });
});

import {expect} from "chai";

import ResulItemSelector from "../../../src/results/viewresults/result-items-selector";
import ResultMockState from "../../mockdata/view-result-mock-state";
import ExpectedResultItemMock from "../../mockdata/result-items-mock-props";

describe("Result Item Selector", () => {
    it("should return diplayable result data", () => {
        const resultItems = ResulItemSelector.resultFunc(ResultMockState.results);
        expect(resultItems)
            .to
            .deep
            .equal(ExpectedResultItemMock.results);
    });
});

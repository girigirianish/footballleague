import {expect} from "chai";

import leagueTableSelector from "../../../src/league/viewleague/league-selector";
import LeagueMockState from "../../mockdata/view-result-mock-state";
import ExpectedLeagueMock from "../../mockdata/league-table-mock-props";

describe("Result Item Selector", () => {
    it("should calculated league data", () => {
        const leagueData = leagueTableSelector.resultFunc(LeagueMockState.results);
        expect(leagueData)
            .to
            .deep
            .equal(ExpectedLeagueMock.results);
    });
});

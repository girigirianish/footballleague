import React from "react";
import {Provider} from "react-redux";

import {mount, shallow, render} from "enzyme";
import {expect} from "chai";

import configureStore from "redux-mock-store";

import App from "../../../src/app/app";
import ViewResults from "../../../src/results/viewresults/view-results-container.js";

import ViewResultMockState from "./view-result-mock-state";

describe("<ViewResults/>", () => {
    const mockStore = configureStore();
    const store = mockStore(ViewResultMockState);
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <App/>
            </Provider>
        );
    });

    it("renders a container component", () => {
        expect(wrapper.find(ViewResults).length)
            .to
            .equal(1);
    });
});

import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import Main from "./main.jsx";
import {OFFERS_NAME_TEST} from "../../mocks/test/data.js";
import {CITIES} from "../../mocks/test/data";

const mockStore = configureStore([]);
const store = mockStore({
  cityIdCurrent: 1,
  offers: OFFERS_NAME_TEST,
  cities: CITIES
});
jest.mock(`../map/map`);

it(`Render Main`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main offers={OFFERS_NAME_TEST}/>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }})
    .toJSON();

  expect(tree).toMatchSnapshot();
});

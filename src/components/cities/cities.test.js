import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import Cities from "./cities.jsx";
import {OFFERS_NAME_TEST} from "../../mocks/test/data.js";
import {CITIES} from "../../mocks/test/data";

const mockStore = configureStore([]);
const store = mockStore({
  cityIdCurrent: 1,
  offers: OFFERS_NAME_TEST,
  cities: CITIES
});


it(`Render Main`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Cities onCityClick={() => {}} isActive={() => true}/>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }})
    .toJSON();

  expect(tree).toMatchSnapshot();
});

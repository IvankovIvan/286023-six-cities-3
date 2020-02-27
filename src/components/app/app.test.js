import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";
import {OFFERS_NAME_TEST, CITIES} from "../../mocks/test/data.js";

const mockStore = configureStore([]);
const store = mockStore({
  cityIdCurrent: 1,
  offers: OFFERS_NAME_TEST,
  cities: CITIES
});

jest.mock(`../map/map`);


it(`Render App`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            offers={OFFERS_NAME_TEST}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

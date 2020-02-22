import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {OFFERS_NAME_TEST} from "../../mocks/test/data.js";

jest.mock(`../map/map`);

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offers={OFFERS_NAME_TEST}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {OFFERS_NAME_TEST} from "../../mock/test/data.js"

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offersName={OFFERS_NAME_TEST}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {OFFERS_NAME_TEST} from "../../mock/test/data";

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main offersName={OFFERS_NAME_TEST}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

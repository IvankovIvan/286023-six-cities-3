import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {OFFERS_NAME_TEST} from "../../mocks/test/data.js";

jest.mock(`../map/map`);

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main offers={OFFERS_NAME_TEST}/>, {
      createNodeMock: () => {
        return {};
      }})
    .toJSON();

  expect(tree).toMatchSnapshot();
});

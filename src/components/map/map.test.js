import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

it(`Render Map`, () => {
  const coords = [
    [52.3909553943508, 4.85309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3809553943508, 4.939309666406198]
  ];
  const tree = renderer
    .create(<Map offersCords={coords}/>, {
      createNodeMock: () => {
        return {};
      }})
  .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";

it(`Render Offer`, () => {
  const offerName = `Nice, cozy, warm big bed apartment`;
  const tree = renderer
    .create(<Offer offerName={offerName}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";
import {OFFERS_NAME_TEST} from "../../mocks/test/data";

it(`Render Offer`, () => {
  const offer = OFFERS_NAME_TEST[0];

  const tree = renderer
    .create(<Offer offer={offer} clickOffer={() => {}}
      onOver={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

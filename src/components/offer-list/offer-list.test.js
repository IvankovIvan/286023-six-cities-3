import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list.jsx";
import {OFFERS_NAME_TEST} from "../../mocks/test/data.js";

it(`Renderer OfferList.`, () => {
  const tree = renderer
    .create(<OfferList offers={OFFERS_NAME_TEST} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

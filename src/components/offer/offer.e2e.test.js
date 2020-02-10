import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offer from "./offer.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should title click`, () => {
  const clickOffer = jest.fn();
  const offerName = `Nice, cozy, warm big bed apartment`;
  const offer = shallow(
      <Offer offerName={offerName} clickOffer={clickOffer}/>
  );

  const offerClick = offer.find(`h2.place-card__name`);

  offerClick.props().onClick();

  expect(clickOffer.mock.calls.length).toBe(1);
});

import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offer from "./offer.jsx";
import {OFFERS_NAME_TEST} from "../../mocks/test/data";

Enzyme.configure({
  adapter: new Adapter()
});
const offerValue = OFFERS_NAME_TEST[0];

it(`Should title click`, () => {
  const clickOffer = jest.fn();
  const onOver = jest.fn();

  const offer = shallow(
      <Offer offer={offerValue} clickOffer={clickOffer} onOver={onOver}/>
  );

  const offerClick = offer.find(`h2.place-card__name`);

  offerClick.props().onClick();

  expect(clickOffer.mock.calls.length).toBe(1);
});

it(
    `проверяем при наведении курсора на карточку в
  обработчик попадает информация об объекте недвижимости`, () => {
      const clickOffer = jest.fn();
      const onOver = jest.fn();

      const genreOffer = shallow(
          <Offer offer={offerValue} clickOffer={clickOffer} onOver={onOver}/>
      );

      const article = genreOffer.find(`article`);
      article.simulate(`mouseover`, {preventDefault: () => {}});

      expect(onOver.mock.calls.length).toBe(1);

      expect(onOver.mock.calls[0][0]).toMatchObject(offerValue);
    }
);

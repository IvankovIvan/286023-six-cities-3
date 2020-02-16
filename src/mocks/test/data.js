import {OfferType} from "../../const";

export const OFFERS_NAME_TEST = [
  {
    mark: true,
    image: `img/apartment-01.jpg`,
    price: 10,
    bookmark: false,
    rating: 1,
    name: `test1`,
    type: OfferType.APARTMENT
  },
  {
    mark: true,
    image: `img/room.jpg`,
    price: 9,
    bookmark: true,
    rating: 3,
    name: `test2`,
    type: OfferType.PRIVATE
  },
  {
    mark: false,
    image: `img/apartment-02.jpg`,
    price: 123,
    bookmark: true,
    rating: 2,
    name: `test3`,
    type: OfferType.APARTMENT
  },
  {
    mark: false,
    image: `img/apartment-03.jpg`,
    price: 43,
    bookmark: false,
    rating: 5,
    name: `test4`,
    type: OfferType.APARTMENT
  }
];

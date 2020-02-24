import {OfferType} from "../const.js";

const Cities = [{
  cityId: 1,
  cityName: `Paris`,
},
{
  cityId: 2,
  cityName: `Cologne`
},
{
  cityId: 3,
  cityName: `Brussels`
},
{
  cityId: 4,
  cityName: `Amsterdam`
},
{
  cityId: 5,
  cityName: `Hamburg`
},
{
  cityId: 6,
  cityName: `Dusseldorf`
},


];

const Offers = [
  {
    mark: true,
    image: `img/apartment-01.jpg`,
    price: 100,
    bookmark: false,
    rating: 3,
    name: `luxurious apartment at great location`,
    type: OfferType.APARTMENT,
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
    mark: true,
    image: `img/room.jpg`,
    price: 123,
    bookmark: true,
    rating: 3,
    name: `Wood and stone place`,
    type: OfferType.PRIVATE,
    coordinates: [52.369553943508, 4.85309666406198]
  },
  {
    mark: false,
    image: `img/apartment-02.jpg`,
    price: 98,
    bookmark: true,
    rating: 2,
    name: `Canal View Prinsengracht`,
    type: OfferType.APARTMENT,
    coordinates: [52.3909553943508, 4.929309666406198]
  },
  {
    mark: false,
    image: `img/apartment-03.jpg`,
    price: 131,
    bookmark: false,
    rating: 5,
    name: `Nice, cozy, warm big bed apartment`,
    type: OfferType.APARTMENT,
    coordinates: [52.3809553943508, 4.939309666406198]
  }
];

export {Offers, Cities};

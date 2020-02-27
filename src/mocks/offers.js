import {OfferType} from "../const.js";

const Cities = [{
  cityId: 1,
  cityName: `Paris`,
  coordinates: [48.856805, 2.352208]
},
{
  cityId: 2,
  cityName: `Cologne`,
  coordinates: [50.937719, 6.960448]
},
{
  cityId: 3,
  cityName: `Brussels`,
  coordinates: [50.849969, 4.351355]
},
{
  cityId: 4,
  cityName: `Amsterdam`,
  coordinates: [52.38333, 4.9]
},
{
  cityId: 5,
  cityName: `Hamburg`,
  coordinates: [53.552534, 9.993708]
},
{
  cityId: 6,
  cityName: `Dusseldorf`,
  coordinates: [51.228912, 6.773143]
},
];

const Offers = [
  // Paris
  {
    cityId: 1,
    mark: true,
    image: `img/apartment-01.jpg`,
    price: 321,
    bookmark: false,
    rating: 5,
    name: `luxurious apartment at great location`,
    type: OfferType.APARTMENT,
    coordinates: [48.870029, 2.314325]
  },
  {
    cityId: 1,
    mark: true,
    image: `img/room.jpg`,
    price: 43,
    bookmark: true,
    rating: 2,
    name: `Wood and stone place`,
    type: OfferType.PRIVATE,
    coordinates: [48.869049, 2.351514]
  },
  {
    cityId: 1,
    mark: true,
    image: `img/apartment-01.jpg`,
    price: 100,
    bookmark: false,
    rating: 3,
    name: `luxurious apartment at great location`,
    type: OfferType.APARTMENT,
    coordinates: [48.852295, 2.379518]
  },
  {
    cityId: 1,
    mark: true,
    image: `img/room.jpg`,
    price: 123,
    bookmark: true,
    rating: 3,
    name: `Wood and stone place`,
    type: OfferType.PRIVATE,
    coordinates: [48.842581, 2.353439]
  },
  {
    cityId: 1,
    mark: false,
    image: `img/apartment-02.jpg`,
    price: 98,
    bookmark: true,
    rating: 2,
    name: `Canal View Prinsengracht`,
    type: OfferType.APARTMENT,
    coordinates: [48.859099, 2.306999]
  },
  {
    cityId: 1,
    mark: true,
    image: `img/apartment-01.jpg`,
    price: 100,
    bookmark: false,
    rating: 3,
    name: `luxurious apartment at great location`,
    type: OfferType.APARTMENT,
    coordinates: [48.856805, 2.352208]
  },
  {
    cityId: 1,
    mark: true,
    image: `img/room.jpg`,
    price: 123,
    bookmark: true,
    rating: 3,
    name: `Wood and stone place`,
    type: OfferType.PRIVATE,
    coordinates: [48.847118, 2.329857]
  },
  // Amsterdam
  {
    cityId: 4,
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
    cityId: 4,
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
    cityId: 4,
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
    cityId: 4,
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
    cityId: 4,
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

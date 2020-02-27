import {OfferType} from "../../const";

const CITIES = [{
  cityId: 1,
  cityName: `Paris`,
  coordinates: [51.228912, 6.773143]

},
{
  cityId: 2,
  cityName: `Cologne`,
  coordinates: [51.228912, 6.773143]

},
{
  cityId: 3,
  cityName: `Brussels`,
  coordinates: [51.228912, 6.773143]
},
{
  cityId: 4,
  cityName: `Amsterdam`,
  coordinates: [51.228912, 6.773143]
},
{
  cityId: 5,
  cityName: `Hamburg`,
  coordinates: [51.228912, 6.773143]
},
{
  cityId: 6,
  cityName: `Dusseldorf`,
  coordinates: [51.228912, 6.773143]
},


];

const OFFERS_NAME_TEST = [
  {
    cityId: 1,
    mark: true,
    image: `img/apartment-01.jpg`,
    price: 10,
    bookmark: false,
    rating: 1,
    name: `test1`,
    type: OfferType.APARTMENT,
    coordinates: [48.870029, 2.314325]
  },
  {
    cityId: 2,
    mark: true,
    image: `img/room.jpg`,
    price: 9,
    bookmark: true,
    rating: 3,
    name: `test2`,
    type: OfferType.PRIVATE,
    coordinates: [48.870029, 2.314325]
  },
  {
    cityId: 3,
    mark: false,
    image: `img/apartment-02.jpg`,
    price: 123,
    bookmark: true,
    rating: 2,
    name: `test3`,
    type: OfferType.APARTMENT,
    coordinates: [48.870029, 2.314325]
  },
  {
    cityId: 4,
    mark: false,
    image: `img/apartment-03.jpg`,
    price: 43,
    bookmark: false,
    rating: 5,
    name: `test4`,
    type: OfferType.APARTMENT,
    coordinates: [48.870029, 2.314325]
  }
];

export {CITIES, OFFERS_NAME_TEST};

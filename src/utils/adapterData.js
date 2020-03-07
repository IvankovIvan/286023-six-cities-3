import {OfferType} from "../const";

// const test = [
//   {
//     city: {
//       name: `Cologne`,
//       location: {
//         latitude: 50.938361,
//         longitude: 6.959974,
//         zoom: 13}
//     },
//     preview_image: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
//     images: [
//       `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
//       `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`],
//     title: `Perfectly located Castro`,
//     is_favorite: false,
//     is_premium: true,
//     rating: 2.6,
//     type: `room`,
//     bedrooms: 1,
//     max_adults: 1,
//     price: 167,
//     goods: [`Baby seat`, `Laptop friendly workspace`, `Air conditioning`],
//     host: {
//       id: 25,
//       name: `Angelina`,
//       is_pro: true,
//       avatar_url: `img/avatar-angelina.jpg`},
//     description: `This is a place f, and create. Designed with a 'slo`,
//     location: {
//       latitude: 50.945361,
//       longitude: 6.962974,
//       zoom: 16},
//     id: 1
//   }
//
// ];

export const adapterData = (currentData) => {
  const citiesName = new Set(currentData.map((offer) => offer.city.name));
  const cities = Array.from(citiesName)
        .map((cityName, index) => {
          const city = currentData
            .filter((offer) => (offer.city.name === cityName))[0].city;
          return {
            cityId: index,
            cityName: city.name,
            coordinates: [city.location.latitude, city.location.longitude]
          };
        });
  const offers =
    currentData.map((offer) => {
      const cityId = cities
        .filter((city) => city.cityName === offer.city.name)[0].cityId;
      return {
        cityId,
        mark: offer.is_premium,
        image: offer.preview_image,
        price: offer.price,
        bookmark: offer.is_favorite,
        rating: offer.rating,
        name: offer.description,
        type: offer.type ? OfferType.PRIVATE : OfferType.APARTMENT,
        coordinates: [offer.location.latitude, offer.location.longitude]
      };
    });
  return {
    cities,
    offers
  };

};

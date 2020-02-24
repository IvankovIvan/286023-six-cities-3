import {Offers, Cities} from "./mocks/offers.js";

const initialState = {
  cities: Cities,
  city: `Amsterdam`,
  offers: Offers
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

const reducer = (state = initialState, action) => {

  return state;
};

export {reducer, ActionType};

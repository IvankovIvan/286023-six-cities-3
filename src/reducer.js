import {Offers, Cities} from "./mocks/offers.js";
import {extend} from "./utils";

const initialState = {
  cities: Cities,
  cityIdCurrent: 1,
  offers: Offers.filter((offer) => (offer.cityId === 1))
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

const ActionCreator = {
  changeCity: (cityId) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityId
  })
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        cityIdCurrent: action.payload,
        offers: Offers.filter((offer) => (offer.cityId === action.payload))
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};

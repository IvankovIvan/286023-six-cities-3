import {Offers, Cities} from "./mocks/offers.js";
import {adapterData} from "./utils/adapterData";

const initialState = {
  cities: Cities,
  cityIdCurrent: 0,
  offers: Offers.filter((offer) => (offer.cityId === 0)),
  offersAll: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`
};

const ActionCreator = {
  changeCity: (cityId) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityId
  }),

  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers
    };
  }
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const data = adapterData(response.data);
        dispatch(ActionCreator.loadOffers(data));
      });
  }
};

const reducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        ...{
          cityIdCurrent: action.payload,
          offers: state
            .offersAll.filter((offer) => (offer.cityId === action.payload))
        }
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        ...{
          cityIdCurrent: 0,
          cities: action.payload.cities,
          offers: action.payload.offers.filter((offer) => (offer.cityId === 0)),
          offersAll: action.payload.offers
        }

      };
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};

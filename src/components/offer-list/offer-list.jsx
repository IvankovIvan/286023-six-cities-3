import React from "react";
import PropTypes from "prop-types";
import {OfferType} from "../../const.js";
import Offer from "../offer/offer.jsx";

const clickOffer = () => {};

const OfferList = (props) => {
  const {offers, onOver} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) =>
        <Offer key={offer + i} offer={offer}
          clickOffer={clickOffer}
          onOver={(offerCurrent) => onOver(offerCurrent)}
        />)
      }
    </div>
  );
};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(
      {
        mark: PropTypes.bool.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        bookmark: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(
            [OfferType.APARTMENT, OfferType.PRIVATE]).isRequired,
      }
  )).isRequired,
  onOver: PropTypes.func.isRequired
};

export default OfferList;

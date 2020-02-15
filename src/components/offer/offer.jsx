import React from "react";
import PropTypes from "prop-types";
import {OfferType} from "../../const.js";

const Offer = (props) => {
  const {offer, clickOffer, onOver} = props;
  const {mark, image, price, bookmark, rating, name, type} = offer;
  const className = bookmark ? `place-card__bookmark-button--active` : ``;
  const ratingStyle = {
    width: (rating * 20) + `%`
  };
  return (
    <article className="cities__place-card place-card"
      onMouseOver={(evt) => {
        evt.preventDefault();
        onOver(offer);
      }} >
      { mark ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        ``
      }
      <div
        className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image"
            src={image} width="260" height="200"
            alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span
              className="place-card__price-text">&#47;&nbsp;night
            </span>
          </div>
          <button className={`place-card__bookmark-button ${className} button`}
            type="button">
            <svg className="place-card__bookmark-icon" width="18"
              height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingStyle}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={clickOffer}>
          <a href="#" >{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape(
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
  ).isRequired,
  clickOffer: PropTypes.func.isRequired,
  onOver: PropTypes.func.isRequired
};

export default Offer;

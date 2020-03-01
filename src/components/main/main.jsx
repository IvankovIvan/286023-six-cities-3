import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {OfferType} from "../../const.js";
import withOfferList from "../../hocs/with-offer-list/with-offer-list.js";
import OfferList from "../offer-list/offer-list.jsx";
import Map from "../map/map.jsx";
import Cities from "../cities/cities.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import Header from "../header/header.jsx";

const OfferListWrapped = withOfferList(OfferList);
const CitiesWrapped = withActiveItem(Cities);


const Main = (props) => {
  const {offers, cityName} = props;
  const offersCount = offers.length === 0 ? 0 : offers.length;
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <Header isHref={false}/>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesWrapped />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersCount} places to stay in {cityName}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul
                  className="places__options places__options--custom
                  places__options--opened">
                  <li className="places__option places__option--active"
                    tabIndex="0">Popular
                  </li>
                  <li className="places__option" tabIndex="0">Price: low to
                    high
                  </li>
                  <li className="places__option" tabIndex="0">Price: high to
                    low
                  </li>
                  <li className="places__option" tabIndex="0">Top rated first
                  </li>
                </ul>
              </form>

              <OfferListWrapped offers={offers}/>

            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(
      {
        cityId: PropTypes.number.isRequired,
        mark: PropTypes.bool.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        bookmark: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(
            [OfferType.APARTMENT, OfferType.PRIVATE]).isRequired,
        coordinates: PropTypes.arrayOf(
            PropTypes.number.isRequired).isRequired,
      }
  )).isRequired,
  cityName: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  const cityName = state.cities
    .filter((city) => city.cityId === state.cityIdCurrent)[0].cityName;
  return ({
    offers: state.offers,
    cityName
  });
};
export {Main};
export default connect(mapStateToProps)(Main);

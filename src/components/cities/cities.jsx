import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

const Cities = (props) => {
  const {cities, onCityClick, idActive} = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => {
          return (
            <li className="locations__item" key={city.cityId}>
              <a className={`locations__item-link tabs__item
              ${idActive === city.cityId ? `tabs__item--active` : ``}
              `}
              onClick={() => {
                onCityClick(city.cityId);
              }}>
                <span>{city.cityName}</span>
              </a>
            </li>);
        })}
      </ul>
    </section>
  );
};

Cities.propTypes = {
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        cityId: PropTypes.number.isRequired,
        cityName: PropTypes.string.isRequired
      }
      ).isRequired,
  ),
  idActive: PropTypes.number.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCityClick(cityId) {
    dispatch(ActionCreator.changeCity(cityId));
  }
});

export {Cities};
export default connect(null, mapDispatchToProps)(Cities);

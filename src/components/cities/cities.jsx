import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

class Cities extends PureComponent {
  render() {
    const {cities, cityIdCurrent, onCityClick} = this.props;
    console.log(`cityIdCurrent: ` + cityIdCurrent);
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            return (
              <li className="locations__item" key={city.cityId}>
                <a className={`locations__item-link tabs__item ${
                  cityIdCurrent === city.cityId ? `tabs__item--active` : ``
                }`}
                onClick={() => {
                  console.log(city.cityId, cityIdCurrent);
                  onCityClick(city.cityId);
                }}>
                  <span>{city.cityName}</span>
                </a>
              </li>);
          })}
        </ul>
      </section>
    );
  }
}

Cities.propTypes = {
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        cityId: PropTypes.number.isRequired,
        cityName: PropTypes.string.isRequired
      }
      ).isRequired,
  ),
  cityIdCurrent: PropTypes.number.isRequired,
  onCityClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  cityIdCurrent: state.cityIdCurrent,

});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(cityId) {
    dispatch(ActionCreator.changeCity(cityId));
  }
});

export {Cities};
export default connect(mapStateToProps, mapDispatchToProps)(Cities);

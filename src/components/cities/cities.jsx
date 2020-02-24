import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Cities = (props) => {
  const {cities} = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, i) => {
          return (
            <li className="locations__item" key={city + i}>
              <a className="locations__item-link tabs__item" href="#">
                <span>{city}</span>
              </a>
            </li>);
        })}
      </ul>
    </section>
  );
};

Cities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

const mapStateToProps = (state) => ({
  cities: state.cities
});

export {Cities};
export default connect(mapStateToProps)(Cities);

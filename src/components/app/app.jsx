import React from "react";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {OfferType} from "../../const";

const App = (props) => {
  const {offers} = props;
  return (
    <Main offers={offers}/>
  );
};

App.propTypes = {
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
  )).isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers
});

export {App};

export default connect(mapStateToProps)(App);


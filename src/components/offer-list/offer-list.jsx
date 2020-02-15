import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferType} from "../../const.js";
import Offer from "../offer/offer.jsx";

const clickOffer = () => {};

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offer: {}
    };
  }

  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) =>
          <Offer key={offer + i} offer={offer}
            clickOffer={clickOffer}
            onOver={(offerCurrent) => {
              this.setState({
                offer: offerCurrent
              });
            }}
          />)
        }
      </div>
    );
  }
}

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
  )).isRequired
};

export default OfferList;

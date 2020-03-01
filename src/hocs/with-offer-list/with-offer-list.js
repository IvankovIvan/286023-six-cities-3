import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {OfferType} from "../../const";

const withOfferList = (Component) => {
  class WithOfferList extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        offer: {}
      };
      this.handleOver = this.handleOver.bind(this);
    }

    handleOver(offerCurrent) {
      this.setState({
        offer: offerCurrent
      });
    }

    render() {
      return (
        <Component {...this.props} onOver={this.handleOver}/>
      );
    }
  }

  WithOfferList.propTypes = {
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

  return WithOfferList;
};

export default withOfferList;

import React, {PureComponent} from 'react';

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

  return WithOfferList;
};

export default withOfferList;

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        idActive: props.cityIdCurrent
      };
      this.handleActive = this.handleActive.bind(this);
    }

    handleActive(val1, val2) {
      return (val1 === val2);
    }

    render() {
      return <Component
        {...this.props}
        isActive={this.handleActive}
        idActive={this.state.idActive}
      />;
    }

    componentDidUpdate(prevProps) {
      if (this.props.cityIdCurrent !== prevProps.cityIdCurrent) {
        this.setState({
          idActive: this.props.cityIdCurrent
        });
      }
    }
  }

  WithActiveItem.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
          cityId: PropTypes.number.isRequired,
          cityName: PropTypes.string.isRequired
        }
        ).isRequired,
    ),
    cityIdCurrent: PropTypes.number.isRequired,
  };

  return WithActiveItem;
};

export default withActiveItem;

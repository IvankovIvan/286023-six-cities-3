import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.handleActive = this.handleActive.bind(this);
    }

    handleActive(val1, val2) {
      return (val1 === val2);
    }

    render() {
      return <Component
        {...this.props}
        isActive={this.handleActive}
      />;
    }
  }
  return WithActiveItem;
};

export default withActiveItem;

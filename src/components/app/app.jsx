import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {offersName} = props;
  return (
    <Main offersName={offersName}/>
  );
};

App.propTypes = {
  offersName: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired
};

export default App;

import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {articlesCount} = props;
  return (
    <Main articlesCount={articlesCount}/>
  );
};

export default App;

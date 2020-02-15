import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
// import {ARTICLES_COUNT, OFFERS_NAME} from "./const.js";
// import {getRandomIntegerNumber, generateArrayEmpty} from "./utils.js";
import offers from "./mocks/offers.js";

// const offersName = generateArrayEmpty(ARTICLES_COUNT);
// const offersNameCount = OFFERS_NAME.length - 1;
// offersName.forEach((offer, i) => {
//   offersName[i] = OFFERS_NAME[getRandomIntegerNumber(offersNameCount)];
// });

ReactDOM.render(
    <App offers={offers}/>,
    document.querySelector(`#root`)
);

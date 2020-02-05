import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {ARTICLES_COUNT} from "./const.js";


ReactDOM.render(
    <App articlesCount={ARTICLES_COUNT}/>,
    document.querySelector(`#root`)
);

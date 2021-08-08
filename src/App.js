import SearchArea from "./SearchArea";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import WatchArea from "./WatchArea";

const App = () => {
  return (
    <div>
      <header>
        <a href="/">Youtube-Clon</a>
      </header>
      <Router>
        <SearchArea path="/" />
        <WatchArea path="/watch/:id" />
      </Router>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

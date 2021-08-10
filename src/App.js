import SearchArea from "./SearchArea";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import WatchArea from "./WatchArea";
import ColorContext from "./ColorContext";

const App = () => {
  const themeColor = useState("red");
  return (
    <ColorContext.Provider value={themeColor}>
      <div>
        <header>
          <a href="/">Youtube-Clon</a>
        </header>
        <Router>
          <SearchArea path="/" />
          <WatchArea path="/watch/:id" />
        </Router>
      </div>
    </ColorContext.Provider>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

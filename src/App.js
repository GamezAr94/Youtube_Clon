import SearchArea from "./SearchArea";
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <header>
        <a href="/">Youtube-Clon</a>
      </header>
      <SearchArea />
      
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

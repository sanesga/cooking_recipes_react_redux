import React, { Component } from "react";
import Recetas from "./components/recetas";
import Header from "./components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Recetas></Recetas>
        <button className="add_button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    );
  }
}

export default App;

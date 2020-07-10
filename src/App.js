import React from "react";

import "./App.css";
import { Link, Router } from "@reach/router";
import View from "./components/View/View";
import Broadcast from "./components/Broadcast/Broadcast";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <h1>TokBox Proof of Concept!</h1>
      <nav>
        <Link to="/">Home</Link> <Link to="broadcast">Broadcast</Link>{" "}
        <Link to="view">Tune in!</Link>
      </nav>

      <Router>
        <Home path="/" />
        <Broadcast path="broadcast" />
        <View path="view" />
      </Router>
    </div>
  );
}

export default App;

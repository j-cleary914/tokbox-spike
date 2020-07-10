import React from "react";

import "./App.css";
import { Link, Router } from "@reach/router";

function App() {
  const Home = () => (
    <div>
      <h2>
        Time Flies like an Arrow,
        <br />
        Fruit Flies like a Banana
      </h2>
    </div>
  );

  const Dashboard = () => (
    <div>
      <h2>You are Broadcasting video and audio</h2>
    </div>
  );

  const Invoice = (props) => (
    <div>
      <h2>You are tuning in to a Broadcast</h2>
    </div>
  );

  return (
    <div className="App">
      <h1>TokBox Proof of Concept!</h1>
      <nav>
        <Link to="/">Home</Link> <Link to="dashboard">Broadcast</Link>{" "}
        <Link to="invoice">Tune in!</Link>
      </nav>

      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
        <Invoice path="invoice" />
      </Router>
    </div>
  );
}

export default App;

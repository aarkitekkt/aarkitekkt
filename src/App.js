import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dev from "./pages/Dev";
import ThreeD from "./pages/3d";
import Built from "./pages/Built";
import Wrapper from "./Components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dev" component={Dev} />
          <Route exact path="/3d" component={ThreeD} />
          <Route exact path="/built" component={Built} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;

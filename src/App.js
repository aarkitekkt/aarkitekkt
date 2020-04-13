import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>

        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
        </Wrapper>

      </div>
    </Router>
  );
}

export default App;

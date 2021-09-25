import "./App.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Nav_home_comps/Home";
import Header from "./Nav_home_comps/Header";
import Contact from "./Nav_home_comps/Contact";
import About from "./Nav_home_comps/About";
import Onrent from "./rent_sell_comps/Onrent";
import Onsell from "./rent_sell_comps/Onsell";
import Renthere from "./seller_comps/Renthere";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* homepage */}
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          {/* about */}
          <Route path="/about">
            <Header />
            <About />
          </Route>

          {/* contact */}
          <Route path="/contact">
            <Header />
            <Contact />
          </Route>

          {/* rent / sell on this site */}
          <Route path="/rent-on-digirent">
            <Header />
            <Renthere />
          </Route>

          {/* items on rent */}
          <Route path="/items-on-rent">
            <Header />
            <Onrent />
          </Route>

          {/* items on sell */}
          <Route path="/items-on-sell">
            <Header />
            <Onsell />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

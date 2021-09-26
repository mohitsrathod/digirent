import "./App.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Nav_home_comps/Home";
import Header from "./Nav_home_comps/Header";
import Contact from "./Nav_home_comps/Contact";
import About from "./Nav_home_comps/About";
import Onrent from "./rent_sell_comps/Onrent";
import Onsell from "./rent_sell_comps/Onsell";
import Renthere from "./seller_comps/Renthere";
import Footer from "./Nav_home_comps/Footer";
import Privacy_Policy from "./policies/Privacy_Policy";
import Refund_Policy from "./policies/Refund_Policy";
import styled from "styled-components";
import mainbg from "./assets/mainbg.png";

function App() {
  return (
    <MainDiv>
      <Router>
        <Switch>
          {/* homepage */}
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

          {/* about */}
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>

          {/* contact */}
          <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>

          {/* rent / sell on this site */}
          <Route path="/rent-on-digirent">
            <Header />
            <Renthere />
            <Footer />
          </Route>

          {/* items on rent */}
          <Route path="/items-on-rent">
            <Header />
            <Onrent />
            <Footer />
          </Route>

          {/* items on sell */}
          <Route path="/items-on-sell">
            <Header />
            <Onsell />
            <Footer />
          </Route>

          {/* privacy policy */}
          <Route path="/privacy-policy">
            <Header />
            <Privacy_Policy />
            <Footer />
          </Route>

          {/* refund policy */}
          <Route path="/refund-policy">
            <Header />
            <Refund_Policy />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </MainDiv>
  );
}

export default App;

const MainDiv = styled.div`
  /* display: flex; */
  background: url(${mainbg});
`;

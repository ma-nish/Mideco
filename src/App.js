import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// import FacebookLogin from "react-facebook-login";
// import GoogleLogin from "react-google-login";

import Header from "./components/Header";
import Home from "./components/Home";
import HowItWorks from "./components/How_it_works";
import InteriorDesigners from "./components/Interior_designers";
import Furnitures from "./components/Furnitures";
import BestStores from "./components/BestStores";
import OurProcess from "./components/Our_process";
import AboutUs from "./components/About_us";
import StyleQuiz from "./components/Style_quiz";
import AboveFooter from "./components/AboveFooter";
import Footer from "./components/Footer";

function App() {
  // const responseFacebook = (response) => {
  //   console.log("response", response);
  // };

  // const responseGoogle = (response) => {
  //   console.log(response);
  // };

  return (
    <Fragment>
      <main className="page-wrapper">
        <Router>
          <Switch>
            <Route path="/">
              <Header />
              <Home />
              <HowItWorks />
              <InteriorDesigners />
              <Furnitures />
              <BestStores />
              <OurProcess />
              <StyleQuiz />
              <AboutUs />
              <AboveFooter />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </main>
    </Fragment>
  );
}

export default App;

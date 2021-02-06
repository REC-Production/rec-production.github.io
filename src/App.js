import React from "react";

import Card from "./Card";
import Logo from "./Logo";
import Works from "./Works";
import Equip from "./Equip";
import Price from "./Price";
import Footer from "./Footer";
import About from "./About";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="card-container" id="main">
        <Card />
        <Logo />
        <About />
      </div>
      <div className="works-container" id="works">
        <h1 className="section-header">Наши Работы</h1>
        <Works />
      </div>
      <div className="equip-container" id="equip">
        <Equip />
      </div>
      <div className="price-container" id="price">
        <Price />
      </div>  
      <Footer/>
    </div>
  );
}

export default App;

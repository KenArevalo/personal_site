import React from "react";
import './App.css';
import TypeIt from "typeit-react";


function secondContainer() {
    return (
        <div className="second-Header">
            <div className="typeit-text">
            <TypeIt
  getBeforeInit={instance => {
    instance
      .pause(1500)
      .type("Creating your ideas...")
      .pause(2000)
      .delete(8)
      .pause(750)
      .type("vision...")
      .pause(2000)
      .delete(9)
      .pause(750)
      .type("brands...")
      .pause(2000)
      .delete(9)
      .pause(750)
      .type("business...")
      .pause(3000)
      .delete(25)
      .pause(750)
      .type("Building relationships. ")
      .pause(3500)
      .delete(15)
      .pause(500)
      .type("connections. ")

    // Remember to return it
    return instance;
  }}
/>
    </div>
    <div className="background-img1">
      <img src="../Coding Background_cropped.png" alt="img1"/>
    </div>
    {/* <div className="background-img2">
      <img src="../server_background2.png" alt="img2" />
    </div> */}
  </div>
    
    );
}

export default secondContainer;

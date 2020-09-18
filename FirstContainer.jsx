import React from "react";
import './App.css';
// import FadeIn from "react-fade-in";


function firstContainer() {

  window.onload = function() {
    window.setTimeout(fadeout, 3000); //3 seconds
  }
  
  function fadeout() {
    document.getElementById('Dev-font').style.opacity = '0';
  }

    return (
      <div className="Header">
        <header className="App-header">
          <div className="K2-logo">
            <img src="../K2_Logo_1.png" alt="K2"/>
          </div>
          {/* <FadeIn> */}
          <p id="Dev-font">
            |DEVELOPMENT TECHNOLOGIES|
           </p>
           {/* </FadeIn> */}
        </header>
      </div>
    );
  }

export default firstContainer;

// Primary source code below

// window.onload = function() {
//   window.setTimeout(fadeout, 8000); //8 seconds
// }

// function fadeout() {
//   document.getElementById('fadeout').style.opacity = '0';
// }

// eslint-disable-next-line
{/* <div id="Dev-font">
|DEVELOPMENT TECHNOLOGIES|
</div> */}

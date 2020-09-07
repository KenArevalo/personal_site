import React from "react";
import './App.css';
import TypeIt from "typeit-react";


// function secondContainer() {
//     return (
//         <div className="second-Header">
//             <header className="middle-container">
//             <TypeIt
//         options={{
//           strings: ["This will be typed!"],
//           speed: 150,
//           waitUntilVisible: true
//         }}
//       />
//             </header>
//     </div>
//     );
// }

function secondContainer() {
    return (
        <div className="second-Header">
            <header className="middle-container">
            <TypeIt
        options={{
          strings: ["This will be typed!"],
          speed: 150,
          waitUntilVisible: true
        }}
      />
            </header>
    </div>
    );
}

export default secondContainer;
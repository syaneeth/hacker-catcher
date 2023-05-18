import * as React from "react";
import "./App.css";
import robotSayingHiRemovebgPreview from "./assets/robotSayingHiRemovebgPreview.png";
import floatingRobotRemovebgPreview from "./assets/floatingRobotRemovebgPreview.png";
import rectangle1 from "./assets/rectangle1.svg";
const App = () => {
  return (
    <div className="start">
      <div className="hospital">
        <img
          className="floating-robot-removebg-preview"
          src={floatingRobotRemovebgPreview}
        />
        <div className="flex-container">
          <img className="rectangle-1" src={rectangle1} />
          <div className="cat-absolute-container">
            <span className="hacker-catcher">Hacker Catcher</span>
          </div>
          <img
            className="robot-saying-hi-removebg-preview"
            src={robotSayingHiRemovebgPreview}
          />
          <div className="rectangle-2">
            <span className="play">PLAY</span>
          </div>
          <div className="rectangle-3">
            <span className="load-game">LOAD GAME</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;

import React from "react";
import "./App.css";
import image409 from "./images/image409.jpg";
import image410 from "./images/image410.png";
import image411 from "./images/image411.jpg";
import image412 from "./images/image412.jpg";
import font1 from "./images/font1.jpg";
import image413 from "./images/image413.jpg";
import font2 from "./images/font2.jpg";
import Ellipse from "./images/Ellipse 19.jpg"
const MainContent = () => {
  return (
    <div className="mainContent">
      <div className="detailLable">
        <label htmlFor="">DETAILS</label>
        <label htmlFor="">DELIVERY</label>
        <label htmlFor="">FIT</label>
        <label htmlFor="">SHARE</label>
        <div className="font2">
          <img src={font2} />
        </div>
      </div>
      <div className="Images">
        <div>
        <img src={image409} />
        <img src={Ellipse}  className="heart"/>
        </div>
        <div>
          <img src={image410} />
          <img src={image411} />
        </div>
        <div>
          <div>
            <img src={font1} />
          </div>
          <img src={image412} />
        </div>
        <div>
          <img src={image413} />
        </div>
      </div>
      <div className="font3">
        <label className="jonathan">JONATHAN SIMKHAI</label>
        <div>

        <label className="lurex">Lurex Linen Viscose Jacket in Conchiglia</label>
        </div>
        <h2>$225</h2>
        <label className="colorConchiglia">COLOR CONCHIGLIA</label>
      </div>
    </div>
  );
};

export default MainContent;

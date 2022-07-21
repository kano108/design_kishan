import React from "react";
import "./App.css";
import image409 from "./images/image409.jpg";
import image410 from "./images/image410.png";
import image411 from "./images/image411.jpg";
import image412 from "./images/image412.jpg";
import font1 from "./images/font1.jpg";
import image413 from "./images/image413.jpg";
// import font2 from "./images/font2.jpg";
import Ellipse from "./images/Ellipse 19.jpg";
import image414 from "./images/image414.jpg";
import image415 from "./images/image415.jpg";
import { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const MainContent = () => {
  const [size , setSize] = useState("L")
  const [style , setStyle] = useState("")
 

  const button1 = () =>{
    setSize("XS")
    setStyle("setButton")
  }
  const button2 = () =>{
    setSize("S")
  }
  const button3 = () =>{
    setSize("M")
  }
  const button4 = () =>{
    setSize("L")
  }
  const button5 = () =>{
    setSize("XXL")
  }
  return (

    <div className="mainContent">
      <div className="detailLable">
        <label htmlFor="">DETAILS</label>
        <label htmlFor="">DELIVERY</label>
        <label htmlFor="">FIT</label>
        <label htmlFor="">SHARE</label>
        <div className="font2">
          {/* <img src={font2} /> */}
          <p>
            The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot
            with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.
            </p>
          <p>See the EDITOR’S NOTE</p>
          <p>Learn about the DESIGNER</p>
        </div>
      </div>
      <div className="Images">
        <div>
          <img src={image409} />
          <img src={Ellipse} className="heart" />
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
        <div>
          <label className="JonathanSimkhai">Jonathan Simkhai</label>
          <label style={{width:'59px'}} className="JonathanSimkhai">Blazers</label>
          <label className="JonathanSimkhai">Viscose</label>
        </div>
     
        <div >
          <label style={{fontWeight:'700',textTransform:'uppercase',lineHeight:'120%',height:'17px',lineHeight: '500%'}}>a note from the editor</label>
        </div>
        <div>
          <label className="font10">The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. </label>
        </div>
      </div>
      <div className="font3">
        <label className="jonathan">JONATHAN SIMKHAI</label>
        <div>
          <label className="lurex"> Lurex Linen Viscose Jacket in Conchiglia</label>
        </div>
        <h2>$225</h2>
        <p>COLOR CONCHIGLIA</p>
        <div>
          <img src={image414}/>
          <img src={image415}/>
        </div>
        <div className="size">
          <h2>SIZE</h2>
          <p>{size}</p>
        </div>
        <div>
          <button className="button1" onClick={button1}>XS</button>
          <button className="button2" onClick={button2}>S</button>
          <button className="button3" onClick={button3}>M</button>
          <button className="button4" onClick={button4}>L</button>
          <button className="button5" onClick={button5}>XXL</button>
        </div>
        <div>
          <button className="addToBag">
            ADD TO BAG <ArrowForwardIcon/>
          </button>
        </div>
          <p className="paregraph1">Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
           <p className="paragraph2">Speak to a Personal Stylist CHAT NOW</p> 
      </div>
    </div>
  );
};

export default MainContent;

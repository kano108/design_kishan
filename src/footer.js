import React from "react";
import "./App.css";
const Footer = () => {
  return (
    <>
      <div className="JonathanSimkhai1">
        <label className="JonathanSimkhai">Jonathan Simkhai</label>
        <label className="JonathanSimkhai">Blazers</label>
        <label className="JonathanSimkhai">Viscose</label>
      </div>
      <div>
        <label
          style={{
            fontWeight: "700",
            textTransform: "uppercase",
            lineHeight: "120%",
            height: "17px",
            float:"left",
            lineHeight: "5000%",
            paddingLeft:"39px"
          }}
        >
          a note from the editor
        </label>
      </div>

      <div>
        <label className="font10">
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky.{" "}
        </label>
      </div>
    </>
  );
};

export default Footer;

import React, { useState } from "react";

export default function Darkmode() {
  const [mode, setmode] = useState({
    backgroundColor: "black",
    color: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const toogleStyle = () => {
    if (mode.backgroundColor === "white") {
      setmode({
        backgroundColor: "black",
        color: "white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setmode({
        backgroundColor: "white",
        color: "black",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  <button onClick={toogleStyle}>{btnText} </button>;
}

import React, { useState } from "react";
import Navbar from "./Components/navbar";
import Textarea from "./Components/textform";
import Alert from "./Components/alert";
// import About from "./Components/about";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "Success");
      setBtnText("Enable Light Mode");
      // document.title = "TextUtils-DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
      setBtnText("Enable Dark Mode");
      // document.title = "TextUtils-Home";
    }
  };
  const blueMode = () => {
    if (mode === "white") {
      setMode("blue");
      document.body.style.backgroundColor = "white";
      showAlert("Blue theme has been enabled", "Success");
      // setBtnText("Enable Light Mode");
    } else {
      setMode("white");
      document.body.style.backgroundColor = "#1d51a3";
      showAlert("Light mode has been enabled", "Success");
      // setBtnText("Enable Blue Mode");
    }
  };
  return (
    <div>
      <Navbar
        mode={mode}
        toggleMode={toggleMode}
        btnText={btnText}
        blueMode={blueMode}
      />
      <Alert alert={alert} />

      <div className="container my-3 ">
        <Textarea
          heading="Enter the text to analyze"
          mode={mode}
          blueMode={blueMode}
        />
      </div>
      {/* <About /> */}
    </div>
  );
}

export default App;

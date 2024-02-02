import React, { useState } from "react";

export default function Textarea(props) {
  let [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Words has been chanded to large", "Success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("Words has been changed to small", "Success");
  };
  const handleClear = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      style={{
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#6b6a4b" : "white",
            color: props.mode === "dark" ? "light" : "black",
          }}
          id="mybox"
          rows="8"
        ></textarea>
        <button
          className="btn btn-primary mx-3"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary"
          onClick={handleLowClick}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={handleClear}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-4">
        <h1>Your result </h1>
        <p>{text}</p>
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
      </div>
    </div>
  );
}

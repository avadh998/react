import React, { useState } from "react";
import "./TextForm.css";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("The text has been clear.", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control custom-textarea"
          id="exampleFormControlTextarea1"
          rows="7"
          placeholder="Enter text here"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#0e0e0e",
            color: props.mode === "light" ? "black" : "white",
            "--placeholder-color":
              props.mode === "light" ? "#5f5f5fff" : "#727272ff",
          }}
        ></textarea>
        <button
          className={`btn btn-${props.btnColor} mt-3 ms-3`}
          onClick={handleUpClick}
          disabled={text.length === 0}
          
        >
          Convert to UPPERCASE
        </button>
        <button
          className={`btn btn-${props.btnColor} mt-3 ms-3`}
          onClick={handleLoClick}
          disabled={text.length === 0}
        >
          Convert to lowercase
        </button>
        <button
          className={`btn btn-${props.btnColor} mt-3 ms-3`}
          onClick={handleClearText}
          disabled={text.length === 0}
        >
          Clear text
        </button>
        <button
          type="submit"
          onClick={speak}
          className={`btn btn-${props.btnColor} mt-3 ms-3`}
          disabled={text.length === 0}
        >
          Speak
        </button>
      </div>
      <div className="container my-5">
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>
      </div>
    </>
  );
}

//

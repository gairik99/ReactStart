import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(""); // Initial value set to an empty string

  const handleChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase", "success");
  };

  const handleLowerClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase", "success");
  };

  const handleReverseClick = () => {
    let newText = text.split(" ").reverse().join(" ");
    setText(newText);
    props.showAlert("Reversed!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("TextArea Cleaned", "success");
  };

  const numberOfWors = (text) => {
    let arr = text.split(/\s+/);
    let cnt = 0;
    for (let word of arr) {
      if (word.length) cnt++;
    }
    return cnt;
  };

  const numberOfChar = (text) => {
    let arr = text.split("");
    let cnt = 0;
    for (let word of arr) {
      if (word.length || word === "") cnt++;
    }
    return cnt;
  };

  return (
    <>
      <div
        className="container "
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            onChange={handleChange}
            value={text} // Bind the value to the state
            id="exampleFormControlTextarea1"
            rows="5"
            style={{
              backgroundColor: props.mode === "dark" ? "#b6ad90" : "white",
              caretColor: 'black',
              cursor: "pointer"
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2 my-1" disabled={text.length === 0}
          onClick={handleUpClick}
        >
          Convert To Upper Case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-1"
          disabled={text.length === 0}
          onClick={handleLowerClick}
        >
          Convert To Lower Case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-1"
          disabled={text.length === 0}
          onClick={handleReverseClick}
        >
          Reverse Wordwise
        </button>
        <button type="button" className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={handleClearClick}>clearText</button>
      </div >
      <div
        className="container my-5"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Summary</h3>
        <p>
          Total Words - {numberOfWors(text)} Total Character -{" "}
          {numberOfChar(text)}
        </p>
      </div>
    </>
  );
}

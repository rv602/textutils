import React, { useState } from "react";

export default function TextForm(props) {

  const analysis = (comp) => {
    let text = comp.split(/[ ]+/)
    let text2 = text.join(" ")
    return text2
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    previewTextSetter(newText)
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    previewTextSetter(newText)
  };

  const handleClearClick = (event) => {
    setText("");
    previewTextSetter("")
  };

  const handleExtraSpaces = (event) => {
    let newText = previewText.split(/[ ]+/)
    previewTextSetter(newText.join(" "))
  };

  const handleCopyClick = () => {
    var copyText = document.getElementById("myBox");
    navigator.clipboard.writeText(copyText.value);
  };

  const handlePreviewClick = () => {
    var copyText = document.getElementById("myPreviewBox");
    navigator.clipboard.writeText(copyText.value);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    previewTextSetter(event.target.value);
  };

  const [text, setText] = useState("");
  const [previewText, previewTextSetter] = useState("")

  let defaultMin = "No text given"
  let preview = ""

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy to Clipboard
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <div className="accordion my-2" id="accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', border: '1px solid white' }}>
                <strong>Text analysis</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2 className="my-2">Your text summary</h2>
                <p>
                  {
                    text
                      .replace(/\n/g, " ")
                      .split(" ")
                      .filter((value) => value !== "").length
                  }{" "}
                  words {text.length} characters
                </p>
                {/* <p>{text.length === 0 ? defaultMin = "No text given" : defaultMin = String(0.08 * text.trim().split(" ").length) + " minutes to read"}</p> */}
                <p>{text.length === 0 ? defaultMin = "No text given" : defaultMin = String(0.08 * analysis(text).trim().split(" ").length) + " minutes to read"}</p>
              </div>
            </div>
          </div>
        </div>

        <textarea readOnly className="form-control my-3" value={previewText} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myPreviewBox" rows="8"></textarea>

        <button disabled={text.length === 0} className="btn btn-primary" onClick={handlePreviewClick}>
          Copy to Clipboard
        </button>
      </div>
    </>
  );
}
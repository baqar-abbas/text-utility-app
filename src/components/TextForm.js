import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
    setText(event.target.value);
    }
    const handleUpClick = () => {
    setText(text.toUpperCase());
    }
    const handleLoClick = () => {
      setText(text.toLowerCase());
    }
    const handleClearClick = () => {
      setText("");
    }
    const handleCopy = () => { 
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
  return (
    <>
    <div className='container'>
     <h1>{props.heading}</h1>
  {/* <label htmlFor="myBox" class="form-label">Example textarea</label> */}
  <div className="mb=3">
  <textarea className="form-control" id="myBox" rows="8" onChange = {handleOnChange} value={text} placeholder="Enter Text here"></textarea>
  </div>
  <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to lowerCase</button>
  <button className="btn btn-primary my-3" onClick={handleClearClick}>Clear All Text</button>
  <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy All Text</button>
    </div>
    <div className="container my-4">
      <h2>Your Text summary</h2>
      <p>{text.split(' ').length} words, {text.length} characters</p>
      <p>{0.008 * text.split(' ').length} Minutes to read (Time required to read)</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}

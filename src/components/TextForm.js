import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleOnChange = (event) => {
    setText(event.target.value);
    }
    const handleUpClick = () => {
    setText(text.toUpperCase());
    }
  return (
    <div>
     <h1>{props.heading}</h1>
  {/* <label htmlFor="myBox" class="form-label">Example textarea</label> */}
  <div className="mb=3">
  <textarea className="form-control" id="myBox" rows="8" onChange = {handleOnChange} value={text}></textarea>
  </div>
  <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}

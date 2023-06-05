import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
    setText(event.target.value);
    }
    const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = () => {
      setText(text.toLowerCase());
      props.showAlert("Converted to LowerCase", "success");
    }
    const handleClearClick = () => {
      setText("");
      props.showAlert("Text has been cleared", "success");
    }
    const handleCopy = () => { 
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipbooard", "success");
    }
    const handleExtaSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces have been removed", "success");
    }
  return (
    <>
    <div className='container'>
     <h1>{props.heading}</h1>
  {/* <label htmlFor="myBox" class="form-label">Example textarea</label> */}
  <div className="mb=3">
  <textarea className="form-control" id="myBox" rows="8" onChange = {handleOnChange} value={text} placeholder="Enter Text here"></textarea>
  </div>
  <button disabled={text.length === 0} className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UpperCase</button>
  <button disabled={text.length === 0} className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to lowerCase</button>
  <button disabled={text.length === 0} className="btn btn-primary my-3" onClick={handleClearClick}>Clear All Text</button>
  <button disabled={text.length === 0} className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy All Text</button>
  <button disabled={text.length === 0} className="btn btn-primary my-3" onClick={handleExtaSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-4">
      <h2>Your Text summary</h2>
      <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words, {text.length} characters</p>
      <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes to read (Time required to read)</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the Textbox above to preview here"}</p>
    </div>
    </>
  )
}

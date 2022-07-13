import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted in Uppercase", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted in Lowercase", "success");
    }

    const handleClearClick = ()=>{
        let newText = ('');
        setText(newText);
        props.showAlert("Text clear", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

  return (
    <>
    <div className="container">
    <div style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h1>{props.Heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'? '#3e444a': 'white', color:props.mode=== 'dark'?'white': 'black'}} onChange={handleOnChange}  value={text}  rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert into Uppercase</button>
        <button disabled={text.length === 0}  className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Convert into Lowercase</button>
        <button disabled={text.length === 0}  className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear</button>
    </div>
    <div className="my-4" style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something to perview." }</p>
    </div>
    </div>
    </>
  );
}

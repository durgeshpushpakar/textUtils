import React, {useState} from 'react'
import PropTypes from 'prop-types'

// rfc is react function component
export default function TextForm(props) {
    const handleUpClick=()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleLowClick=()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase!", "success")
    }
    const handleClearClick=()=>{
        setText("");
        props.showAlert("Text Cleared!", "success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const totalWords=(sentence)=>{
        let count=text.length===0 ? '0' : text.split(" ").length
        if(sentence.charAt(sentence.length-1)===' ')count--;
        return count;
    }
    const [text, setText]=useState("");
    return (
        <>
        <div className={`container text-${props.mode === 'light' ? 'dark': 'light'}`} style={{backgroundColor:props.mode === 'light' ? 'white': 'grey'}}>
            <h1 className={`text-${props.mode === 'light' ? 'dark': 'light'}`}>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" style={{backgroundColor:props.mode === 'light' ? 'white': 'grey', color:props.mode === 'light' ? 'black': 'white'}}  id="myBox" rows="8" value={text} onChange={handleOnChange} ></textarea>
            </div>
            <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-success mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className={`container my-3  text-${props.mode === 'light' ? 'dark': 'light'}`}>
            <h1>Your text Summary</h1>
            <p> {totalWords(text)} words, {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>{text.length>0?"Preview": "Enter your text to preview"}</h2>
            <p>{text}</p>
        </div>
        </>
    );
} 
TextForm.propTypes={
    heading:PropTypes.string
}
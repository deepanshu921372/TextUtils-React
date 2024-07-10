import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        props.showAlert("Key Pressed!!", "info");
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!!", "success");
    }

    const handleClearClick = () => {
        let newText = ("");
        setText(newText);
        props.showAlert("Text Cleared!!", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied!!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        newText = newText.join(" ");
        setText(newText);
        props.showAlert("Removed Extra Spaces!!", "success");
    }

    const handleReverseClick = () => {
        const reverseSentence = str => {
            const arr = str.split(" ");
            const reversed = arr.map(el => {
                return el.split('').reverse().join("");
            });
            return reversed.join(" ");
        };
        let newText = reverseSentence(text);
        setText(newText);
        props.showAlert("Text Reversed!!", "success");
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#283f3a1f' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>

                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse Text</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview !!!"}</p>
            </div>
        </>
    )
}

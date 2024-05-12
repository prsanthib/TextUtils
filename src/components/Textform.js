import React , {useState} from 'react'

export default function Textform(props) {
    
    const [text,setText] = useState('');
    const handleUC = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to UpperCase","success");
    }

    const handleLC = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to LowerCase","success");
    }

    const handleCl=()=>{
        setText('');
        props.showalert("Cleared Text","success");
    }

    const handleOC = (event)=>{
        setText(event.target.value);
    }

    const [find,setFind] = useState('');

    const handleFOC=(evt)=>{
        setFind(evt.target.value);
    }

    const handleFind=()=>{
        if(text.includes(find))
        {
            alert("Found at "+text.search(find));
        }
        else
        {
            alert("Not Found");
        }
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Removed extra spaces","success");
    }

    const handlecopy = () =>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showalert("Copied Text","success");
    }
  return (

        <div className="mb">
            <h3>Try TextUtils - WordCounter,CharacterCounter,TextTransformer</h3>
            <textarea className="" placeholder="Enter something here" style={{backgroundColor : props.mode==='dark' ? 'rgb(43 5 54 / 50%)' : 'white' , color: props.mode==='dark' ? 'white' : 'black' }} id="mybox" rows="8" cols={80} value={text} onChange={handleOC}>{text}</textarea>
            
            <div className ="d-flex">
            
            
            <button disabled={text.length === 0} className="btn btn-primary mx-1 " onClick={handleUC}>UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-warning mx-1 " onClick={handleLC}>LowerCase</button>
            <button disabled={text.length === 0} className="btn btn-danger mx-1 " onClick={handleCl}>Clear</button>
            <button disabled={text.length === 0} className="btn btn-secondary mx-1 " onClick={handleExtraSpaces}>RemoveExtraSpaces</button>
            <button disabled={text.length === 0} className="btn btn-info mx-1 " onClick={handlecopy}>Copy</button>

            <textarea value={find} placeholder="Search here.." onChange={handleFOC} rows="1" className="mx-1" >{find}</textarea>
            
            <button className="mx-1 btn btn-success" onClick={handleFind}>Find</button>
            
            </div>

            <br/>
            <br/>
            <br/>
            <h2>Other Information</h2>
            <p><b>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words {text.length} characters</b></p>
            <p><b>takes {0.008*text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes to read</b></p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text:"Nothing to preview!"}</p>
        
    </div>

  )
}

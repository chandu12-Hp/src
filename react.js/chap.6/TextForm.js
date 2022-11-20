import React, {useState}from 'react';



export default function TextForm(props) {
  const [text ,setText] = useState ("Enter the Text here");

  const handleclick = () =>{
    console.log("uppercase has clicked" + text) ;
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("uppercase successfully","success")
  }
  const handlelclick = () =>{
    console.log("lowercase has clicked" + text) ;
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("lowercase successfully","success")
  }
  const handleclear = () =>{
    console.log("click & clear" + text) ;
   let newtext = '';
    setText(newtext);
    props.showAlert("clear successfully","success")
  }
  const handlecopy = () =>{
    let text = document.getElementById('mybox')
    console.log("click & copy" + text) ;
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("copied! successfully","success")
    
  }
  const handleOnchange = (event) =>{
    console.log("onchange has clicked")
    setText(event.target.value);
  }
  return (
    <>
<div className="mb-3 container"  style = {{color: props.mode==="dark"?"white":"#052d54"}} >

  <label htmlFor="exampleFormControlTextarea1" className="form-label comntainer">THE TEXT BOX</label>
  <h1>{props.heading}</h1>
  <textarea className="form-control " id="mybox" value ={text}rows="8"onChange ={handleOnchange} style = {{background: props.mode==="dark"?"#052d54":"light",color: props.mode==="dark"?"white":"#052d54"}} ></textarea>
  </div>
  <button className = "  btn btn-primary mx-2" onClick ={handleclick}>Convert to Uppercase</button>
  <button className = "  btn btn-primary mx-2" onClick ={handlelclick}>Convert to lowercase</button>
  <button className = "  btn btn-primary mx-2" onClick ={handleclear}>click to copy</button>
  <button className = "  btn btn-primary mx-2" onClick ={handlecopy}>click to copy</button>
  
  <div className="container my-3" style = {{color: props.mode==="dark"?"white":"#052d54"}}>
  <h1>your Text contains these no of words and charaters</h1>
  <p>words: {text.split(" ").length} charaters : {text.length}</p>
  <h2>how many min you will take to read it</h2>
  <p className='my-3'>{1/25 * text.length}</p>
  <h1>preview</h1>
  <p>{text.toUpperCase()}</p>
  </div>

</>
  )
}

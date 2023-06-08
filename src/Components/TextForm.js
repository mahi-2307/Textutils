import React,{useState} from 'react'

function TextForm(props) {
    
    const changetoU = ()=>{
        // console.log("button clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const changetoL = ()=>{
      // console.log("button clicked" + text)
      let newText = text.toLowerCase()
      setText(newText)
  }
  const clear= ()=>{
    // console.log("button clicked" + text)
    let newText = ""
    setText(newText)
}
    const handleOnChange = (event)=>{
       
        setText(event.target.value)
    }
    const [text, setText]  = useState('Enter text')
  return (
    
    <> 
       <div className='container'> 
        <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className='form-control' value={text} id = 'myBox' onChange={handleOnChange} rows='auto'></textarea>
            </div>
            <button type="button" class="btn btn-primary mx-2 my-2 " onClick={changetoU}>Change to Uppercase</button>
            <button type="button" class="btn btn-primary mx-2 my-2" onClick={changetoL}>Change to Lowercase</button>
            <button type="button" class="btn btn-primary mx-2 my-2" onClick={clear}>Clear Text</button>

    </div>
    <div className='container my-3'>
        <h2>
            Your text summary
        </h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{0.08 * text.split(" ").length}</p>
        <p>{text}</p>
    </div>
    </>

  )
}

export default TextForm
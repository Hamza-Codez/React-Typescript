import React, { useState } from 'react'
import PopUp from './PopUp';

const Copy = () => {

  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy=()=>{
    navigator.clipboard.writeText(input).then(()=>{
      setCopied(true);
      setTimeout(()=>setCopied(false), 9000);
    })
  }
  return (
    <div>
      <input type="text" placeholder='Enter Text Here!' value={input} onChange={(e)=> setInput(e.target.value)}/>
      <button onClick={handleCopy}>Copy Text</button>
      <PopUp copy={copied}/>
    </div>
  )
}

export default Copy
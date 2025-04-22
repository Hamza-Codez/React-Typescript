import React, { useEffect, useState } from 'react'

const UseE1 = () => {

  const [count, setCount] = useState(0);
  const [isDecrement, setIsDecrement] = useState(false);

  const Inc=()=>{
    setCount(prev => prev + 1);
    setIsDecrement(false);
  }
  const Dec=()=>{
    if(count > 0){
      setCount(prev => prev - 1);
    }
    setIsDecrement(true);
  }

  useEffect(()=>{
    if(isDecrement){
      console.log(` Count is decremented By 1: Value is ${count} `);
      document.title = `Count Value: ${count}`
    }else{
      console.log(` Count is incremented By 1: Value is ${count} `);
      document.title = `Count Value: ${count}`
    }
  }, [count])
  return (

    <div>
      <div>
        <h1>{isDecrement ? `Value Of Count is decreased by 1, New value: ${count}`
        : `Value Of Count is increased by 1, New value:  ${count}`}</h1>
      </div>
      <button onClick={Inc}>Increment</button>
      <button onClick={Dec}>Decrement</button>
    </div>
  )
}

export default UseE1
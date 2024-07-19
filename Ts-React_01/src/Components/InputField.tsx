import React from 'react';
import './styles.css'

const InputField = () => {
  return (
    <form className='input'>
    <input type="input" placeholder='Enter a task' className='input_box'/>
    <button type="submit" className='border rounded-md bg-slate-300 m-1 px-2'>Go</button>
    </form>
  )
}

export default InputField;
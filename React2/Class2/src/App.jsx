import React from 'react'
import A from './Components/A'
import { createContext } from 'react'


export const Data = createContext();
export const Data1 = createContext();
const App = () => {
  const name = 'Hamza Ahmad'
  const age  = "22";
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <A />
        </Data1.Provider>
      </Data.Provider>
    </div>
  )
}

export default App


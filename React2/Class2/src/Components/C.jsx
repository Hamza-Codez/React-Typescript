import React from 'react'
import { Data, Data1 } from '../App'
import { useContext } from 'react'

const C = () => {

  const age = useContext(Data1);
  const name = useContext(Data);
  return (
  <>
    {/* <Data.Consumer>
        {(name) => {
          return (
            <Data1.Consumer>
              {(age) => {
                return (
                  <h1 style={{ color: "black" }}>
                    Hello! My name is {name} and I am {age} years old.
                  </h1>
                )
              }}
            </Data1.Consumer>
          )
        }}
      </Data.Consumer> */}

        {/* Note: Is it an appropriate way to use the passed props in nested way the answer is no !!!! */}

      <h1>
        My name is {name} and I am {age} yaers Old!
      </h1>

    </>


    
  )
}

export default C

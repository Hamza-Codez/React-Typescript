import React from 'react'
import {createPortal} from "react-dom"

const PopUp = ({copy}) => {
  return createPortal(
    <section>
      {
        copy && (
          <div style={{
            position:"absolute",
            bottom: "3rem",
            border: "1px solid black",
            borderRadius: "21px",
            padding: "11px"
          }}>
            Copied To the ClipBoard!
          </div>
        )
      }
    </section>,
    document.querySelector("#popUp-root")
  )
}

export default PopUp
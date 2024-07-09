import { createPortal } from "react-dom"
import "./css/popout.css"
import Input from "./input"

import { usePopup } from "./popout/popoutContext"

import { Fragment, useEffect, useRef } from "react"
import { cleanup } from "@testing-library/react"

export function blureBackground() {
  document.getElementById("container").classList.add("blure")
}

export function removeBlure() {
  document.getElementById("container").classList.remove("blure")
}


export default function PopOut({ children }) {

  const { value, clearPopup } = usePopup()

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.getElementById("container").addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside ]);

  blureBackground()

  function onClickOutside() {
    removeBlure();
    clearPopup();
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      removeBlure()
      clearPopup()
    }
  })

  return (
    <div ref={ref}>
      {createPortal(children, document.body)}
    </div>
  )
}

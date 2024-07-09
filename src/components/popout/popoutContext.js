import React, { createContext, useState, useContext } from 'react'
import { removeBlure } from '../popOut'

const PopupContext = createContext()

export const PopupProvider = ({ children }) => {
  const [value, setValue] = useState()
  const triggerPopup = text => setValue(text)
  const clearPopup = () => {
    setValue()
    removeBlure();
  }

  return (
    <PopupContext.Provider value={{ value, triggerPopup, clearPopup }}>
      {children}
    </PopupContext.Provider>
  )
}

export const usePopup = () => useContext(PopupContext)

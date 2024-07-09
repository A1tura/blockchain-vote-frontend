import React, { useEffect } from 'react'
import { usePopup } from './popoutContext'

const Popup = () => {
  const { value, clearPopup } = usePopup()

  useEffect(() => {
    const timer = setTimeout(() => {
      clearPopup()
    }, 10000000)
    return () => clearTimeout(timer)
  }, [value])

  return value ? <div>{value}</div> : null
}

export default Popup

import React from 'react'
import { usePopup } from './popoutContext'

import Button from '../button'

import "../../pages/css/home.css"
import PopOut from '../popOut'

const PopupTrigger = ({ buttonText, popOut, styles }) => {
  const { triggerPopup } = usePopup()

  return (

    <div className="create-button-div" >
      <Button onClick={() => triggerPopup(<PopOut>{popOut}</PopOut>)} styles={styles} className="create-button-button" text={buttonText} />
    </div >
  )
}

export default PopupTrigger

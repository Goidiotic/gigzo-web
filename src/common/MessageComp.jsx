import React, { useState } from 'react'
import '../css/Global.css'

export default function MessageComp({message, messageTag}) {
    
    const messageBoxClass =
    messageTag === 'success'
      ? 'messageSuccess'
      : messageTag === 'warning'
      ? 'messageWarning'
      : messageTag === 'empty'
      ? 'messageEmpty'
      : 'messageDissolved';

    

  return (
    <div className={messageBoxClass}>{message}</div>
  )
}

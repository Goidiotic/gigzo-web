import React from 'react'
import inputStyle from '../css/Inputs.module.css'
import { Link } from 'react-router-dom'

function InputFullWidth({placeholder, type, value, onChange, isDisabled = false}) {
  return (
    <input type={type} className={inputStyle.inputFullWidth} placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

function ButtonFullWidthBlack({buttonName, to, onClick, isDisabled = false}) {
  if(onClick){
    return (
      <button onClick={onClick} className={`${inputStyle.inputButtonFullWidth} ${inputStyle.blackBg}`} disabled={isDisabled}>
        {buttonName}
      </button>
    );
  }
  
  return (
    
    <Link to={to} className={`${inputStyle.inputButtonFullWidth} ${inputStyle.blackBg}`}>{buttonName}</Link>
  )
}
function ButtonFullWidthGray({buttonName, to, onClick, isDisabled = false}) {
  if(onClick){
    return (
      <button onClick={onClick} className={`${inputStyle.inputButtonFullWidth} ${inputStyle.grayBg}`} disabled={isDisabled}>
        {buttonName}
      </button>
    )
  }

  return (
    <Link to={to} className={`${inputStyle.inputButtonFullWidth} ${inputStyle.grayBg}`}>{buttonName}</Link>
  )
}
function ButtonFullWidthPrimary({buttonName, to, onClick, isDisabled = false}) {
  if(onClick){
    return (
      <button onClick={onClick} className={`${inputStyle.inputButtonFullWidth} ${inputStyle.primaryBg}`} disabled={isDisabled}>{buttonName}</button>
    );
  }
    return (
      <Link to={to} className={`${inputStyle.inputButtonFullWidth} ${inputStyle.primaryBg}`}>{buttonName}</Link>
    )
  
}

export {InputFullWidth, ButtonFullWidthBlack, ButtonFullWidthGray, ButtonFullWidthPrimary}

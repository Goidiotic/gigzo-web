import React from 'react'
import '../css/Header.css';
import backButton from "../icons/back.png";
import { useNavigate } from 'react-router-dom';

//icons


export default function Header({pageName}) {

  const navigate = useNavigate();

  const goBack = ()=>{
    navigate(-1);
  }

  return (
    <div className='headerContainer'>
        <div className='header'>
            <div className='backButtonContainer' onClick={goBack}>
                <div className='backButton'>
                    <img className='backButtonIcon' src={backButton} alt="Back Button"/>
                </div>
            </div>
            <div className='headerPageName'>{pageName}</div>
        </div>
    </div>
  )
}

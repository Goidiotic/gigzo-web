import React from 'react'
import iconRightArrow from '../icons/right-arrow-icon.png'

export default function MenuItem({itemName, srcIcon, altTag, onClick}) {
  return (
    <>
    <div className='profile-menu-card-view01' onClick={onClick}>
        <div className='profile-menu-icon'>
            <img className='profile-menu-icon-img' src={srcIcon} alt={altTag} />
        </div>
        <div className='profile-menu-name'>{itemName}</div>
        <div className='profile-menu-right-arrow'>
            <img className='profile-menu-right-arrow-icon' src={iconRightArrow} alt="Right Arrow" />
        </div>
    </div>
    </>
  )
}

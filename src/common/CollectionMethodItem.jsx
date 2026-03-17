import React from 'react'
import '../css/CommonComponent.css'

export default function CollectionMethodItem({itemName, status}) {

    let statusClass = '';
    
      if (status === 'verified') {
        statusClass = 'bgPrimary';
      } else if (status === 'pending') {
        statusClass = 'bgWarning';
      } else if (status === 'rejected') {
        statusClass = 'bgRed';
      }else {
        statusClass = 'bgGray';
      }

  return (
    <>
        <div className='collection-method-container'>
            <div className='collection-method-item-name'>{itemName}</div>
            <div className='collection-method-item-status'>
                <div className={`collect-method-item-tag bgPrimary ${statusClass}`}>
                    {status}
                </div>
            </div>
        </div>
    </>    
)
}

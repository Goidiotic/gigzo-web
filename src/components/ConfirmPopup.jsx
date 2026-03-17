import React from 'react';
import '../css/ConfirmPopup.css';

const ConfirmPopup = ({
  title = 'Are you sure?',
  message = 'Please confirm this action.',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  danger = false,
  onClose
}) => {

  return (
    <>
      <div className='popupConfirmBackgroundContainer' onClick={onClose}></div>
        <div className='popupConfirmContent'>
          <div className='popupTitle'>{title}</div>
          <div className='popupMessage'>{message}</div>
          <div className='popupButtonContainer'>
            <div className='popupActionButtonOne' onClick={onCancel}>{cancelText}</div>
            <div className='popupActionButtonTwo' onClick={onConfirm}>{confirmText}</div>
          </div>
      </div>
    </>
  );
};

export default ConfirmPopup;

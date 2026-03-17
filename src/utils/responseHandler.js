// src/utils/responseHandlers.js
import { useNavigate } from 'react-router-dom';

const useResponseHandlers = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleSuspended = () => {
    //alert('⚠️ Your account has been suspended.');
    handleLogout();
  };

  const handleSessionExpired = () => {
    //alert('⚠️ Session expired. Please login again.');
    handleLogout();
  };

  const handleNoUserFound = () => {
    //alert('⚠️ User not found. Please check your account.');
    handleLogout();
  };

  const handleServerError = () => {
    //alert('❌ Server error. Please try again later.');
    console.log('❌ Server error. Please try again later.');
  };

  return {
    handleLogout,
    handleSuspended,
    handleSessionExpired,
    handleNoUserFound,
    handleServerError,
  };
};

export default useResponseHandlers;

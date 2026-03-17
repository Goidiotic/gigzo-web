import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TopNavigation() {

  const location = useLocation();
  const currentPath = location.pathname;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  const navigate = useNavigate();

  return (
    <div className="topNavigationMenuContainer">
      <div className='topNavigationMenuItemHolder'>
        <button onClick={() => navigate('/admin/zentoken/dashboard')} className={`menuItemHolder ${currentPath === '/adxtrmp/admin-dashboard' ? 'active' : ''}`}>Home</button>
        <button onClick={() => navigate('/admin/zentoken/users')} className={`menuItemHolder ${currentPath === '/adxtrmp/users' ? 'active' : ''}`}>Users</button>
        <button onClick={() => navigate('/admin/zentoken/all-disputes')} className={`menuItemHolder ${currentPath === '/adxtrmp/all-disputes' ? 'active' : ''}`}>Dispute</button>
        <button onClick={() => navigate('/admin/zentoken/create-coupon-code')} className={`menuItemHolder ${currentPath === '/adxtrmp/create-coupon-code' ? 'active' : ''}`}>Create Coupons</button>
      </div>

      <div>
        <button onClick={handleLogout} className='menuItemHolder'>
          Logout
        </button>
      </div>
    </div>
  );
}

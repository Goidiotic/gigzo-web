import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import layoutStyle from '../css/Layout.module.css';

export default function BottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={layoutStyle.bottomNavContainer}>
      <div className={layoutStyle.bottomNavSubContainer}>
        <ul className={layoutStyle.bottomNavList}>
          <li className={currentPath === '/dashboard' ? layoutStyle.activeMenu : ''}>
            <Link to="/dashboard" className={`${layoutStyle.navLinkStyle} ${currentPath === '/dashboard' ? layoutStyle.activeLink : ''}`}>
              Home
            </Link>
          </li>
          <li className={currentPath === '/all-contracts' ? layoutStyle.activeMenu : ''}>
            <Link to="/all-contracts" className={`${layoutStyle.navLinkStyle} ${currentPath === '/all-contracts' ? layoutStyle.activeLink : ''}`}>
              Orders
            </Link>
          </li>
          <li className={currentPath === '/market' ? layoutStyle.activeMenu : ''}>
            <Link to="/market" className={`${layoutStyle.navLinkStyle} ${currentPath === '/market' ? layoutStyle.activeLink : ''}`}>
              Market
            </Link>
          </li>
          <li className={currentPath === '/my-ads' ? layoutStyle.activeMenu : ''}>
            <Link to="/my-ads" className={`${layoutStyle.navLinkStyle} ${currentPath === '/my-ads' ? layoutStyle.activeLink : ''}`}>
              My Ads
            </Link>
          </li>
          <li className={currentPath === '/account' ? layoutStyle.activeMenu : ''}>
            <Link to="/account" className={`${layoutStyle.navLinkStyle} ${currentPath === '/account' ? layoutStyle.activeLink : ''}`}>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

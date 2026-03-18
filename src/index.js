import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import ProtectedRoute from './pages/ProtectedRoutes.jsx';

// New Designs
import LoginNewPage from './pages/LoginNewPage.jsx';
import RegisterNewPage from './pages/RegisterNewPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import MainProfile from './pages/Profile.jsx';

import PurchaseUsdt from './pages/PurchaseUSDT.jsx';
import UpiPayment from './pages/UpiPayment.jsx';
import PaymentVerifying from './pages/PaymentVerifying.jsx';
import TransactionDetails from './pages/TransactionDetails.jsx';
import TransactionHistory from './pages/TransactionHistory.jsx';
import Exchange2 from './pages/Exchange2.jsx';
import Wallet from './pages/Wallet.jsx';
import CryptoSend from './pages/SendCrypto.jsx';
import AddressWhitelist from './pages/AddressWhitelist.jsx';
import DepositINR from './pages/DepositInr.jsx';
import UpiDepositPayment from './pages/UpiDepositPayment.jsx';
import TransactionSuccess from './pages/TransactionSuccess.jsx';
import UserList from './pages/admin/UserList.jsx';
import NotFound from './pages/NotFound.jsx';

import CreateSeller from './pages/admin/CreateSellers.jsx';
import SellerList from './pages/admin/SellerList.jsx';
import OrderList from './pages/admin/OrderList.jsx';

import LandingPage from './pages/p2p/LandingPage.jsx';
import HighConvertLanding from './pages/HighConvertLanding.jsx';
import P2PWallet from './pages/p2p/P2PWallet.jsx';
import BuyUsdtP2P from './pages/p2p/BuyUsdtP2P.jsx';
import P2POrders from './pages/p2p/P2POrders.jsx';
import P2POrderDetails from './pages/p2p/OrderDetails.jsx';
import PaymentDetails from './pages/p2p/ViewPaymentDetails.jsx';
import UploadPaymentProof from './pages/p2p/UploadPaymentProof.jsx';
import P2PChat from './pages/p2p/P2PChat.jsx';
import AdminUploadPayment from './pages/admin/UploadPaymentDetails.jsx';
import PaymentProvider from './pages/admin/PaymentProvider.jsx';
import PaymentProviderList from './pages/admin/ViewPaymentProvider.jsx';
import AdminViewPayment from './pages/admin/AdminViewPayment.jsx';
import P2P from './pages/p2p/P2P.jsx';
import P2PMenu from './pages/p2p/P2PMenu.jsx';
import Profile from './pages/exchange/Profile.jsx';
import Notification from './pages/Notification.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRouts = createBrowserRouter(
  [
    {
      path: "/",
      element: <HighConvertLanding/>
    },
    {
      path: 'p2p/public-market',
      element: <HighConvertLanding/>
    },
    {
      path: "login",
      element: <LoginNewPage/>
    },
    {
      path: "register",
      element: <RegisterNewPage/>
    },
    {
      path: 'notifications',
      element: <Notification/>
    },
    {
      path: "profile",
      element:
      <ProtectedRoute>
        <MainProfile/>
      </ProtectedRoute>
    },
    {
      path: "p2p-market",
      element:
      <ProtectedRoute>
        <P2P/>
      </ProtectedRoute>
    },
    {
      path: "dashboard-new",
      element: 
      <ProtectedRoute>
        <Dashboard/>
      </ProtectedRoute>
      
    },
    {
      path: "purchase-usdt",
      element: 
      <ProtectedRoute>
      <PurchaseUsdt/>
      </ProtectedRoute>
    },
    {
      path: 'upi-payment',
      element: 
      <ProtectedRoute>
        <UpiPayment/>
      </ProtectedRoute>
    },
    {
      path: 'payment-verifying',
      element: 
      <ProtectedRoute>
        <PaymentVerifying/>
      </ProtectedRoute>

    },
    {
      path: 'transaction-details',
      element: 
      <ProtectedRoute>
        <TransactionDetails/>
      </ProtectedRoute>
    },
    {
      path: 'transaction-history',
      element: 
      <ProtectedRoute>
        <TransactionHistory/>
      </ProtectedRoute>
    },
    {
      path: 'exchage-currency',
      element:
      <ProtectedRoute>
        <Exchange2/>
      </ProtectedRoute>
    },
    {
      path: 'wallet',
      element: 
      <ProtectedRoute>
        <Wallet/>
      </ProtectedRoute>
      
    },
    {
      path: 'exchange/profile',
      element: 
      <ProtectedRoute>
        <Profile/>
      </ProtectedRoute>
    },
    {
      path: 'send-crypto',
      element: <CryptoSend/>
    },
    {
      path: 'address-whitelist',
      element: <AddressWhitelist/>
    },
    {
      path: 'deposit-inr',
      element: 
      <ProtectedRoute>
        <DepositINR/>
      </ProtectedRoute>
      
    },
    {
      path: 'deposit-pay-upi',
      element: <UpiDepositPayment/>
    },
    {
      path: 'transaction-success',
      element: 
      <ProtectedRoute>
        <TransactionSuccess/>
      </ProtectedRoute>
    },
    {
      path: 'p2p/p2p-wallet',
      element:
      <ProtectedRoute>
        <P2PWallet/>
      </ProtectedRoute>
    },
    {
      path: 'p2p/more-menu',
      element:
      <ProtectedRoute>
        <P2PMenu/>
      </ProtectedRoute>
    },
    {
      path: 'p2p/buy-usdt',
      element: 
      <ProtectedRoute>
        <BuyUsdtP2P/>  
      </ProtectedRoute>
      
    },
    {
      path: 'p2p/order-list',
      element: 
      <ProtectedRoute>
        <P2POrders/>
      </ProtectedRoute>
      
    },
    {
      path: 'p2p/order-details',
      element: 
      <ProtectedRoute>
        <P2POrderDetails/>
      </ProtectedRoute>
      
    },
    {
      path: 'p2p/payment-details',
      element: 
      <ProtectedRoute>
        <PaymentDetails/>
      </ProtectedRoute>
      
    },
    {
      path: 'p2p/upload-payment-proof',
      element: 
      <ProtectedRoute>
        <UploadPaymentProof/>
      </ProtectedRoute>
      
    },
    {
      path: 'p2p/p2p-chat',
      element: <P2PChat/>
    },
    {
      path: 'a/c/user-list',
      element: 
      <ProtectedRoute>
      <UserList/>
      </ProtectedRoute>
    },
    {
      path: 'a/c/create-seller',
      element: 
      <ProtectedRoute>
      <CreateSeller/>
      </ProtectedRoute>
    },
    {
      path: 'a/c/seller-list',
      element: 
      <ProtectedRoute>
      <SellerList/>
      </ProtectedRoute>
    },
    {
      path: 'a/c/order-list',
      element: 
      <ProtectedRoute>
      <OrderList/>
      </ProtectedRoute>
    },
    {
      path: 'a/c/upload-payment-details',
      element: 
      <ProtectedRoute>
      <AdminUploadPayment/>
      </ProtectedRoute>
    },
    {
      path: 'a/c/add-payment-provider',
      element: 
      <ProtectedRoute>
      <PaymentProvider/>
      </ProtectedRoute>
    },
    {
      path: 'a/c/payment-provider-list',
      element: 
      <ProtectedRoute>
      <PaymentProviderList/>
      </ProtectedRoute>
    },
    {
      path: 'a/c/payment-view',
      element: 
      <ProtectedRoute>
      <AdminViewPayment/>
      </ProtectedRoute>
    },
    {
      path: '*',
      element: <NotFound/>
    }
    
  ]
);

root.render(
  <React.StrictMode>
    <RouterProvider router={allRouts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

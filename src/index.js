import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import ProtectedRoute from './pages/ProtectedRoutes.jsx';

// New Designs
import LoginNewPage from './pages/LoginNewPage.jsx';
import RegisterNewPage from './pages/RegisterNewPage.jsx';

// Pages
import Clients from './pages/Clients.jsx';
import Jobs from './pages/Jobs.jsx';
import Tickets from './pages/Tickets.jsx'
import Chats from './pages/Chats.jsx'
import Profile from './pages/Profile.jsx'
import ClientsChats from './pages/ClientsChats.jsx'

import NotFound from './pages/NotFound.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRouts = createBrowserRouter(
  [
    {
      path: "/",
      element: <LoginNewPage/>
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
      path: "clients",
      element: <Clients/>
    },
    {
      path: "jobs",
      element: <Jobs/>
    },
    {
      path: "tickets",
      element: <Tickets/>
    },
    {
      path: "chats",
      element: <Chats/>
    },
    {
      path: "profile",
      element: <Profile/>
    },
    {
      path: "client-chat/:clientId",
      element: <ClientsChats/>
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

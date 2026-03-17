import React from 'react'
import layoutStyle from '../css/Layout.module.css'
import BottomNav from './BottomNav'
import { Outlet } from 'react-router-dom'
import InnerPageLayout from '../components/InnerPageLayout';


export default function MainPageLayout({ children }) {
  return (
    <>
      <InnerPageLayout>
          <Outlet/>
      </InnerPageLayout>
      <BottomNav/>
    </>
    
  )
}

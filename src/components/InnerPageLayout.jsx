import React from 'react'
import layoutStyle from '../css/Layout.module.css'


export default function InnerPageLayout({ children }) {
  return (
    <div className={layoutStyle.mainLayoutContainer}>
        <div className={layoutStyle.mainLayout}>
          {children}
        </div>
    </div>
  )
}

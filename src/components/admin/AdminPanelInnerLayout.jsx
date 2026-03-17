import React from 'react';
import '../../css/AdminGlobal.css';

export default function AdminPanelInnerLayout({ children }) {

    return (
        <>  
            <div className='adminPanelInnerContainer'>
                <div>
                    {children}
                </div>
            </div>
        </>
    );

} 
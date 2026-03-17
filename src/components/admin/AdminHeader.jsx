import React from "react";
import backButton from "../../icons/back.png";
import { useNavigate } from "react-router-dom";
import "../../css/Header.css";

import logout from '../../icons/power-off.png'

export default function AdminHeader ({pageName}) {
    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return(
        <>
            <div className='headerContainer'>
                <div className='header'>
                    <div className='backButtonContainer' onClick={goBack}>
                        <div className='backButton'>
                            <img className='backButtonIcon' src={backButton} alt="Back Button"/>
                        </div>
                    </div>
                    <div className='headerPageName'>{pageName}</div>
                    <div className="aHeaderLogoutCon" onClick={handleLogout}>
                        <img src={logout} alt="" style={{width: '15px', height: '15px'}} />
                    </div>
                </div>
            </div>
        </>
    );
}
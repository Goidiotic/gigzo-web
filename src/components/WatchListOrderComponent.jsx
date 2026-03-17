import React, { useEffect, useState } from 'react';
import '../css/component.css';
import upiIcon from '../icons/upi-icon.png'

export default function WatchListOrderComponent({data}){
    //console.log(data);
    if(!data) return null;

    // 1. Calculate Rewards
    const rewards = (data.quantity * 0.02).toFixed(0); // 2% reward, rounded to 2 decimals

    return(
        <>
        <div className='WLOrderComponentContainer'>
            <div className='WLOrderDetailsContainer'>
                <div className='WLSellQuantityContainer'>
                    <div className='WLSellQuantityTag'>Quantity</div>
                    <div className='WLSellQuantity'>
                        <span className='WLSQ'>{data.quantity}</span>
                        <span className='WLST'>zen</span>
                    </div>
                </div>
                <div className='WLRewardPriceContainer'>
                    <div className='WLRewardsContainer'>Reqards: ₹{rewards}</div>
                    <div className='WLPriceContainer'>Price: ₹{data.quantity}</div>
                </div>
                <div className='WLPaymentMethodsContainer'>
                    <div className='WLPMConatiner'>
                        <span>Payment Methods</span>
                        <img src={upiIcon} alt="UPI" />
                    </div>
                    <div className='WLBUContainer'>
                        <button className='WLBuyButton'>Buy Orders</button>
                    </div>
                </div>
            </div>
        </div>  
        </>
    );
}
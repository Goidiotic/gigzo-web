import React from "react";
import "../../css/landing/BuyGuide.css";

import iconPlaceOrder from "../../icons/place-order.png";
import iconPaySeller from "../../icons/pay-to-seller.png";
import iconReceiveCrypto from "../../icons/receive-crypto.png";

export default function BuyGuide(){

    const steps = [
        {
            icon: iconPlaceOrder,
            title: "1. Select Offer and Place Order",
            desc: "Browse the ads, choose your preferred one, and click Buy. Once you place a P2P order, the crypto asset will be escrowed by IOX P2P."
        },
        {
            icon: iconPaySeller,
            title: "2. Pay the Seller",
            desc: "Send money to the seller via the suggested payment methods. Complete the fiat transaction and click 'Transferred, notify seller' on IOX P2P."
        },
        {
            icon: iconReceiveCrypto,
            title: "3. Receive Crypto",
            desc: "Once the seller confirms receipt of money, the escrowed crypto will be released to you."
        }
    ];

    return(

        <div className="iox-guide-wrapper">

            <div className="iox-guide-container">

                <h2 className="iox-guide-title">
                    How to Buy USDT on IOX?
                </h2>

                <div className="iox-guide-grid">

                    {steps.map((step,index)=>{

                        return(

                            <div key={index} className="iox-guide-card">

                                <div className="iox-guide-icon">
                                    <img src={step.icon} alt="guide"/>
                                </div>

                                <div className="iox-guide-heading">
                                    {step.title}
                                </div>

                                <div className="iox-guide-desc">
                                    {step.desc}
                                </div>

                            </div>

                        )

                    })}

                </div>

            </div>

        </div>

    )

}
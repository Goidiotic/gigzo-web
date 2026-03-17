import React, { useState } from "react";
import "../../css/landing/FAQ.css";

export default function FAQ(){

    const [active,setActive] = useState(null);

    const faqs = [
        {
            q:"Is IOX P2P safe to buy USDT?",
            a:"Yes. IOX P2P uses an escrow system that holds the crypto asset securely until the seller confirms payment."
        },
        {
            q:"What payment methods are supported?",
            a:"You can pay using UPI apps like PhonePe, Google Pay, Paytm, BHIM UPI and also bank transfers."
        },
        {
            q:"How long does it take to receive USDT?",
            a:"Once the seller confirms the payment, the USDT will be released instantly to your IOX wallet."
        },
        {
            q:"Are there any trading fees?",
            a:"IOX P2P currently supports zero trading fee for buyers."
        }
    ];

    const toggle = (index)=>{
        if(active === index){
            setActive(null);
        }else{
            setActive(index);
        }
    }

    return(

        <div className="iox-faq-wrapper">

            <div className="iox-faq-container">

                <h2 className="iox-faq-title">
                    Frequently Asked Questions
                </h2>

                <div className="iox-faq-list">

                    {faqs.map((item,index)=>{

                        return(

                            <div key={index} className="iox-faq-item">

                                <div
                                    className="iox-faq-question"
                                    onClick={()=>toggle(index)}
                                >
                                    {item.q}
                                    <span className="iox-faq-icon">
                                        {active === index ? "-" : "+"}
                                    </span>
                                </div>

                                {active === index && (

                                    <div className="iox-faq-answer">
                                        {item.a}
                                    </div>

                                )}

                            </div>

                        )

                    })}

                </div>

            </div>

        </div>

    )

}
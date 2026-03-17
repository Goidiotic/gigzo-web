import React from "react";
import '../../css/new/ExchangeWidget.new.css'
import usdt from '../../icons/usdt.png';
import rupees from '../../img/rupees.png';
import exchange from '../../icons/exchange.png';
import axios2 from '../../Axios2';

export default function ExchangeWidget() {

  return (
    <div className="exchange-widget">

      <h3 style={{color: '#1e293b'}}>Quick Exchange</h3>
      <div className="exchange-box-outer">
        {/*INR BOX*/}
        <div className="exchange-box-con">
          <div className="root-currency-cover">
            <div className="root-currency-icon-cover">
              <img className="currency-icon" src={rupees} alt="Currency ICON" />
            </div>
            <div className="currency-name">INR</div>
          </div>
          <div className="exchange-amount-input-con">
            <input className="exchange-amount-input" type="text" placeholder="0.00"/>
          </div>
        </div>
        <div className="exchange-ex-icon-container">
          <div className="currency-swap-con">
            <img className="exchange-ex-icon" src={exchange} alt="" />
          </div>
        </div>
        {/*CRYPTO BOX*/}
        <div className="exchange-box-con">
          <div className="root-currency-cover">
            <div className="root-currency-icon-cover">
              <img className="currency-icon" src={usdt} alt="Currency ICON" />
            </div>
            <div className="currency-name">USDT</div>
          </div>
          <div className="exchange-amount-input-con">
            <input className="exchange-amount-input" type="text" placeholder="0.00"/>
          </div>
        </div>
        <div className="exchange-fees-con" style={{marginTop: '12px'}}>
          <div className="exchange-details-left-tag">Min</div>
          <div className="exchange-details-right-tag">₹1820</div>
        </div>
        <div className="exchange-fees-con">
          <div className="exchange-details-left-tag">Max</div>
          <div className="exchange-details-right-tag">₹10,00,000</div>
        </div>
        <div className="exchange-fees-con">
          <div className="exchange-details-left-tag">Rate</div>
          <div className="exchange-details-right-tag">94.02 INR/USDT</div>
        </div>
        <div className="exchange-fees-con">
          <div className="exchange-details-left-tag">Fees</div>
          <div className="exchange-details-right-tag">0.00 INR</div>
        </div>
        <button className="exchange-button-one">
          Exchange
        </button>
      </div>
    </div>
  );
}
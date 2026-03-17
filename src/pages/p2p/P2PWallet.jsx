import React, { useEffect, useState } from "react";
import "../../css/new/Wallet.css";
import TopMenu from "../../components/new/TopMenu";
import { useNavigate } from "react-router-dom";
import axios from '../../Axios2';
import iconUsdt from '../../icons/usdt.png'
import TopMenuLoggedIn from "./components/TopMenu";
import MobileBottomMenu from "./components/MobileBottomMenu";
import P2PMainWrapper from "./components/P2PMainWrapper";

export default function Wallet() {

  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");

  const [inrBalance, setInrBalance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0.000000);

function formatDate(date){

  const today = new Date();
  const txDate = new Date(date);

  const diff = Math.floor(
    (today.setHours(0,0,0,0) - new Date(txDate).setHours(0,0,0,0)) /
    (1000 * 60 * 60 * 24)
  );

  const time = txDate.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  if(diff === 0) return `Today ${time}`;
  if(diff === 1) return `Yesterday ${time}`;

  const datePart = txDate.toLocaleDateString("en-IN", {
    day:"2-digit",
    month:"long",
    year:"numeric"
  });

  return `${datePart} ${time}`;
}

    // Get Wallet Balance
  const getWalletBalance = async () => {
    try {

      const res = await axios.post('web/private/get-wallet-balance');

      if(res.data.statusCode === 1000) {
          setInrBalance(res.data.data.inrBalance);
          setUsdtBalance(res.data.data.usdtBalance);
      } else {
        console.log(res.data.message);
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  const getOrders = async (status="all") => {

    try {

      const res = await axios.post(
        "web/private/get-p2p-order-list",
        { status }
      );

      if(res.data.statusCode === 1000){
        setOrders(res.data.data.orders);
      }

    } catch(err){
      console.log(err.message);
    }

  };

  useEffect(()=>{
    getWalletBalance();
    getOrders(filter);
  }, [filter]);

  const openOrder = (orderId)=>{
    navigate("/p2p/order-details",{
      state:{orderId}
    });
  }

  return (
    <>
    <P2PMainWrapper>

      <div className="wallet-wrapper">

        <div className="wallet-layout">

          {/* LEFT SIDE */}
          <div className="wallet-left">
            
            {/* FIAT WALLET */}
            <div className="wallet-card">
              {/* Crypto WALLET */}
              <div className="wallet-header">
                <span>Crypto Wallet</span>
                <span className="currency">USDT</span>
              </div>

              <h3 className="balance">
                {Number(usdtBalance).toFixed(2)} <span>USDT</span>
              </h3>

              <div className="wallet-actions">
                <button className="wallet-btn">Receive</button>
                <button className="wallet-btn blue">Send</button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="wallet-right">

            <h3 className="recent-title">P2P Orders</h3>

            <div className="transaction-filters">
            
                          <button
                            className={filter==="all" ? "active":""}
                            onClick={()=>setFilter("all")}
                          >
                            All
                          </button>
            
                          <button
                            className={filter==="unpaid" ? "active":""}
                            onClick={()=>setFilter("unpaid")}
                          >
                            Unpaid
                          </button>
            
                          <button
                            className={filter==="paid" ? "active":""}
                            onClick={()=>setFilter("paid")}
                          >
                            Paid
                          </button>
            
                          <button
                            className={filter==="completed" ? "active":""}
                            onClick={()=>setFilter("completed")}
                          >
                            Completed
                          </button>
            
                          <button
                            className={filter==="cancelled" ? "active":""}
                            onClick={()=>setFilter("cancelled")}
                          >
                            Cancelled
                          </button>
            
            </div>

            {/* ORDER LIST */}

            <div className="transaction-list">

              {orders.length === 0 ? (

                <div className="no-transactions">
                  No P2P orders found
                </div>

              ) : (

                orders.map(order => (

                  <div
                    className="transaction-item"
                    key={order.orderId}
                    onClick={()=>openOrder(order.orderId)}
                    style={{cursor:"pointer"}}
                  >

                    <div className="transaction-left">

                      <div className="txn-icon">
                        <img style={{width:"25px"}} src={iconUsdt} alt="icon"/>
                      </div>

                      <div>

                        <span style={{fontSize:"12px", color: '#fff'}}>
                          Buy USDT from <strong style={{color:"#5db2f7"}}>"{order.sellerName}"</strong>
                        </span>

                        <p>
                          Order #{order.orderId}
                        </p>

                        <p>
                          {formatDate(order.createdAt)}
                        </p>

                      </div>

                    </div>

                    <div className="transaction-right">

                      <div className="transaction-right-amount">
                        ₹{(order.amount).toFixed(2)}
                      </div>

                      <div className={`tx-status ${order.status}`}>
                        {order.status}
                      </div>

                    </div>

                  </div>

                ))

              )}

            </div>

          </div>

        </div>

      </div>
      </P2PMainWrapper>
    </>
  );
}
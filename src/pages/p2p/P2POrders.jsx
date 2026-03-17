import React, { useEffect, useState } from "react";
import "../../css/new/P2POrders.new.css";
import "../../css/p2p/P2P.css";
import axios from "../../Axios2";
import iconUsdt from "../../icons/usdt.png";
import { useNavigate } from "react-router-dom";
import P2PMainWrapper from "./components/P2PMainWrapper";

export default function P2POrders() {

  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");

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
    getOrders(filter);
  },[filter]);

  const openOrder = (orderId)=>{
    navigate("/p2p/order-details",{
      state:{orderId}
    });
  }

  return (
    <>
      <P2PMainWrapper>
      <div className="p2p-orders-page">
        
        <div className="p2p-wrapper">
            <h2>Orders</h2>
            <div style={{width: '100%', background: '#1e293b', height: '1px', marginBottom: '20px'}}></div>
            {/* FILTERS */}

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
      </P2PMainWrapper>
    </>
  );
}
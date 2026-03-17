import React, { useEffect, useState, useRef  } from 'react';
import '../css/component.css';
import copyIcon from '../icons/copy-icon.png';
import axios from '../Axios';
import socket from '../socket';

function SellOrderItem({ order }) {
  const [progressWidth, setProgressWidth] = useState(100);
  const [remainingTimeText, setRemainingTimeText] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const calledUpdate = useRef(false); // to prevent multiple API calls

  const expiryTime = new Date(order.expiry).getTime();
  const createdAtTime = new Date(order.createdAt).getTime();
  const totalTime = expiryTime - createdAtTime;

  //update order function
  

  useEffect(() => {
    setOrderStatus(order.status);

    const updateSellOrder = async ()=>{
      try {
        
        const orderId = order.orderId;
        //console.log(`Request send for update expired sell order with id ${orderId}`);
  
        const res = await axios.post('/updateSellOrder', {orderId});
        
        if(res.status === 200){
          console.log(res.data.message || "Opder updated");
          setOrderStatus('Time Out');
        }
  
      }catch (error) {
        console.error("Faild to update order status.");
      }
    }

    const updateRemainingTime = () => {
      const now = Date.now();
      const remaining = expiryTime - now;

      const percent = Math.max((remaining / totalTime) * 100, 0);
      setProgressWidth(percent);

      if (remaining <= 0) {
        setRemainingTimeText('00:00:00');
        
        if(!calledUpdate.current && order.status !== 'expired'){
          calledUpdate.current = true;
          updateSellOrder();
          setOrderStatus("Time Out");
        }

        return;
      }

      const minutes = Math.floor((remaining / 1000 / 60) % 60);
      const seconds = Math.floor((remaining / 1000) % 60);
      const milliseconds = Math.floor((remaining % 1000) / 10); // 2-digit milliseconds

      setRemainingTimeText(
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`
      );
    };

    updateRemainingTime();
    const interval = setInterval(updateRemainingTime, 50); // 20fps

    return () => clearInterval(interval);
  }, [expiryTime, totalTime, order.adStatus]);

  return (
    <div className="sell-order-component-container">
      <div className="sell-order-sub-container">
        <div className="sell-order-details-container01">
          <div className="sellOrderDetailsTagSell">Sell</div>
          <div className="sellOrderStatusMatching">{orderStatus}</div>
        </div>
        <div className="sell-order-details-container01">
          <div className="sellOrderAmountTag">Quantity</div>
          <div className="sellOrderAmount">{order.amount}</div>
        </div>
        <div className="sell-order-details-container01">
          <div className="sellOrderNumberTag">Order Number</div>
          <div className="sellOrderNumber">
            <span className="sellOrderNumberId">{order.adId}</span>
            <span className="sellOrderNumberCopyIconContainer">
              <img className="sellOrderNumberCopyIcon" src={copyIcon} alt="Copy Icon" />
            </span>
          </div>
        </div>
        <div className="sell-order-status-bar-container">
          <div className="sell-order-details-container01">
            <div className="sellOrderExpiryTag">Expired in</div>
            <div className="sellOrderExpiryTimer">{remainingTimeText}</div>
          </div>
          <div className="sellOrderBarContainerMatching" style={{ display: orderStatus === 'Time Out' ? 'none' : 'block' }}>
            <div
              className="sellOrderBarMatching"
              style={{ width: `${progressWidth}%`, transition: 'width 0.05s linear' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SellOrderComponent({ orders }) {

  const [sellOrders, setSellOrders] = useState(orders || []);

  //All Orders
  useEffect(()=>{
    setSellOrders(orders || []);
  }, [orders]);

  if (!sellOrders || sellOrders.length === 0) {
    return <div className="sell-order-component-container">No orders found.</div>;
  }

  return (
    <>
      {sellOrders.map((order, index) => (
        <SellOrderItem key={order._id || index} order={order} />
      ))}
    </>
  );
}

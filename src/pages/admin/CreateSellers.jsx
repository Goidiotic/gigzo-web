import React, { useState } from "react";
import "../../css/admin/CreateSeller.css";
import TopNavMenu from "../../components/admin2/TopNavMenu";
import axios from '../../Axios2';
import PopupMessage from "../../components/PopupMessage";
import Spinner from "../../components/LoadingSpinner";

export default function CreateSeller() {

  const [name, setName] = useState("");
  const [usdtAvailable, setUsdtAvailable] = useState(0);
  const [price, setPrice] = useState(0);
  const [defaultMessage, setDefaultMessage] = useState("");
  const [completionRate, setCompletionRate] = useState(100);
  const [orderCompleted, setOrderCompleted] = useState(0);
  const [minOrderQuantity, setMinOrderQuantity] = useState(100);

  const [isLoading, setIsLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = async() => {
    try {

      setIsLoading(true);
      const payload = {
        sellerName: name,
        usdtAvailable: usdtAvailable,
        price: price,
        message: defaultMessage,
        completionRate: completionRate,
        orderCompleted: orderCompleted,
        minOrderQuantity: minOrderQuantity
      }
      const res = await axios.post("web/private/admin/create-seller", payload)

      if(res.data.statusCode === 1000) {
        setName("");
        setUsdtAvailable(0);
        setPrice(0);
        setDefaultMessage("");
        setIsLoading(false);
        setPopupMessage(res.data.message);
      } else {
        setIsLoading(false);
        setPopupMessage(res.data.message);
      }

    } catch (error) {
      console.log("Unable to process your request.");
      setIsLoading(false);
      setPopupMessage("We are unable to process your request.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {(isLoading) && (
        <Spinner/>
      )}
      <PopupMessage message={popupMessage} onClose={()=>{setPopupMessage('')}} />
    <TopNavMenu/>
    
    <div className="admin-page">

      <h2>Create Seller</h2>

      <div className="seller-form">

        <div className="form-group">
          <label>Seller Name</label>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>USDT Available</label>
          <input
            type="tel"
            value={usdtAvailable}
            onChange={(e)=>setUsdtAvailable(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Price (INR)</label>
          <input
            type="tel"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Completion Rate</label>
          <input
            type="tel"
            value={completionRate}
            onChange={(e)=>setCompletionRate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Order Completed</label>
          <input
            type="tel"
            value={orderCompleted}
            onChange={(e)=>setOrderCompleted(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Min Order Quantity</label>
          <input
            type="tel"
            value={minOrderQuantity}
            onChange={(e)=>setMinOrderQuantity(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <input
            type="text"
            value={"active"}
            disabled
          />
        </div>

        <div className="form-group">
          <label>Order Message</label>
          <textarea
            rows="4"
            value={defaultMessage}
            onChange={(e)=>setDefaultMessage(e.target.value)}
          />
        </div>

        <button className="save-btn" onClick={handleSubmit} disabled={isLoading}>
          Create Seller
        </button>

      </div>

    </div>
    </>
  );
}
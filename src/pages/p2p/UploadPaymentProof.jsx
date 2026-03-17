import React, { useState } from "react";
import "../../css/p2p/UploadPaymentDetails.css";
import axios from "../../Axios2";
import { useLocation, useNavigate } from "react-router-dom";
import P2PInnerWrapper from "./components/P2PInnerWrapper";

export default function UploadPaymentProof(){

  const navigate = useNavigate();
  const location = useLocation();
  const orderId = location.state?.orderId;

  const [file,setFile] = useState(null);
  const [utr,setUtr] = useState("");
  const [loading,setLoading] = useState(false);

  const handleFileChange = (e)=>{
    setFile(e.target.files[0]);
  };

  const uploadProof = async ()=>{

    if(!file){
      alert("Please upload payment screenshot");
      return;
    }

    if(!utr){
      alert("Please enter UTR number");
      return;
    }

    try{

      setLoading(true);

      const formData = new FormData();
      formData.append("orderId",orderId);
      formData.append("proof",file);
      formData.append("utrNumber",utr);

      const res = await axios.post(
        "web/private/upload-payment-proof",
        formData
      );

      if(res.data.statusCode === 1000){
        navigate("/p2p/order-details",{state:{orderId}});
      }

    }catch(err){
      console.log(err.message);
    }finally{
      setLoading(false);
    }

  };

  return(
<P2PInnerWrapper>
    <div style={{color:"#fff"}}>

      <div className="upload-wrapper">

        <div className="upload-card">

          {/* HEADER */}

          <div className="upload-header">

            <h2>Upload Payment Proof</h2>

            <button
              className="close-btn"
              onClick={()=>navigate(-1)}
            >
              ✕
            </button>

          </div>


          <p className="upload-note">
            Please upload a screenshot of your payment confirmation.
          </p>


          {/* UTR INPUT */}

          <div className="utr-input">

            <label>UTR / Transaction ID</label>

            <input
              type="text"
              placeholder="Enter UTR number"
              value={utr}
              onChange={(e)=>setUtr(e.target.value)}
            />

          </div>


          {/* FILE UPLOAD */}

          <div className="upload-box">

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />

          </div>


          {file && (
            <div className="file-name">
              {file.name}
            </div>
          )}


          {/* BUTTON */}

          <button
            className="upload-btn"
            disabled={!file || !utr || loading}
            onClick={uploadProof}
          >
            {loading ? "Uploading..." : "Submit Proof"}
          </button>

        </div>

      </div>

    </div>
</P2PInnerWrapper>
  );

}
import React, { useState, useEffect } from "react";
import "../../css/admin/AdminUploadPayment.css";
import TopNavMenu from "../../components/admin2/TopNavMenu";
import axios from "../../Axios2";
import { useLocation, useNavigate } from "react-router-dom";

export default function AdminUploadPayment() {

  const location = useLocation();
  const navigate = useNavigate();

  const orderId = location.state?.orderId;

  const [upiId, setUpiId] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [amount, setAmount] = useState("");

  const [qrFile, setQrFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [providers, setProviders] = useState([]);
  const [providerId, setProviderId] = useState("");

  const [loading, setLoading] = useState(false);

  /* -----------------------------
     Fetch Payment Providers
  ----------------------------- */

  const fetchProviders = async () => {

    try {

      const res = await axios.post(
        "web/private/admin/get-payment-provider"
      );

      if (res.data.statusCode === 1000) {
        setProviders(res.data.data.providers);
      }

    } catch (err) {
      console.log(err.message);
    }

  };

  useEffect(() => {
    fetchProviders();
  }, []);

  /* -----------------------------
     QR IMAGE PREVIEW
  ----------------------------- */

  const handleQrChange = (e) => {

    const file = e.target.files[0];

    if (file) {
      setQrFile(file);
      setPreview(URL.createObjectURL(file));
    }

  };

  /* -----------------------------
     Submit Payment Details
  ----------------------------- */

  const handleSubmit = async () => {

    if (!providerId) {
      alert("Please select payment provider");
      return;
    }

    if (!upiId || !qrFile || !amount || !receiverName) {
      alert("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("orderId", orderId);
      formData.append("providerId", providerId);
      formData.append("upiId", upiId);
      formData.append("receiverName", receiverName);
      formData.append("amountToBePaid", amount);
      formData.append("qrCode", qrFile);

      const res = await axios.post(
        "web/private/admin/upload-payment-details",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      if (res.data.statusCode === 1000) {

        alert("Payment details uploaded successfully");

        navigate(-1);

      }

    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }

  };

  /* -----------------------------
     Render
  ----------------------------- */

  return (
    <>
      <TopNavMenu />

      <div className="admin-page">

        <div className="payment-card">

          <h2>Upload Payment Details</h2>

          {/* ORDER ID */}

          <div className="form-group">

            <label>Order ID</label>

            <input
              type="text"
              value={orderId || ""}
              disabled
            />

          </div>

          {/* PAYMENT PROVIDER */}

          <div className="form-group">

            <label>Payment Provider</label>

            <select
              value={providerId}
              onChange={(e) => setProviderId(e.target.value)}
            >

              <option value="">Select Provider</option>

              {providers.map((p) => (

                <option key={p._id} value={p._id}>
                  {p.providerName}
                </option>

              ))}

            </select>

          </div>

          {/* UPI ID */}

          <div className="form-group">

            <label>UPI ID</label>

            <input
              type="text"
              placeholder="example@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />

          </div>

          {/* RECEIVER NAME */}

          <div className="form-group">

            <label>Receiver Name</label>

            <input
              type="text"
              placeholder="Receiver Name"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
            />

          </div>

          {/* AMOUNT */}

          <div className="form-group">

            <label>Amount To Be Paid</label>

            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

          </div>

          {/* QR UPLOAD */}

          <div className="form-group">

            <label>QR Code</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleQrChange}
            />

          </div>

          {/* QR PREVIEW */}

          {preview && (

            <div className="qr-preview">

              <img
                src={preview}
                alt="QR Preview"
              />

            </div>

          )}

          {/* SUBMIT */}

          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={loading}
          >

            {loading ? "Uploading..." : "Submit Payment Details"}

          </button>

        </div>

      </div>
    </>
  );
}
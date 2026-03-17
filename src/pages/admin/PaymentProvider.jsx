import React, { useState } from "react";
import "../../css/admin/PaymentProvider.css";
import TopNavMenu from "../../components/admin2/TopNavMenu";
import axios from '../../Axios2';
import { useNavigate } from "react-router-dom";

export default function PaymentProvider() {

  const [providerName, setProviderName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {

    if (!providerName || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const data = {
      providerName,
      email,
      password
    };

    const res = await axios.post("web/private/admin/create-payment-provider", data);

    if(res.data.statusCode === 1000) {
      navigate('/a/c/payment-provider-list');
    }

  };

  return (
    <>
      <TopNavMenu />

      <div className="admin-page">

        <div className="provider-card">

          <h2>Add Payment Provider</h2>

          {/* Provider Name */}

          <div className="form-group">

            <label>Payment Provider Name</label>

            <input
              type="text"
              placeholder="Enter provider name"
              value={providerName}
              onChange={(e) => setProviderName(e.target.value)}
            />

          </div>

          {/* Email */}

          <div className="form-group">

            <label>Email ID</label>

            <input
              type="email"
              placeholder="Enter email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          {/* Password */}

          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>

          {/* Submit */}

          <button
            className="submit-btn"
            onClick={handleSubmit}
          >
            Save Provider
          </button>

        </div>

      </div>
    </>
  );
}
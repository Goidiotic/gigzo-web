import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../Axios2";

import "../../css/admin/P2POrderList.css";
import TopNavMenu from "../../components/admin2/TopNavMenu";

export default function P2POrderList() {

  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("unpaid");

  /* --------------------------------
     Fetch Orders
  -------------------------------- */

  const fetchOrders = async (status = "unpaid") => {

    try {

      const body = {};

      if (status !== "all") {
        body.status = status;
      }

      const res = await axios.post(
        "web/private/admin/get-order-list",
        body
      );

      if (res.data.statusCode === 1000) {
        setOrders(res.data.data.orders);
      }

    } catch (err) {
      console.log(err.message);
    }

  };

  useEffect(() => {
    fetchOrders(filter);

    const interval = setInterval(()=>{
        fetchOrders(filter);
      },5000);

      return ()=>clearInterval(interval);

  }, [filter]);

  /* --------------------------------
     Search Filter
  -------------------------------- */

  const filteredOrders = orders.filter((order) =>
    order.orderId.toLowerCase().includes(search.toLowerCase()) ||
    order.buyer.toLowerCase().includes(search.toLowerCase())
  );

  /* --------------------------------
     Upload Payment Details
  -------------------------------- */

  const handleUploadPayment = (orderId) => {

    navigate("/a/c/upload-payment-details", {
      state: { orderId }
    });

  };

  /* --------------------------------
     View Payment Proof
  -------------------------------- */

  const handleViewPaymentProof = (orderId) => {

    navigate("/a/c/payment-view", {
      state: { orderId }
    });

  };

  /* --------------------------------
     View Payment Details
  -------------------------------- */

  const handleViewPaymentDetails = (orderId) => {

    navigate("/a/c/payment-view", {
      state: { orderId }
    });

  };

  /* --------------------------------
     Release Assets
  -------------------------------- */

  const handleReleaseAssets = async (orderId) => {

    const confirmRelease = window.confirm(
      "Are you sure you want to release assets?"
    );

    if (!confirmRelease) return;

    try {

      const res = await axios.post(
        "web/private/admin/release-assets",
        { orderId }
      );

      if (res.data.statusCode === 1000) {

        alert("Assets released successfully");

        fetchOrders(filter);

      }

    } catch (err) {
      console.log(err.message);
    }

  };

  /* --------------------------------
     Cancel Order
  -------------------------------- */

  const handleCancelOrder = async (orderId) => {

    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (!confirmCancel) return;

    try {

      const res = await axios.post(
        "web/private/admin/cancel-p2p-order",
        { orderId }
      );

      if (res.data.statusCode === 1000) {

        alert("Order cancelled successfully");

        fetchOrders(filter);

      }

    } catch (err) {
      console.log(err.message);
    }

  };

  /* --------------------------------
     Change Filter
  -------------------------------- */

  const changeFilter = (status) => {
    setFilter(status);
  };

  /* --------------------------------
     Render
  -------------------------------- */

  return (
    <>
      <TopNavMenu />

      <div className="admin-page">

        {/* Page Header */}

        <div className="page-header">

          <h2>P2P Orders</h2>

          <input
            type="text"
            placeholder="Search Order / Buyer"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        {/* Status Filters */}

        <div className="order-filters">

          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => changeFilter("all")}
          >
            All
          </button>

          <button
            className={filter === "unpaid" ? "active" : ""}
            onClick={() => changeFilter("unpaid")}
          >
            Unpaid
          </button>

          <button
            className={filter === "paid" ? "active" : ""}
            onClick={() => changeFilter("paid")}
          >
            Paid
          </button>

          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => changeFilter("completed")}
          >
            Completed
          </button>

          <button
            className={filter === "cancelled" ? "active" : ""}
            onClick={() => changeFilter("cancelled")}
          >
            Cancelled
          </button>

        </div>


        {/* Orders Table */}

        <div className="table-container">

          <table className="order-table">

            <thead>
              <tr>
                <th>Order ID</th>
                <th>Buyer</th>
                <th>Seller</th>
                <th>Amount</th>
                <th>USDT</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredOrders.length === 0 ? (

                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>
                    No Orders Found
                  </td>
                </tr>

              ) : (

                filteredOrders.map((order, index) => (

                  <tr key={index}>

                    <td>{order.orderId}</td>

                    <td>
                      <span className="buyer-badge">
                        {order.buyer}
                      </span>
                    </td>

                    <td>{order.sellerId}</td>

                    <td>₹{order.amount}</td>

                    <td>{order.usdtAmount}</td>

                    <td>
                      <span className={`status ${order.status}`}>
                        {order.status}
                      </span>
                    </td>

                    <td className="action-buttons">

                      {/* UNPAID */}

                      {order.status === "unpaid" && (
                        <>
                          <button
                            className="btn-proof"
                            onClick={() => handleUploadPayment(order.orderId)}
                          >
                            Upload Payment Details
                          </button>

                          <button
                            className="btn-proof"
                            onClick={() => handleViewPaymentDetails(order.orderId)}
                          >
                            View Payment Details
                          </button>

                          <button
                            className="btn-cancel"
                            onClick={() => handleCancelOrder(order.orderId)}
                          >
                            Cancel
                          </button>
                        </>
                      )}

                      {/* PAID */}

                      {order.status === "paid" && (
                        <>
                          <button
                            className="btn-proof"
                            onClick={() => handleViewPaymentProof(order.orderId)}
                          >
                            View Payment Proof
                          </button>

                          <button
                            className="btn-proof"
                            onClick={() => handleViewPaymentDetails(order.orderId)}
                          >
                            View Payment Details
                          </button>

                          <button
                            className="btn-release"
                            onClick={() => handleReleaseAssets(order.orderId)}
                          >
                            Release Assets
                          </button>

                          <button
                            className="btn-cancel"
                            onClick={() => handleCancelOrder(order.orderId)}
                          >
                            Cancel
                          </button>
                        </>
                      )}

                      {/* COMPLETED */}

                      {order.status === "completed" && (
                        <>
                          <button
                            className="btn-proof"
                            onClick={() => handleViewPaymentProof(order.orderId)}
                          >
                            View Payment Proof
                          </button>

                          <button
                            className="btn-proof"
                            onClick={() => handleViewPaymentDetails(order.orderId)}
                          >
                            View Payment Details
                          </button>
                        </>
                      )}

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );

}
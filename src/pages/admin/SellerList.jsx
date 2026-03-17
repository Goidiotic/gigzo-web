import React, { useEffect, useState } from "react";
import "../../css/admin/SellerList.css";
import TopNavMenu from "../../components/admin2/TopNavMenu";
import axios from "../../Axios2";

export default function SellerList() {

  const [sellers, setSellers] = useState([]);
  const [filter, setFilter] = useState("all");

  const getSellerList = async (status = "all") => {
    try {

      let payload = {};

      if(status !== "all"){
        payload.status = status;
      }

      const res = await axios.post(
        "web/private/admin/seller-list",
        payload
      );

      if(res.data.statusCode === 1000){
        setSellers(res.data.data.sellers);
      }

    } catch (error) {
      console.log("Unable to process your request.");
    }
  };

  useEffect(()=>{
    getSellerList();
  }, []);

  const handleFilter = (status) => {
    setFilter(status);
    getSellerList(status);
  };

  // UPDATE SELLER STATUS
  const updateSellerStatus = async (sellerId, status) => {
    try {

      const res = await axios.post(
        "web/private/admin/update-seller-status",
        {
          sellerId: sellerId,
          status: status
        }
      );

      if(res.data.statusCode === 1000){
        getSellerList(filter); // reload list
      }

    } catch (error) {
      console.log("Unable to update seller status.");
    }
  };

  return (
    <>
      <TopNavMenu/>

      <div className="admin-page">

        <div className="page-header">

          <h2>Seller List</h2>

          <div className="filter-buttons">

            <button
              className={filter === "all" ? "filter-active" : ""}
              onClick={()=>handleFilter("all")}
            >
              All
            </button>

            <button
              className={filter === "active" ? "filter-active" : ""}
              onClick={()=>handleFilter("active")}
            >
              Active
            </button>

            <button
              className={filter === "inactive" ? "filter-active" : ""}
              onClick={()=>handleFilter("inactive")}
            >
              Inactive
            </button>

          </div>

        </div>

        <div className="table-container">

          <table className="seller-table">

            <thead>
              <tr>
                <th>Seller ID</th>
                <th>Name</th>
                <th>USDT Sold</th>
                <th>USDT in Escrow</th>
                <th>USDT Available</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {sellers.map((seller, index) => (

                <tr key={index}>

                  <td>{seller.sellerId}</td>
                  <td>{seller.sellerName}</td>
                  <td>{seller.usdtSold} USDT</td>
                  <td>{seller.usdtEscrow} USDT</td>
                  <td>{seller.usdtAvailable} USDT</td>

                  <td>
                    <span className={`status ${seller.status}`}>
                      {seller.status}
                    </span>
                  </td>

                  <td>

                    {seller.status === "active" ? (
                      <button
                        className="btn-inactive"
                        onClick={() =>
                          updateSellerStatus(
                            seller.sellerId,
                            "inactive"
                          )
                        }
                      >
                        Inactivate
                      </button>
                    ) : (
                      <button
                        className="btn-active"
                        onClick={() =>
                          updateSellerStatus(
                            seller.sellerId,
                            "active"
                          )
                        }
                      >
                        Activate
                      </button>
                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}
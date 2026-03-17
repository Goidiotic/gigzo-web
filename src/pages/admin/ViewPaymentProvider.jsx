import React, { useEffect, useState } from "react";
import "../../css/admin/PaymentProviderList.css";
import TopNavMenu from "../../components/admin2/TopNavMenu";
import axios from "../../Axios2";

export default function PaymentProviderList() {

  const [providers, setProviders] = useState([]);
  const [search, setSearch] = useState("");

  const fetchProviders = async () => {

    try {

      const res = await axios.post("web/private/admin/get-payment-provider");

      if(res.data.statusCode === 1000){
        setProviders(res.data.data.providers);
      }

    } catch(err){
      console.log(err.message);
    }

  };

  useEffect(()=>{
    fetchProviders();
  },[]);


  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
  };


  const filteredProviders = providers.filter((p)=>
    p.providerName.toLowerCase().includes(search.toLowerCase()) ||
    p.email.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
      <TopNavMenu/>

      <div className="admin-page">

        <div className="page-header">

          <h2>Payment Providers</h2>

          <input
            type="text"
            placeholder="Search Provider"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />

        </div>


        <div className="table-container">

          <table className="provider-table">

            <thead>

              <tr>
                <th>Provider Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {filteredProviders.map((provider,index)=>(

                <tr key={index}>

                  <td>
                    {provider.providerName}

                    <button
                      className="copy-btn"
                      onClick={()=>copyText(provider.providerName)}
                    >
                      Copy
                    </button>

                  </td>

                  <td>
                    {provider.email}

                    <button
                      className="copy-btn"
                      onClick={()=>copyText(provider.email)}
                    >
                      Copy
                    </button>

                  </td>

                  <td>
                    {provider.password}

                    <button
                      className="copy-btn"
                      onClick={()=>copyText(provider.password)}
                    >
                      Copy
                    </button>

                  </td>

                  <td>
                    <span className={`status ${provider.status}`}>
                      {provider.status}
                    </span>
                  </td>

                  <td>
                    <button className="btn-view">
                      View
                    </button>
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
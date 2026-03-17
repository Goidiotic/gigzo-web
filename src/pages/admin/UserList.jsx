import React, { useEffect, useState } from "react";
import "../../css/admin/UserList.css";
import TopNavMenu from "../../components/admin2/TopNavMenu";

export default function UserList() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    // Replace with API
    setUsers([
      {
        uid: "U10001",
        mobile: "9876543210",
        status: "active",
        type: "user"
      },
      {
        uid: "U10002",
        mobile: "9123456780",
        status: "blocked",
        type: "user"
      },
      {
        uid: "U10003",
        mobile: "9998887777",
        status: "active",
        type: "admin"
      }
    ]);

  }, []);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
  };

  const filteredUsers = users.filter((u) =>
    u.uid.toLowerCase().includes(search.toLowerCase()) ||
    u.mobile.includes(search)
  );

  return (
    <>
    <TopNavMenu/>
    <div className="admin-page">

      <div className="page-header">
        <h2>User List</h2>

        <input
          type="text"
          placeholder="Search UID / Mobile"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">

        <table className="user-table">

          <thead>
            <tr>
              <th>UID</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>User Type</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredUsers.map((user, index) => (

              <tr key={index}>

                <td>
                  {user.uid}

                  <button
                    className="copy-btn"
                    onClick={() => copyText(user.uid)}
                  >
                    Copy
                  </button>
                </td>

                <td>
                  {user.mobile}

                  <button
                    className="copy-btn"
                    onClick={() => copyText(user.mobile)}
                  >
                    Copy
                  </button>
                </td>

                <td>
                  <span className={`status ${user.status}`}>
                    {user.status}
                  </span>
                </td>

                <td>
                  <span className={`type ${user.type}`}>
                    {user.type}
                  </span>
                </td>

                <td>
                  <button className="btn-view">View</button>
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
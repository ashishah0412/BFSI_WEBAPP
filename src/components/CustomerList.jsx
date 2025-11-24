import React from "react";

function CustomerList({ customers, selectedCustomerId, onSelect, onDelete }) {
  return (
    <div className="card">
      <h2>Customer List</h2>
      {customers.length === 0 ? (
        <p>No customers found. Please add one.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>ID</th>
              <th style={{ width: "30%" }}>Name</th>
              <th style={{ width: "30%" }}>Email</th>
              <th style={{ width: "30%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className={
                  customer.id === selectedCustomerId ? "selected-row" : ""
                }
              >
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => onSelect(customer.id)}
                  >
                    View
                  </button>
                  <button
                    className="btn danger"
                    onClick={() => onDelete(customer.id)}
                    style={{ marginLeft: "0.5rem" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CustomerList;

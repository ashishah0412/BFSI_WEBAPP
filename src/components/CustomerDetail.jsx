import React from "react";

function CustomerDetail({ customer }) {
  return (
    <div className="card">
      <h2>Customer Details</h2>
      {!customer ? (
        <p>Select a customer from the list to view details.</p>
      ) : (
        <div className="detail">
          <p>
            <strong>ID:</strong> {customer.id}
          </p>
          <p>
            <strong>Name:</strong> {customer.name}
          </p>
          <p>
            <strong>Email:</strong> {customer.email}
          </p>
          <p>
            <strong>Phone:</strong> {customer.phone || "N/A"}
          </p>
        </div>
      )}
    </div>
  );
}

export default CustomerDetail;

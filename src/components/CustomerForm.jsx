import React, { useState } from "react";

function CustomerForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Name and Email are required.");
      return;
    }

    onAdd({ name: name.trim(), email: email.trim(), phone: phone.trim() });

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="card">
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <label>Name *</label>
          <input
            type="text"
            value={name}
            placeholder="Enter customer name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Email *</label>
          <input
            type="email"
            value={email}
            placeholder="Enter customer email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            placeholder="Enter phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="btn primary">
          Add Customer
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;

import React, { useState } from "react";
import CustomerList from "./components/CustomerList";
import CustomerForm from "./components/CustomerForm";
import CustomerDetail from "./components/CustomerDetail";

const initialCustomers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "9876543210" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9123456780" }
];

function App() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [page, setPage] = useState("home");

  const handleAddCustomer = (customerData) => {
    setCustomers((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((c) => c.id)) + 1 : 1;
      return [...prev, { id: nextId, ...customerData }];
    });
  };

  const handleDeleteCustomer = (id) => {
    setCustomers((prev) => prev.filter((c) => c.id !== id));
    setSelectedCustomerId((prev) => (prev === id ? null : prev));
  };

  const handleSelectCustomer = (id) => {
    setSelectedCustomerId(id);
  };

  const selectedCustomer =
    customers.find((c) => c.id === selectedCustomerId) || null;

  return (
    <div className="app">
      <header className="header">
        <h1>Customer Management</h1>
        <nav className="nav">
          <button
            className={page === "home" ? "nav-btn active" : "nav-btn"}
            onClick={() => setPage("home")}
          >
            Home
          </button>
          <button
            className={page === "customers" ? "nav-btn active" : "nav-btn"}
            onClick={() => setPage("customers")}
          >
            Customers
          </button>
        </nav>
      </header>

      {page === "home" ? (
        <section className="content">
          <h2>Welcome</h2>
          <p>
            This is a simple React demo showing <b>CRUD operations</b> on an
            in-memory list of customers.
          </p>
          <ul>
            <li>View all customers</li>
            <li>Add a new customer</li>
            <li>Delete a customer</li>
            <li>View details of a selected customer</li>
          </ul>
          <p>
            Later, you can wire this to a real backend API (REST, Spring Boot,
            Node, etc.).
          </p>
        </section>
      ) : (
        <main className="layout">
          <section className="column">
            <CustomerList
              customers={customers}
              selectedCustomerId={selectedCustomerId}
              onSelect={handleSelectCustomer}
              onDelete={handleDeleteCustomer}
            />
            <CustomerForm onAdd={handleAddCustomer} />
          </section>
          <section className="column">
            <CustomerDetail customer={selectedCustomer} />
          </section>
        </main>
      )}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const dummyOrders = [
  {
    id: 1001,
    customer: "John Doe",
    date: "2025-08-01",
    status: "Pending",
    total: 120000,
  },
  {
    id: 1002,
    customer: "Jane Smith",
    date: "2025-08-01",
    status: "Completed",
    total: 200000,
  },
  {
    id: 1003,
    customer: "Alice Brown",
    date: "2025-07-31",
    status: "Cancelled",
    total: 50000,
  },
  {
    id: 1004,
    customer: "Bob Lee",
    date: "2025-07-30",
    status: "Pending",
    total: 80000,
  },
];

const statusOptions = ["Pending", "Completed", "Cancelled"];

const AdminOrders = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [orders, setOrders] = useState(dummyOrders);
  const navigate = useNavigate();

  const handleStatusChange = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const filteredOrders = statusFilter
    ? orders.filter((order) => order.status === statusFilter)
    : orders;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* ...existing order management content... */}
    </div>
  );
};

export default AdminOrders;

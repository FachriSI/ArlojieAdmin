import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const dummyOrder = {
  id: "#348053",
  tanggal: "11/04/2025",
  produk: "Longines Master",
  total: "Rp4. 545. 000",
  pembayaran: "COD",
  ekspedisi: "TIKI",
  status: "Delivered",
  customer: {
    nama: "Akmal",
    email: "akmal01@gmail.com",
    hp: "0848261625",
    alamat:
      "Jln. Raya Kampung Baru, Kelurahan Kampung Baru, Lubuk Kilangan, (disamping kedai ibuk) KOTA PADANG",
  },
};

const statusOptions = ["Pending", "Paid", "Packed", "Shipped", "Delivered"];

const AdminOrderDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // Simulasi: data order diambil berdasarkan id
  const order = dummyOrder;

  return (
    <div className="min-h-screen bg-[#F4F4F4] py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-2xl font-bold mb-8 text-left"
          style={{ fontSize: 32 }}
        >
          Order Management
        </h1>
        <div className="bg-white rounded-xl shadow p-8 border border-gray-300">
          <h2 className="text-xl font-bold mb-6">Detail Order</h2>
          <div className="bg-[#F4F4F4] rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-2">
                  <span className="font-medium">Order ID:</span> {order.id}
                </div>
                <div className="mb-2">
                  <span className="font-medium">Tanggal Order:</span> {order.tanggal}
                </div>
                <div className="mb-2">
                  <span className="font-medium">Produk:</span> {order.produk}
                </div>
                <div className="mb-2">
                  <span className="font-medium">Total:</span> {order.total}
                </div>
                <div className="mb-2">
                  <span className="font-medium">Pembayaran:</span> {order.pembayaran}
                </div>
                <div className="mb-2">
                  <span className="font-medium">Ekspedisi:</span> {order.ekspedisi}
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-medium">Status:</span>
                  <select
                    className="border rounded px-3 py-1 text-sm"
                    value={order.status}
                    disabled
                  >
                    {statusOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-6">Info Costumer</h2>
          <div className="bg-[#F4F4F4] rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-2">
                  <span className="font-medium">Nama:</span> {order.customer.nama}
                </div>
                <div className="mb-2">
                  <span className="font-medium">Email:</span> {order.customer.email}
                </div>
                <div className="mb-2">
                  <span className="font-medium">No Hp:</span> {order.customer.hp}
                </div>
                <div className="mb-2">
                  <span className="font-medium">Alamat:</span> {order.customer.alamat}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="px-8 py-2 rounded-2xl bg-black text-white font-medium">
              Print Shipping Label
            </button>
            <button className="px-8 py-2 rounded-2xl bg-black text-white font-medium">
              Print Invoice
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-black text-center py-4 text-white/60 text-sm mt-8">
        ©2025 ARLOJIE. All Rights Reserved
      </footer>
    </div>
  );
};

export default AdminOrderDetail;

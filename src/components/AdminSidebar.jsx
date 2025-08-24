import React from "react";
import { NavLink } from "react-router-dom";

// SVG Components sebagai React Components
const DashboardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
  </svg>
);

const ProductIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 16V8a2 2 0 0 0-1-1.73L12 2 4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L12 22l8-4.27A2 2 0 0 0 21 16z"/>
    <polyline points="7.5,10.5 16.5,10.5"/>
  </svg>
);

const OrderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10,9 9,9 8,9"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
  </svg>
);

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const CategoryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);

const menuItems = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    path: "/admin/dashboard",
  },
  {
    name: "Produk Management",
    icon: ProductIcon,
    path: "/admin/products",
  },
  {
    name: "Order Management",
    icon: OrderIcon,
    path: "/admin/orders",
  },
  {
    name: "Analytics",
    icon: AnalyticsIcon,
    path: "/admin/analytics",
  },
  {
    name: "User Management",
    icon: UserIcon,
    path: "/admin/users",
  },
  {
    name: "Category Management",
    icon: CategoryIcon,
    path: "/admin/categories",
  },
  {
    name: "Test Menu",
    icon: CategoryIcon,
    path: "/admin/test",
  },
];

const AdminSidebar = () => {
  return (
    <aside className="bg-[#31250B] text-white w-64 min-h-screen flex flex-col py-6 px-4 shadow-lg">
      <div className="mb-10 flex items-center justify-center">
        <span className="font-bold text-2xl tracking-wide">ARLOJIE</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-[#3a2e1c] ${isActive ? "bg-[#3a2e1c]" : ""}`
                }
              >
                <item.icon />
                <span className="font-medium text-base">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;

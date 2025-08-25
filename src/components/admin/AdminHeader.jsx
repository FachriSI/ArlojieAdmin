export default function AdminHeader({ title = "Dashboard" }) {
  return (
    <div>
      {/* Header hitam dengan profil */}
      <header className="flex justify-end items-center bg-black text-white px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium">Budiman Saja</p>
            <p className="text-xs text-gray-300">Admin ARLOJIE</p>
          </div>
          <img
            src="https://via.placeholder.com/35"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover"
          />
        </div>
      </header>
      

    </div>
  );
}

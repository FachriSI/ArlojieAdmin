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
      
      {/* Dashboard title dengan background abu-abu */}
      <div 
        className="px-6 py-4 font-['Plus_Jakarta_Sans']"
        style={{
          width: '1161px',
          height: '68px',
          flexShrink: 0,
          background: '#F2F2F2',
          boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.20)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      </div>
    </div>
  );
}

import { NavLink, useLocation } from "react-router-dom";

export function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/DashboardUser', fileName: 'dashboard' },
    { id: 'pinjaman', label: 'Pinjaman', path: '/Pinjaman', fileName: 'pinjaman' },
    { id: 'pinjaman-saya', label: 'Pinjaman Saya', path: '/PinjamanSaya', fileName: 'pinjaman-saya' },
    { id: 'riwayat', label: 'Riwayat', path: '/Riwayat', fileName: 'riwayat' },
    { id: 'pengaturan', label: 'Pengaturan', path: '/Pengaturan', fileName: 'pengaturan' },
  ];

  return (
    /* PERUBAHAN UTAMA:
      - fixed top-0 left-0: Mengunci posisi di pojok kiri atas layar.
      - h-screen: Memastikan tinggi sidebar selalu penuh setinggi layar.
      - z-50: Memastikan sidebar berada di atas elemen konten lainnya.
    */
    <div className="fixed top-0 left-0 w-64 h-screen bg-[#f8fafc] p-6 border-r border-gray-100 flex-shrink-0 z-50">
      <div className="mb-10 px-2">
        <h1 className="text-xl font-bold text-[#0f172a]">Truck Splash</h1>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          // LOGIKA KRUSIAL: Menu "Pinjaman Saya" tetap dianggap aktif jika kita di halaman DaftarPinjamanAktif
          const isActuallyActive = 
            location.pathname === item.path || 
            (item.path === '/PinjamanSaya' && location.pathname === '/DaftarPinjamanAktif');

          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm ${
                isActuallyActive 
                  ? "bg-[#064e3b] text-[#22c55e] shadow-lg shadow-green-900/20" 
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <img 
                src={isActuallyActive ? `/${item.fileName}hijau.png` : `/${item.fileName}.png`} 
                alt={item.label} 
                className="w-5 h-5 object-contain" 
              />
              <span className={isActuallyActive ? "text-[#22c55e]" : "text-gray-500"}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
import { NavLink, useLocation } from "react-router-dom";

export function SidebarAdmin() {
  const location = useLocation();

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/DashboardAdmin",
      fileName: "dashboard",
    },
    {
      id: "data-pengguna",
      label: "Data Pengguna",
      path: "/DataPengguna",
      fileName: "data-pengguna",
    },
    {
      id: "verifikasi-pembayaran",
      label: "Verifikasi Pembayaran",
      path: "/VerifikasiPembayaran",
      fileName: "verifikasi-pembayaran",
    },
    {
      id: "verifikasi-pengajuan",
      label: "Verifikasi Pengajuan",
      path: "/VerifikasiPengajuan",
      fileName: "verifikasi-pengajuan",
    },
    {
      id: "pengaturan-admin",
      label: "Pengaturan",
      path: "/PengaturanAdmin",
      fileName: "pengaturan",
    },
  ];

  return (
    /* Perubahan Utama: 
       - Tambahkan 'fixed top-0 left-0' untuk mengunci posisi.
       - 'h-screen' memastikan tinggi sidebar selalu seukuran layar.
       - 'z-50' menjaga sidebar tetap di lapisan paling atas.
    */
    <div className="fixed top-0 left-0 w-64 h-screen bg-[#020617] p-6 border-r border-slate-800 flex-shrink-0 z-50">
      {/* HEADER */}
      <div className="mb-10 px-2 flex items-center gap-3">
        <div className="bg-[#22c55e] p-2 rounded-xl flex items-center justify-center">
          <img
            src="/paneladmin.png"
            alt="Logo"
            className="w-6 h-6 object-contain"
          />
        </div>

        <div>
          <h1 className="text-lg font-bold text-white leading-none">
            Panel Admin
          </h1>
          <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">
            Manajemen Pinjaman
          </p>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);

          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm ${
                isActive
                  ? "bg-slate-800 text-[#22c55e] shadow-lg shadow-black/20"
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
              }`}
            >
              {/* ICON */}
              <img
                src={
                  isActive
                    ? `/${item.fileName}hijau.png`
                    : `/${item.fileName}.png`
                }
                alt={item.label}
                className="w-5 h-5 object-contain"
              />

              {/* TEXT */}
              <span className={isActive ? "text-[#22c55e]" : ""}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
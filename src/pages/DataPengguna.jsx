import { useNavigate } from "react-router-dom";
import { SidebarAdmin } from "../components/SidebarAdmin";

import {
  Eye,
  Search,
  Filter,
  Calendar,
} from "lucide-react";

export default function DataPengguna() {
  const navigate = useNavigate();

  const users = [
    {
      id: 1,
      initials: "AS",
      name: "Ahmad Setiadi",
      email: "ahmad.setiadi@email.com",
      sektor: "Kuliner",
      status: "Aktif",
      color: "bg-green-100 text-green-700",
    },
    {
      id: 2,
      initials: "BM",
      name: "Budi Mansyur",
      email: "mansyur_budi@outlook.com",
      sektor: "Jasa Logistik",
      status: "Nonaktif",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 3,
      initials: "CW",
      name: "Citra Wijaya",
      email: "citrawijaya.shop@gmail.com",
      sektor: "Ritel",
      status: "Aktif",
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar tetap diam (Fixed) */}
      <SidebarAdmin />

      {/* PERBAIKAN UTAMA: 
          Tambahkan 'ml-64' agar konten tidak tertutup sidebar yang di-fixed
      */}
      <div className="flex-1 ml-64 p-8">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[34px] font-bold text-slate-900 tracking-tight">
            Manajemen Data Pengguna
          </h1>

          {/* SEARCH */}
          <div className="relative">
            <Search
              size={18}
              className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400"
            />
            <input
              type="text"
              placeholder="Cari berdasarkan nama, email, atau ID..."
              className="w-[320px] h-12 bg-slate-100 rounded-2xl pl-11 pr-4 outline-none text-sm border border-transparent focus:border-green-500 transition-all"
            />
          </div>
        </div>

        {/* CARD STATS */}
        <div className="grid grid-cols-4 gap-5 mb-8">
          {[
            { label: "Total Peminjam", val: "1.284", sub: "↗ +12% Bulan ini", subColor: "text-green-600" },
            { label: "Status Aktif", val: "1.102", sub: "85% Retensi", subColor: "text-green-600" },
            { label: "Sektor Terbesar", val: "Kuliner", sub: "412 UMKM", subColor: "text-slate-400" },
            { label: "Peminjam Baru", val: "45", sub: "Bulan ini", subColor: "text-slate-400" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border shadow-sm">
              <p className="text-slate-400 text-[10px] uppercase font-bold mb-2 tracking-wider">
                {item.label}
              </p>
              <h2 className="text-4xl font-bold text-slate-800">
                {item.val}
              </h2>
              <p className={`${item.subColor} text-[10px] mt-2 font-bold uppercase`}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* TABLE SECTION */}
        <div className="bg-white rounded-[30px] overflow-hidden border shadow-sm">
          {/* FILTER TOOLBAR */}
          <div className="flex justify-between items-center p-6 border-b">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 border rounded-xl px-5 py-3 text-sm font-semibold hover:bg-slate-50">
                <Filter size={16} />
                Filter Sektor
              </button>
              <button className="flex items-center gap-2 border rounded-xl px-5 py-3 text-sm font-semibold hover:bg-slate-50">
                <Calendar size={16} />
                Urutkan: Terbaru
              </button>
            </div>
            <button className="text-green-600 text-sm font-bold hover:underline">Unduh CSV</button>
          </div>

          <table className="w-full">
            <thead>
              <tr className="text-left text-slate-400 text-[10px] uppercase font-bold tracking-widest bg-slate-50/50">
                <th className="py-6 px-8">Nama Lengkap</th>
                <th className="text-center">Peran</th>
                <th className="text-center">Sektor</th>
                <th className="text-center">Status</th>
                <th className="text-center px-8">Aksi</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/30 transition-colors">
                  <td className="py-6 px-8">
                    <div className="flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xs ${user.color}`}>
                        {user.initials}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800">{user.name}</h3>
                        <p className="text-slate-400 text-xs">{user.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="text-center">
                    <span className="bg-slate-100 text-slate-500 px-3 py-1.5 rounded-lg text-[10px] font-bold">
                      Peminjam
                    </span>
                  </td>

                  <td className="text-center text-sm font-semibold text-slate-600">{user.sektor}</td>

                  <td>
                    <div className="flex items-center justify-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${user.status === "Aktif" ? "bg-green-500" : "bg-slate-300"}`} />
                      <span className={`font-bold text-xs ${user.status === "Aktif" ? "text-green-600" : "text-slate-400"}`}>
                        {user.status}
                      </span>
                    </div>
                  </td>

                  <td className="px-8">
                    <div className="flex justify-center gap-5">
                      <button className="hover:text-blue-500 transition-colors text-slate-300">
                        <Eye size={20} />
                      </button>

                      {/* PENCIL: Menggunakan gambar sesuai instruksi alur */}
                      <button
                        onClick={() => navigate(`/DataPengguna/${user.id}`)}
                        className="hover:opacity-60 transition-opacity"
                      >
                        <img 
                          src="/pencil.png" 
                          alt="Edit" 
                          className="w-5 h-5 object-contain" 
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
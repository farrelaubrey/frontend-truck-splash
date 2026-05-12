import { SidebarAdmin } from "../components/SidebarAdmin";

export default function DashboardAdmin() {
  return (
    <div className="flex bg-[#f8fafc] min-h-screen">
      {/* SidebarAdmin tetap menggunakan posisi fixed di dalamnya */}
      <SidebarAdmin />

      {/* PERBAIKAN UTAMA: 
          Tambahkan 'ml-64' agar area konten dashboard bergeser ke kanan 
          dan tidak tertindih oleh Sidebar.
      */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        
        {/* TOP HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-black text-[#0f172a] tracking-tight">Dashboard</h2>
          <div className="relative">
             <input 
              type="text" 
              placeholder="Cari berdasarkan nama, email, atau ID..." 
              className="bg-white border border-slate-200 rounded-2xl px-5 py-3 text-sm w-80 focus:ring-2 focus:ring-green-500/20 outline-none shadow-sm transition-all"
             />
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Penyaluran Dana", val: "Rp 12,85 M", trend: "+ 12% vs bulan lalu", color: "green" },
            { label: "UMKM Aktif", val: "1,248", trend: "+42 mitra baru", color: "blue" },
            { label: "Pengajuan Baru", val: "56", trend: "Perlu verifikasi segera", color: "orange" },
            { label: "Tingkat Pelunasan", val: "98.4%", trend: "Sangat Sehat", color: "green" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
              <h3 className="text-2xl font-black text-[#0f172a] mb-2">{stat.val}</h3>
              <p className={`text-[10px] font-bold ${stat.color === 'green' ? 'text-green-500' : 'text-slate-400'}`}>{stat.trend}</p>
            </div>
          ))}
        </div>

        {/* CHARTS & DISTRIBUTION SECTION */}
        <div className="grid grid-cols-3 gap-6 mb-8">
           <div className="col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm min-h-[350px]">
              <h3 className="font-bold text-[#0f172a] mb-6">Ringkasan Performa</h3>
              <div className="h-56 bg-slate-50 rounded-3xl border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-sm font-medium">
                [ Area Chart: Tren Penyaluran Dana 6 Bulan Terakhir ]
              </div>
           </div>
           
           <div className="bg-[#0f172a] p-8 rounded-[2.5rem] text-white shadow-xl flex flex-col justify-center">
              <h3 className="font-bold mb-8 text-lg">Distribusi Sektor</h3>
              <div className="space-y-6">
                {['Kuliner', 'Ritel', 'Manufaktur', 'Jasa'].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-[11px] mb-2 font-bold uppercase tracking-wider">
                      <span className="text-slate-400">{item}</span>
                      <span className="text-green-400">{42 - (idx * 10)}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-green-500 h-full rounded-full transition-all duration-1000" 
                        style={{ width: `${42 - (idx * 10)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* RECENT VERIFICATIONS TABLE */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden mb-8">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center">
            <h3 className="font-bold text-lg text-[#0f172a]">Antrean Verifikasi Terkini</h3>
            <button className="text-xs font-bold text-green-600 hover:underline tracking-wide">LIHAT SEMUA ANTREAN →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">
                <tr>
                  <th className="px-10 py-5">Nama UMKM</th>
                  <th className="px-8 py-5">Sektor Bisnis</th>
                  <th className="px-8 py-5 text-center">Jumlah Pengajuan</th>
                  <th className="px-8 py-5 text-center">Status</th>
                  <th className="px-10 py-5 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { name: "Transport Jaya Abadi", id: "REQ-2024001", sector: "Logistik", amount: "Rp 125.000.000", status: "Menunggu Review" },
                  { name: "Berkah Mandiri Cargo", id: "REQ-2024005", sector: "Distribusi", amount: "Rp 45.500.000", status: "Menunggu Review" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-all cursor-default">
                    <td className="px-10 py-7">
                      <p className="font-bold text-[#0f172a] text-base">{row.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold tracking-wider mt-1">ID: {row.id}</p>
                    </td>
                    <td className="px-8 py-7">
                      <span className="bg-slate-100 text-slate-500 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tight">
                        {row.sector}
                      </span>
                    </td>
                    <td className="px-8 py-7 font-black text-[#0f172a] text-center">{row.amount}</td>
                    <td className="px-8 py-7">
                      <div className="flex items-center justify-center gap-2.5">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                        <span className="text-[11px] font-black text-orange-500 uppercase tracking-tighter">{row.status}</span>
                      </div>
                    </td>
                    <td className="px-10 py-7 text-center">
                      <button className="bg-green-600 text-white px-6 py-2.5 rounded-xl text-xs font-black hover:bg-green-700 shadow-md shadow-green-200 transition-all active:scale-95">
                        VERIFIKASI
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
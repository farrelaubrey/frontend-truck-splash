import { Sidebar } from "../components/Sidebar";

export default function Riwayat() {
  const transaksi = [
    {
      id: "TRX992011",
      tanggal: "28 Sep 2023",
      waktu: "14:30 WIB",
      deskripsi: "Angsuran ke-4 - Pinjaman Modal Kerja",
      kategori: "Repayment",
      jumlah: "- Rp 12.500.000",
      status: "Success",
    },
    {
      id: "TRX991882",
      tanggal: "25 Sep 2023",
      waktu: "09:15 WIB",
      deskripsi: "Pencairan Dana Usaha Ekspansi",
      kategori: "Disbursement",
      jumlah: "+ Rp 50.000.000",
      status: "Success",
    },
    {
      id: "TRX991881",
      tanggal: "25 Sep 2023",
      waktu: "09:10 WIB",
      deskripsi: "Biaya Administrasi & Provisi",
      kategori: "Admin Fee",
      jumlah: "- Rp 750.000",
      status: "Pending",
    },
    {
      id: "TRX985004",
      tanggal: "15 Sep 2023",
      waktu: "11:20 WIB",
      deskripsi: "Angsuran ke-3 - Pinjaman Modal Kerja",
      kategori: "Repayment",
      jumlah: "- Rp 12.500.000",
      status: "Success",
    },
  ];

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <Sidebar />

      {/* Rampingkan padding dari p-10 ke p-8 */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        
        {/* HEADER SECTION - Ukuran text & margin dikurangi */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-10 bg-[#0f172a] rounded-full shadow-sm"></div>
            <div>
              <h2 className="text-2xl font-black text-[#0f172a] tracking-tight">Riwayat Transaksi</h2>
              <p className="text-slate-400 font-medium text-[11px] mt-0.5 uppercase tracking-wider">Laporan arus kas & aktivitas peminjaman</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-2.5 rounded-xl text-[10px] font-black text-[#0f172a] hover:bg-slate-50 transition-all shadow-sm">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            UNDUH PDF
          </button>
        </div>

        {/* STATS SUMMARY SECTION - Card lebih ringkas */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all">
            <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-2">Total Pinjaman</p>
            <h3 className="text-2xl font-black text-[#0f172a] mb-2">Rp 125.000.000</h3>
            <span className="text-[9px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded-md">+12% DARI BULAN LALU</span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all">
            <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-2">Total Pelunasan</p>
            <h3 className="text-2xl font-black text-[#22c55e] mb-4">Rp 45.200.000</h3>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-slate-50 h-2 rounded-full overflow-hidden border border-slate-100">
                <div className="bg-[#22c55e] h-full w-[36%] rounded-full shadow-sm"></div>
              </div>
              <span className="text-[10px] font-black text-slate-500">36%</span>
            </div>
          </div>

          <div className="bg-[#0f172a] p-6 rounded-2xl shadow-md">
            <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-2">Sisa Tagihan</p>
            <h3 className="text-2xl font-black text-white mb-2">Rp 79.800.000</h3>
            <div className="flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></span>
               <p className="text-[9px] text-slate-400 font-medium">Jatuh tempo: <span className="text-white font-black">12 Okt 2023</span></p>
            </div>
          </div>
        </div>

        {/* FILTER SECTION - Input & Select lebih ramping */}
        <div className="bg-white p-4 rounded-xl mb-6 flex gap-4 items-center shadow-sm border border-slate-100">
          <div className="flex-1 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </span>
            <input 
              type="text" 
              placeholder="Cari transaksi..." 
              className="w-full bg-[#f8fafc] border-none rounded-lg py-2.5 pl-10 pr-4 text-xs font-medium focus:ring-1 focus:ring-[#0f172a]/10 transition-all"
            />
          </div>
          <select className="bg-[#f8fafc] border-none rounded-lg py-2.5 px-4 text-[11px] font-black text-slate-600 focus:ring-0 cursor-pointer">
            <option>30 Hari Terakhir</option>
          </select>
          <button className="bg-[#0f172a] text-white px-8 py-2.5 rounded-lg text-[11px] font-black hover:bg-slate-800 transition-all">
            FILTER
          </button>
        </div>

        {/* TABLE SECTION - Padding baris dikurangi */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="p-5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Tanggal</th>
                <th className="p-5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Deskripsi</th>
                <th className="p-5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Kategori</th>
                <th className="p-5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Jumlah</th>
                <th className="p-5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transaksi.map((trx, index) => (
                <tr key={index} className="hover:bg-slate-50/30 transition-colors">
                  <td className="p-5">
                    <p className="font-black text-[#0f172a] text-xs">{trx.tanggal}</p>
                    <p className="text-[9px] text-slate-400 font-bold mt-0.5 uppercase">{trx.waktu}</p>
                  </td>
                  <td className="p-5">
                    <p className="font-bold text-[#0f172a] text-xs leading-tight">{trx.deskripsi}</p>
                    <p className="text-[9px] text-slate-400 font-black mt-0.5">#{trx.id}</p>
                  </td>
                  <td className="p-5">
                    <span className={`text-[9px] font-black px-2.5 py-1 rounded-lg uppercase ${
                      trx.kategori === 'Repayment' ? 'bg-blue-50 text-blue-600' : 
                      trx.kategori === 'Disbursement' ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {trx.kategori}
                    </span>
                  </td>
                  <td className={`p-5 font-black text-sm ${trx.jumlah.startsWith('+') ? 'text-green-600' : 'text-[#0f172a]'}`}>
                    {trx.jumlah}
                  </td>
                  <td className="p-5">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border ${
                      trx.status === 'Success' ? 'bg-green-50 border-green-100 text-green-600' : 'bg-orange-50 border-orange-100 text-orange-500'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${trx.status === 'Success' ? 'bg-green-500' : 'bg-orange-400'}`}></span>
                      <span className="text-[9px] font-black uppercase tracking-wider">{trx.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION - Diperkecil */}
          <div className="p-5 flex justify-between items-center bg-white border-t border-slate-50">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Item <span className="text-[#0f172a] font-black">1 - 4</span> dari <span className="text-[#0f172a] font-black">24</span>
            </p>
            <div className="flex gap-2 items-center">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-100 text-slate-300 text-xs hover:bg-slate-50 transition-all font-black">←</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0f172a] text-white font-black text-[10px]">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 font-black text-[10px] hover:bg-slate-100 transition-all">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-100 text-slate-400 text-xs hover:bg-slate-50 transition-all font-black">→</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
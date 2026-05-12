import { SidebarAdmin } from "../components/SidebarAdmin";

export default function VerifikasiPembayaran() {
  const daftarPembayaran = [
    {
      id: "TX-2023091101",
      peminjam: "Agus Martowardojo",
      jumlah: "Rp 5.250.000",
      tanggal: "12 Okt 2023",
      metode: "Virtual Account",
    },
    {
      id: "TX-2023091102",
      peminjam: "Siti Permata",
      jumlah: "Rp 12.800.000",
      tanggal: "12 Okt 2023",
      metode: "Manual Transfer",
    },
    {
      id: "TX-2023091103",
      peminjam: "Bambang Kusuma",
      jumlah: "Rp 2.400.000",
      tanggal: "11 Okt 2023",
      metode: "Virtual Account",
    }
  ];

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <SidebarAdmin />

      <main className="flex-1 ml-64 p-10 overflow-y-auto">
        {/* HEADER - Tetap Bersih */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black text-[#0f172a] tracking-tight">Verifikasi Pembayaran</h2>
            <p className="text-slate-500 font-medium mt-1">Kelola dan konfirmasi bukti transaksi peminjam.</p>
          </div>
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Cari transaksi..." 
              className="bg-white border border-slate-200 rounded-2xl py-3.5 pl-12 pr-6 text-sm focus:ring-2 focus:ring-green-500/20 transition-all outline-none w-80 shadow-sm"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
               <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </span>
          </div>
        </div>

        {/* STATS CARDS - Diperkecil sedikit agar tidak mendominasi */}
        <div className="grid grid-cols-3 gap-8 mb-10">
          <div className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm">
            <p className="text-xs text-slate-400 font-black uppercase tracking-widest mb-2">Perlu Verifikasi</p>
            <h3 className="text-2xl font-black text-[#0f172a]">24 Pesanan</h3>
          </div>
          <div className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm">
            <p className="text-xs text-slate-400 font-black uppercase tracking-widest mb-2">Total Hari Ini</p>
            <h3 className="text-2xl font-black text-green-600">Rp 142.5jt</h3>
          </div>
          <div className="bg-[#0f172a] p-7 rounded-[2rem] shadow-xl">
            <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-2">Terverifikasi</p>
            <h3 className="text-2xl font-black text-white">1,284</h3>
          </div>
        </div>

        {/* TABLE SECTION - Ukuran Row dikembalikan ke Normal (Nyaman dibaca) */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Peminjam</th>
                <th className="px-8 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Nominal</th>
                <th className="px-8 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Metode</th>
                <th className="px-8 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {daftarPembayaran.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50/50 transition-all">
                  {/* Peminjam - Ukuran teks diperbesar sedikit (text-sm) */}
                  <td className="px-8 py-7">
                    <p className="font-black text-[#0f172a] text-sm leading-tight">{item.peminjam}</p>
                    <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-tight">ID: {item.id}</p>
                  </td>
                  
                  {/* Nominal - Warna hijau emerald tegas */}
                  <td className="px-8 py-7">
                    <p className="font-black text-green-600 text-base">{item.jumlah}</p>
                    <p className="text-[10px] text-slate-400 font-bold mt-0.5">{item.tanggal}</p>
                  </td>
                  
                  {/* Metode - Badge lebih lebar sedikit */}
                  <td className="px-8 py-7">
                    <span className="bg-slate-100 text-slate-600 text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-wider">
                      {item.metode}
                    </span>
                  </td>
                  
                  {/* Aksi - Tombol kembali ke ukuran standar yang nyaman di klik */}
                  <td className="px-8 py-7 text-center">
                    <button className="bg-green-500 hover:bg-green-600 text-white text-[11px] font-black px-8 py-3.5 rounded-xl shadow-lg shadow-green-100 transition-all active:scale-95 tracking-wider">
                      KONFIRMASI
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="p-6 bg-slate-50/50 flex justify-center border-t border-slate-50">
            <button className="text-[11px] font-black text-slate-400 hover:text-[#0f172a] transition-all tracking-widest uppercase">
              Tampilkan Lebih Banyak
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
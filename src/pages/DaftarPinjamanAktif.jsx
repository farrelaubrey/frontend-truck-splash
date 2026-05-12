import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function DaftarPinjamanAktif() {
  const navigate = useNavigate();

  const pinjamanData = [
    {
      id: 1,
      title: "Modal Warung Mandiri",
      desc: "Stok Harian Toko Kelontong",
      progress: "66.7%",
      cicilan: "8 / 12 Bulan",
      tempo: "12 Nov 2023",
      status: "AKTIF",
      isCritical: true
    },
    {
      id: 2,
      title: "Kredit Cepat Kaki Lima",
      desc: "Pendanaan Pedagang Keliling",
      progress: "8.3%",
      cicilan: "2 / 24 Bulan",
      tempo: "28 Okt 2023",
      status: "AKTIF",
      isCritical: false
    },
    {
      id: 3,
      title: "Ekspansi Kedai Kopi",
      desc: "Pembelian Alat Espresso Baru",
      progress: "45.0%",
      cicilan: "5 / 12 Bulan",
      tempo: "15 Des 2023",
      status: "AKTIF",
      isCritical: false
    },
    {
      id: 4,
      title: "Modal Stok Sembako",
      desc: "Persediaan Menjelang Hari Raya",
      progress: "10.0%",
      cicilan: "1 / 10 Bulan",
      tempo: "05 Nov 2023",
      status: "AKTIF",
      isCritical: false
    }
  ];

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <Sidebar />

      {/* Padding dikurangi dari p-10 menjadi p-8 agar lebih ramping */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        
        {/* BREADCRUMB & TITLE */}
        <header className="mb-8 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold mb-2 uppercase tracking-widest">
              <button onClick={() => navigate(-1)} className="hover:text-green-600 transition-colors">Pinjaman Saya</button>
              <span>/</span>
              <span className="text-slate-600">Daftar Pinjaman Aktif</span>
            </div>
            <h2 className="text-3xl font-black text-[#0f172a] tracking-tight">Seluruh Pinjaman Aktif</h2>
          </div>
          
          <div className="bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Total Pinjaman</p>
            <p className="text-lg font-black text-[#0f172a]">{pinjamanData.length} Produk</p>
          </div>
        </header>

        {/* GRID DAFTAR PINJAMAN - Gap dikurangi agar lebih rapat */}
        <div className="grid grid-cols-2 gap-6 pb-10">
          {pinjamanData.map((item) => (
            /* Radius dikurangi dari rounded-[3rem] menjadi rounded-2xl */
            <div key={item.id} className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div>
                    {/* Ukuran teks judul dikurangi dari text-2xl ke text-lg */}
                    <h4 className="font-bold text-[#0f172a] text-lg tracking-tight">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5 font-medium">{item.desc}</p>
                  </div>
                  <span className="bg-green-50 text-green-600 text-[9px] px-3 py-1 rounded-lg font-black tracking-wider">
                    {item.status}
                  </span>
                </div>

                <div className="mb-5">
                  <div className="flex justify-between text-[10px] font-bold mb-2">
                    <span className="text-slate-400 uppercase tracking-wide">Progres Pelunasan</span>
                    <span className="text-green-600">{item.progress}</span>
                  </div>
                  {/* Tinggi bar dikurangi dari h-3 menjadi h-2 */}
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-green-500 h-full rounded-full transition-all duration-1000 shadow-sm"
                      style={{ width: item.progress }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Padding box stats dikurangi dari p-5 menjadi p-3.5 */}
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <p className="text-[9px] text-slate-400 font-bold uppercase mb-1 tracking-tighter">Status Cicilan</p>
                    <p className="font-bold text-[#0f172a] text-sm">{item.cicilan}</p>
                  </div>
                  <div className={`p-3.5 rounded-xl border ${item.isCritical ? 'bg-rose-50 border-rose-100' : 'bg-slate-50 border-slate-100'}`}>
                    <p className={`text-[9px] font-bold uppercase mb-1 tracking-tighter ${item.isCritical ? 'text-rose-400' : 'text-slate-400'}`}>
                      Jatuh Tempo
                    </p>
                    <p className={`font-bold text-sm ${item.isCritical ? 'text-rose-600' : 'text-[#0f172a]'}`}>
                      {item.tempo}
                    </p>
                  </div>
                </div>
              </div>

              {/* Ukuran tombol lebih ramping */}
              <button className="w-full bg-[#0f172a] text-white py-3.5 rounded-xl font-bold text-xs hover:bg-slate-800 transition-all shadow-sm">
                Bayar Sekarang
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
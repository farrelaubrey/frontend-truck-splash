import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function PinjamanSaya() {
  const navigate = useNavigate();

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <Sidebar />

      {/* Ukuran Padding diperkecil dari 14/10 menjadi 8 agar tidak kebesaran */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        
        {/* HEADER HERO - Ukuran teks dan padding disesuaikan */}
        <header className="mb-8 bg-[#0F172A] rounded-2xl overflow-hidden flex relative shadow-lg">
          <div className="flex-1 p-10 z-10">
            <span className="text-green-400 font-bold text-[10px] tracking-widest uppercase mb-3 block">
              Profil Peminjam
            </span>
            <h2 className="text-3xl font-black text-white mb-3 tracking-tight leading-tight">
              Kelola Pertumbuhan Bisnis Anda
            </h2>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed mb-8 font-medium">
              Pantau status pinjaman aktif dan progres pengajuan modal usaha Anda.
            </p>

            <div className="flex gap-6">
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-md min-w-[180px]">
                <p className="text-slate-400 text-[9px] uppercase font-black tracking-widest mb-1">Total Pinjaman Aktif</p>
                <h4 className="text-xl font-black text-white tracking-tight">Rp 15.000.000</h4>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-md min-w-[180px]">
                <p className="text-green-400/80 text-[9px] uppercase font-black tracking-widest mb-1">Sisa Tagihan</p>
                <h4 className="text-xl font-black text-green-400 tracking-tight">Rp 4.150.000</h4>
              </div>
            </div>
          </div>

          <div className="w-1/3 relative hidden lg:block">
            <img 
              src="/pinjamansayafoto.png" 
              alt="Pinjaman" 
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0F172A]"></div>
          </div>
        </header>

        {/* SECTION: PINJAMAN AKTIF */}
        <section className="mb-10">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="text-2xl font-black text-[#0f172a] tracking-tight">Pinjaman Aktif</h3>
              <p className="text-slate-400 text-xs font-medium mt-1">Tagihan yang sedang berjalan bulan ini.</p>
            </div>
            <button 
              onClick={() => navigate("/DaftarPinjamanAktif")} 
              className="bg-white text-[#0f172a] px-5 py-2.5 rounded-xl font-black text-[10px] border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
            >
              LIHAT SEMUA
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Card Pinjaman 1 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-md transition-all">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-black text-[#0f172a] text-lg">Modal Warung Mandiri</h4>
                  <p className="text-xs text-slate-400 font-medium">Stok Harian Toko</p>
                </div>
                <span className="bg-green-100 text-green-700 text-[9px] px-3 py-1 rounded-lg font-black tracking-widest">AKTIF</span>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-[10px] font-black mb-2">
                  <span className="text-slate-400 uppercase tracking-wider">Progres</span>
                  <span className="text-green-600">66.7%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[66.7%] rounded-full shadow-sm"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <p className="text-[9px] text-slate-400 font-black uppercase mb-1 tracking-wider">Cicilan</p>
                  <p className="font-bold text-xs text-[#0f172a]">8 / 12 Bln</p>
                </div>
                <div className="bg-rose-50 p-3 rounded-xl border border-rose-100">
                  <p className="text-[9px] text-rose-400 font-black uppercase mb-1 tracking-wider">Tempo</p>
                  <p className="font-black text-xs text-rose-600">12 Nov 23</p>
                </div>
              </div>

              <button className="w-full bg-[#0f172a] text-white py-3.5 rounded-xl font-black text-xs hover:bg-slate-800 transition-all">
                Bayar Sekarang
              </button>
            </div>

            {/* Card Pinjaman 2 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-md transition-all">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-black text-[#0f172a] text-lg">Kredit Kaki Lima</h4>
                  <p className="text-xs text-slate-400 font-medium">Pendanaan Pedagang</p>
                </div>
                <span className="bg-green-100 text-green-700 text-[9px] px-3 py-1 rounded-lg font-black tracking-widest">AKTIF</span>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-[10px] font-black mb-2">
                  <span className="text-slate-400 uppercase tracking-wider">Progres</span>
                  <span className="text-green-600">8.3%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[8.3%] rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <p className="text-[9px] text-slate-400 font-black uppercase mb-1 tracking-wider">Cicilan</p>
                  <p className="font-bold text-xs text-[#0f172a]">2 / 24 Bln</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <p className="text-[9px] text-slate-400 font-black uppercase mb-1 tracking-wider">Tempo</p>
                  <p className="font-bold text-xs text-[#0f172a]">28 Okt 23</p>
                </div>
              </div>

              <button className="w-full bg-[#0f172a] text-white py-3.5 rounded-xl font-black text-xs hover:bg-slate-800 transition-all">
                Bayar Sekarang
              </button>
            </div>
          </div>
        </section>

        {/* SECTION: STATUS PENGAJUAN */}
        <section className="pb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-black text-[#0f172a] tracking-tight">Status Pengajuan</h3>
            <span className="bg-slate-200 text-[#0f172a] px-3 py-1 rounded-lg text-[9px] font-black tracking-widest">
              TOTAL: 2
            </span>
          </div>

          <div className="space-y-3">
            {/* List Item 1 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:border-green-500 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <h5 className="font-black text-[#0f172a] text-sm">Jasa Jahit</h5>
                  <p className="text-[9px] text-slate-400 font-bold">APP-10025 • 22 Okt 23</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="bg-blue-50 text-blue-600 text-[9px] px-3 py-1.5 rounded-lg font-black uppercase tracking-tight">Verifikasi</span>
                <div className="text-slate-300 group-hover:text-[#0f172a]">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
                </div>
              </div>
            </div>

            {/* List Item 2 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:border-green-500 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
                </div>
                <div>
                  <h5 className="font-black text-[#0f172a] text-sm">Pedagang Pasar</h5>
                  <p className="text-[9px] text-slate-400 font-bold">APP-10026 • 24 Okt 23</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="bg-orange-50 text-orange-600 text-[9px] px-3 py-1.5 rounded-lg font-black uppercase tracking-tight">Ditinjau</span>
                <div className="text-slate-300 group-hover:text-[#0f172a]">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
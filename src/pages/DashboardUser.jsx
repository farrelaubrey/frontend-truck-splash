import { Link } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { ProductCard } from "../components/ProductCard";

export default function DashboardUser() {
  const featuredLoans = [
    {
      title: "Kredit Cepat Kaki Lima",
      category: "KULINER",
      categoryColor: "kuliner",
      desc: "Solusi pendanaan instan untuk pedagang makanan keliling dan UMKM mikro.",
      tenor: "30 - 90 Hari",
      bunga: "0.6% / bln"
    },
    {
      title: "Modal Usaha Jasa Jahit",
      category: "KREATIF",
      categoryColor: "kreatif",
      desc: "Bantuan biaya pembelian mesin jahit baru atau bahan kain untuk produksi.",
      tenor: "6 - 12 Bulan",
      bunga: "0.45% / bln"
    },
    {
      title: "Modal Warung Mandiri",
      category: "WARUNG",
      categoryColor: "warung",
      desc: "Tambahan modal untuk stok harian dan pengembangan toko kelontong Anda.",
      tenor: "1 - 6 Bulan",
      bunga: "0.5% / bln"
    }
  ];

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <Sidebar /> 

      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        
        {/* HEADER SECTION - Diperkecil & Dirampingkan */}
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black text-[#0f172a] tracking-tight">
              Halo, Budi Santoso
            </h2>
            <p className="text-slate-400 font-medium text-[11px] mt-0.5 uppercase tracking-wider">
              Kelola arus kas bisnis Anda dengan efisiensi hari ini.
            </p>
          </div>
          
          <div className="w-48 h-20 flex justify-end">
            <img 
              src="/splash-art.png" 
              alt="Splash Art" 
              className="rounded-2xl object-contain w-full h-full drop-shadow-sm opacity-90" 
            />
          </div>
        </header>

        {/* TOP CARDS SECTION - Skala elemen diturunkan */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {/* Card Utama: Limit Pinjaman */}
          <div className="col-span-2 bg-[#0f172a] text-white p-7 rounded-[1.5rem] relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-8 -mt-8"></div>
            <div className="relative z-10">
              <span className="text-green-400 font-black text-[9px] tracking-[0.2em] uppercase">Limit Tersedia</span>
              <h3 className="text-4xl font-black mt-3 mb-6 tracking-tighter">Rp 35.500.000</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] text-slate-400 font-black tracking-wide uppercase">
                  <span>Terpakai: Rp 14.500.000</span>
                  <span>Total: Rp 50.000.000</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden border border-white/5">
                  <div className="bg-green-500 h-full w-[29%] transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Tagihan Terdekat - Lebih Compact */}
          <div className="bg-white border border-slate-100 p-6 rounded-[1.5rem] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-rose-500 mb-3">
                <span className="text-[9px] font-black uppercase tracking-[0.15em]">Tagihan Terdekat</span>
              </div>
              <h3 className="text-2xl font-black text-[#0f172a]">Rp 2.450.000</h3>
              <p className="text-[10px] text-slate-400 mt-1 font-bold">
                Jatuh tempo: <span className="text-rose-500 font-black">3 Hari lagi</span>
              </p>
            </div>

            <div className="space-y-2 mt-4">
              <button className="w-full bg-[#0f172a] text-white py-2 rounded-lg font-black text-[10px] uppercase hover:bg-slate-800 transition-all">
                Bayar Sekarang
              </button>
              <button className="w-full bg-slate-50 text-slate-400 py-2 rounded-lg font-black text-[10px] uppercase hover:bg-slate-100 transition-all border border-slate-100">
                Rincian
              </button>
            </div>
          </div>
        </div>

        {/* SECTION: PAKET PINJAMAN - Header ramping & grid gap dikurangi */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-6 bg-green-500 rounded-full"></div>
               <h3 className="text-lg font-black text-[#0f172a] tracking-tight">Paket Pinjaman Tersedia</h3>
            </div>
            <Link 
              to="/Pinjaman" 
              className="text-[10px] font-black text-green-600 bg-green-50 px-4 py-1.5 rounded-lg hover:bg-green-100 transition-all uppercase tracking-wider"
            >
              Lihat Semua
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {featuredLoans.map((loan, index) => (
              <div key={index} className="transition-transform hover:-translate-y-1">
                <ProductCard {...loan} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
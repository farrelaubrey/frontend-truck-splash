import { Sidebar } from "../components/Sidebar";
import { ProductCard } from "../components/ProductCard";

export default function Pinjaman() {
  const allLoans = [
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
    },
    {
      title: "Pinjaman Berkah Tani",
      category: "TANI",
      categoryColor: "tani",
      desc: "Pembiayaan untuk bibit dan pupuk berkualitas bagi petani lokal.",
      tenor: "3 - 6 Bulan",
      bunga: "0.4% / bln"
    },
    {
      title: "Ekspansi Bengkel Motor",
      category: "JASA",
      categoryColor: "kreatif",
      desc: "Dukungan dana untuk upgrade peralatan bengkel dan stok sparepart.",
      tenor: "12 - 24 Bulan",
      bunga: "0.55% / bln"
    },
    {
      title: "Pinjaman Pedagang Pasar",
      category: "PASAR",
      categoryColor: "pasar",
      desc: "Pendanaan khusus untuk pedagang sayur dan sembako di pasar tradisional.",
      tenor: "1 - 4 Minggu",
      bunga: "0.7% / bln"
    }
  ];

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <Sidebar />

      <div className="flex-1 ml-64 p-8 overflow-y-auto">
        
        {/* HEADER SECTION - Ukuran text & margin dikurangi agar proporsional */}
        <div className="mb-8 flex items-center gap-4 animate-in fade-in slide-in-from-top-2">
          <div className="w-1.5 h-10 bg-green-500 rounded-full"></div>
          <div>
            <h2 className="text-2xl font-black text-[#0f172a] tracking-tight">
              Daftar Pinjaman UMKM
            </h2>
            <p className="text-slate-500 font-medium text-xs mt-0.5">
              Pilih proyek pendanaan yang sesuai dengan profil bisnis Anda.
            </p>
          </div>
        </div>

        {/* FILTER SECTION - Area ini dibuat lebih ramping */}
        <div className="mb-8 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex flex-col gap-6">
            
            {/* Category Filter */}
            <div>
              <label className="text-[9px] font-black text-slate-400 uppercase mb-3 block tracking-widest ml-1">
                KATEGORI BISNIS
              </label>
              <div className="flex flex-wrap gap-2.5">
                {["Semua Kategori", "Kuliner", "Kreatif", "Warung", "Pasar", "Tani"].map((cat) => (
                  <button
                    key={cat}
                    className={`px-6 py-2 rounded-xl text-[11px] font-black transition-all border
                      ${cat === "Semua Kategori" 
                        ? "bg-[#0f172a] border-[#0f172a] text-white shadow-md" 
                        : "bg-[#f8fafc] border-slate-100 text-slate-400 hover:border-green-500 hover:text-green-600 hover:bg-white"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[1px] w-full bg-slate-100"></div>

            {/* Sort & Info Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">URUTKAN:</span>
                <div className="flex gap-2">
                  {["Terbaru", "Bunga Rendah", "Tenor"].map((sort) => (
                    <button 
                      key={sort}
                      className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all ${
                        sort === "Terbaru" 
                        ? "bg-green-50 text-green-600 ring-1 ring-green-100" 
                        : "text-slate-400 hover:text-[#0f172a]"
                      }`}
                    >
                      {sort}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-right">
                <p className="text-[11px] font-black text-[#0f172a]">{allLoans.length} Paket Tersedia</p>
              </div>
            </div>
          </div>
        </div>

        {/* LOAN GRID SECTION - Gap dikurangi agar muat lebih banyak */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
          {allLoans.map((loan, index) => (
            <div key={index} className="transition-transform duration-300 hover:-translate-y-1">
              <ProductCard {...loan} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
import { useNavigate } from "react-router-dom";

function TampilanUtama() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold tracking-tight">Truck Splash</h1>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/login")}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-slate-500 hover:text-white transition-colors"
            >
              Masuk
            </button>

            <button
              onClick={() => navigate("/daftar")}
              className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
            >
              Daftar
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr] md:items-center">
        <section className="space-y-8">
          <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Pinjaman Cepat & <br />
            <span className="text-emerald-600">Transparan</span> untuk UMKM Indonesia
          </h2>

          <p className="text-lg text-slate-600">
            Memberdayakan UMKM Indonesia dengan akses permodalan yang cepat,
            aman, dan terpercaya.
          </p>

          <div className="flex gap-4">
            <div className="flex-1 rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
              <p className="text-xl font-bold text-[#0f172a]">500k+</p>
              <p className="text-sm text-slate-500 font-medium">UMKM terbantu</p>
            </div>

            <div className="flex-1 rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
              <p className="text-xl font-bold text-[#0f172a]">Rp 4.2T</p>
              <p className="text-sm text-slate-500 font-medium">Total pendanaan</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          <img
            src="/rectangle9.png"
            alt="UMKM"
            className="w-full h-80 object-cover" 
          />

          <div className="p-8">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Bunga mulai</p>
            <p className="text-4xl font-black text-emerald-600">
              1.2% / bulan
            </p>
            {/* Tombol Ajukan Sekarang telah dihapus agar fokus pada informasi bunga saja */}
          </div>
        </section>
      </main>

      <footer className="mt-10 text-center text-xs font-bold text-slate-400 py-10 tracking-widest uppercase">
        Truck Splash &copy; 2026
      </footer>
    </div>
  );
}

export default TampilanUtama;
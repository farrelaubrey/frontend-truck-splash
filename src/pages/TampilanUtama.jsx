import { Link } from "react-router-dom";

function TampilanUtama() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold tracking-tight">Truck Splash</h1>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-slate-500 hover:text-white"
            >
              Masuk
            </Link>

            <Link
              to="/daftar"
              className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
            >
              Daftar
            </Link>
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
            <div className="flex-1 rounded-3xl bg-white p-6 shadow">
              <p className="text-xl font-semibold">500k+</p>
              <p className="text-sm text-slate-500">UMKM terbantu</p>
            </div>

            <div className="flex-1 rounded-3xl bg-white p-6 shadow">
              <p className="text-xl font-semibold">Rp 4.2T</p>
              <p className="text-sm text-slate-500">Total pendanaan</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white shadow overflow-hidden">
          <img
            src="/rectangle9.png"
            alt="UMKM"
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            <p className="text-sm text-slate-500">Bunga mulai</p>
            <p className="text-2xl font-bold text-emerald-600">
              1.2% / bulan
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-10 text-center text-sm text-slate-500 py-6">
        TruckSplash@2026
      </footer>
    </div>
  );
}

export default TampilanUtama;
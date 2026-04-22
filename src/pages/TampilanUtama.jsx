import { Link } from "react-router-dom";
export default function TampilanUtama() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Truck Splash</h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/LoginUser.jsx"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-slate-500 hover:text-white"
            >
              Masuk
            </Link>
            <Link
              to="/"
              className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-500/20 hover:bg-emerald-600"
            >
              Daftar
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr] md:items-center">
        <section className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
              Pinjaman Cepat &<br />
              <span className="text-emerald-600">Transparan</span> untuk UMKM Indonesia
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Memberdayakan UMKM Indonesia dengan akses permodalan yang cepat, aman, dan terpercaya guna mendorong pertumbuhan bisnis secara berkelanjutan melalui inovasi teknologi finansial.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 rounded-3xl bg-white p-6 text-slate-950 shadow-[0_30px_60px_-35px_rgba(15,23,42,0.35)]">
              <div className="flex items-center gap-3 text-emerald-600">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100">
                  <img src="/orangIcon.png" alt="UMKM terbantu" className="w-12 h-12 object-contain" />
                </span>
                <div>
                  <p className="text-xl font-semibold">500k+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                    UMKM terbantu
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 rounded-3xl bg-white p-6 text-slate-950 shadow-[0_30px_60px_-35px_rgba(15,23,42,0.35)]">
              <div className="flex items-center gap-3 text-emerald-600">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-3xl">
                  <img src="/duiticon.png" alt="Total pendanaan" className="w-12 h-12 object-contain" />
                </span>
                <div>
                  <p className="text-xl font-semibold">Rp 4.2T</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                    Total pendanaan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_40px_80px_-45px_rgba(15,23,42,0.4)]">
          <div className="relative h-80 overflow-hidden rounded-t-[32px] sm:h-96">
            <img src="/Rectangle 9.png" alt="UMKM illustration" className="w-full h-full object-cover" />
          </div>

          <div className="relative -mt-16 mx-6 rounded-[24px] bg-white px-6 pb-6 pt-8 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.3)]">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Bunga Kompetitif Mulai
                </p>
                <p className="text-3xl font-extrabold text-emerald-600">
                  1.2% <span className="text-sm font-medium text-slate-500">per bulan</span>
                </p>
              </div>

              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40">
                <span className="text-2xl">↗</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-600">
          <p>TruckSplash@2026</p>
        </div>
      </footer>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function DashboardUser() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* NAVBAR */}
      <nav className="bg-[#0B1A33] text-white px-6 py-4 flex items-center">
        <h1 className="text-xl font-bold">Truck Splash</h1>
      </nav>

      <div className="flex">

        {/* SIDEBAR */}
        <aside className="w-64 bg-white min-h-screen p-5 shadow-sm">
          <ul className="space-y-3">

            <li className="bg-green-600 text-white px-4 py-3 rounded-xl font-medium">
              Dashboard
            </li>

            <li className="px-4 py-3 rounded-xl hover:bg-gray-100 cursor-pointer">
              Pinjaman
            </li>

            <li className="px-4 py-3 rounded-xl hover:bg-gray-100 cursor-pointer">
              Pinjaman Saya
            </li>

            <li className="px-4 py-3 rounded-xl hover:bg-gray-100 cursor-pointer">
              Riwayat
            </li>

            <li className="px-4 py-3 rounded-xl hover:bg-gray-100 cursor-pointer">
              Pengaturan
            </li>

          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-8">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">
                Halo, Budi Santoso
              </h2>
              <p className="text-gray-500">
                Bisnis Anda berkembang pesat. Mari kelola arus kas Anda.
              </p>
            </div>

            <div className="w-24 h-24 bg-gray-200 rounded-2xl"></div>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* CARD LIMIT */}
            <div className="md:col-span-2 bg-gradient-to-r from-black to-green-900 text-white p-6 rounded-3xl shadow-lg">
              
              <p className="text-sm text-green-400">
                LIMIT PINJAMAN TERSEDIA
              </p>

              <h3 className="text-4xl font-bold mt-2">
                Rp 85.500.000
              </h3>

              <div className="flex justify-between text-sm mt-6">
                <span>Terpakai: Rp 14.500.000</span>
                <span>Total Limit: Rp 100.000.000</span>
              </div>

              {/* PROGRESS */}
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div className="bg-green-400 h-2 rounded-full w-[85%]"></div>
              </div>

              <p className="text-xs text-gray-300 mt-3">
                Limit diperbarui otomatis berdasarkan performa pembayaran.
              </p>
            </div>

            {/* TAGIHAN */}
            <div className="bg-white p-6 rounded-3xl shadow">
              
              <p className="text-red-500 text-sm font-semibold">
                TAGIHAN TERDEKAT
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Rp 2.450.000
              </h3>

              <p className="text-gray-500 text-sm">
                Jatuh tempo dalam 3 hari
              </p>

              <button className="w-full mt-4 bg-black text-white py-3 rounded-xl hover:bg-gray-800">
                Bayar Sekarang
              </button>

              <button className="w-full mt-3 border py-3 rounded-xl">
                Rincian Tagihan
              </button>

            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
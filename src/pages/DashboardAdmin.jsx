import { Link } from "react-router-dom";

export default function DashboardAdmin() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0B1A33] text-white p-6 space-y-6">
        <div>
          <h1 className="text-xl font-bold">Panel Admin</h1>
          <p className="text-sm text-gray-400">Manajemen Pinjaman</p>
        </div>

        <nav className="space-y-3">
          <div className="bg-green-600 px-4 py-2 rounded-lg">Dashboard</div>
          <div className="hover:bg-white/10 px-4 py-2 rounded-lg cursor-pointer">
            Data Pengguna
          </div>
          <div className="hover:bg-white/10 px-4 py-2 rounded-lg cursor-pointer">
            Verifikasi Pembayaran
          </div>
          <div className="hover:bg-white/10 px-4 py-2 rounded-lg cursor-pointer">
            Verifikasi Pengajuan
          </div>
          <div className="hover:bg-white/10 px-4 py-2 rounded-lg cursor-pointer">
            Pengaturan Admin
          </div>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6 space-y-6">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Dashboard</h2>

          <input
            type="text"
            placeholder="Cari berdasarkan nama, email, atau ID..."
            className="px-4 py-2 rounded-full bg-gray-200 w-80 outline-none"
          />
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-4">

          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500">TOTAL PENYALURAN DANA</p>
            <h3 className="text-xl font-bold">Rp 12,85 M</h3>
            <p className="text-green-500 text-sm">+12% vs bulan lalu</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500">UMKM AKTIF</p>
            <h3 className="text-xl font-bold">1,248</h3>
            <p className="text-green-500 text-sm">+42 mitra baru</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500">PENGAJUAN BARU</p>
            <h3 className="text-xl font-bold">56</h3>
            <p className="text-blue-500 text-sm">Perlu verifikasi</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500">TINGKAT PELUNASAN</p>
            <h3 className="text-xl font-bold">98.4%</h3>
            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div className="bg-green-500 h-2 rounded w-[98%]"></div>
            </div>
          </div>

        </div>

        {/* CHART + DISTRIBUSI */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* CHART */}
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-4">Ringkasan Performa</h3>

            <div className="h-40 bg-green-100 rounded-lg flex items-end gap-2 p-2">
              <div className="bg-green-500 w-1/6 h-10 rounded"></div>
              <div className="bg-green-500 w-1/6 h-12 rounded"></div>
              <div className="bg-green-500 w-1/6 h-20 rounded"></div>
              <div className="bg-green-500 w-1/6 h-28 rounded"></div>
              <div className="bg-green-500 w-1/6 h-24 rounded"></div>
              <div className="bg-green-500 w-1/6 h-36 rounded"></div>
            </div>
          </div>

          {/* DISTRIBUSI */}
          <div className="bg-black text-white p-6 rounded-2xl">
            <h3 className="font-semibold mb-4">Distribusi Sektor</h3>

            {[
              { label: "Kuliner", value: 42 },
              { label: "Retail", value: 28 },
              { label: "Manufaktur", value: 15 },
              { label: "Jasa", value: 15 },
            ].map((item, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between text-sm">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded mt-1">
                  <div
                    className="bg-green-500 h-2 rounded"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}

            <p className="text-sm text-gray-400 mt-4">
              Total Sektor: 12 kategori
            </p>
          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">
            Antrean Verifikasi Terkini
          </h3>

          <table className="w-full text-sm">
            <thead className="text-gray-500">
              <tr>
                <th className="text-left py-2">Nama UMKM</th>
                <th>Sektor</th>
                <th>Jumlah</th>
                <th>Waktu</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="py-2">Transport Jaya Abadi</td>
                <td>Logistik</td>
                <td>Rp 125jt</td>
                <td>2 jam lalu</td>
                <td className="text-yellow-500">Review</td>
                <td>
                  <button className="bg-green-500 text-white px-3 py-1 rounded">
                    Verifikasi
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}
import React, { useState } from "react";
import { SidebarAdmin } from "../components/SidebarAdmin";

export default function VerifikasiPengajuan() {
  const [view, setView] = useState("daftar"); // 'daftar' atau 'detail'

  const antrean = [
    { id: "REQ-2024001", nama: "Transport Jaya Abadi", sektor: "Logistik", jumlah: "Rp 125.000.000", tenor: "12 Bulan", inisial: "TJ" },
    { id: "REQ-2024005", nama: "Berkah Mandiri Cargo", sektor: "Distribusi", jumlah: "Rp 45.500.000", tenor: "6 Bulan", inisial: "BM" },
    { id: "REQ-2024009", nama: "Surya Logistik", sektor: "Ekspedisi", jumlah: "Rp 210.000.000", tenor: "24 Bulan", inisial: "SL" },
  ];

  // Tampilan 1: Antrean Pengajuan (Berdasarkan VerifikasiPengajuan.png)
  const RenderDaftar = () => (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">Verifikasi Pengajuan</h2>
          <p className="text-slate-400 text-xs font-medium mt-0.5">Tinjau dan verifikasi kelayakan modal UMKM mitra.</p>
        </div>
        <input 
          type="text" 
          placeholder="Cari ID atau Nama UMKM..." 
          className="bg-white border border-slate-200 rounded-xl py-2.5 px-4 text-xs w-72 outline-none focus:ring-1 focus:ring-green-500 shadow-sm"
        />
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { label: "Menunggu", val: "24", color: "text-[#0f172a]" },
          { label: "Prioritas", val: "8", color: "text-orange-500" },
          { label: "Selesai Hari Ini", val: "15", color: "text-green-600" },
          { label: "Skor Rata-rata", val: "8.4", color: "text-blue-600" },
        ].map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{s.label}</p>
            <h3 className={`text-xl font-bold ${s.color}`}>{s.val}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
              <th className="px-8 py-4">Detail Pengajuan</th>
              <th className="px-8 py-4">Sektor</th>
              <th className="px-8 py-4">Nominal</th>
              <th className="px-8 py-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {antrean.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50/30 transition-all">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-[11px] font-bold text-slate-500">{item.inisial}</div>
                    <div>
                      <p className="font-bold text-[#0f172a] text-[13px]">{item.nama}</p>
                      <p className="text-[10px] text-slate-400 font-medium">ID: {item.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-md">{item.sektor}</span>
                </td>
                <td className="px-8 py-6">
                  <p className="font-bold text-[#0f172a] text-[13px]">{item.jumlah}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{item.tenor}</p>
                </td>
                <td className="px-8 py-6 text-center">
                  <button 
                    onClick={() => setView("detail")}
                    className="bg-[#0f172a] hover:bg-black text-white text-[10px] font-bold px-6 py-2.5 rounded-lg transition-all active:scale-95"
                  >
                    TINJAU
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  // Tampilan 2: Detail Pengajuan (Berdasarkan Verifikasi Pengajuan - 2.png)
  const RenderDetail = () => (
    <div className="animate-in fade-in duration-300">
      <button 
        onClick={() => setView("daftar")}
        className="mb-6 text-[11px] font-bold text-slate-400 hover:text-[#0f172a] flex items-center gap-2 transition-all"
      >
        ← KEMBALI KE DAFTAR
      </button>

      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-[#0f172a] tracking-tight">Detail Pengajuan #REQ-2024001</h2>
          <p className="text-slate-400 text-xs font-medium mt-1">Diajukan pada: 24 Okt 2023, 14:20 WIB</p>
        </div>
        <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Tinjauan Manual</span>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          {/* PROFIL BISNIS */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h4 className="text-lg font-bold text-[#0f172a] mb-8 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-green-500 rounded-full"></span> Profil Bisnis UMKM
            </h4>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Nama Bisnis", val: "Transport Jaya Abadi" },
                { label: "Pemilik", val: "Budi Santoso" },
                { label: "Jenis Usaha", val: "Logistik & Transportasi" },
                { label: "Lokasi", val: "Jakarta Timur, DKI Jakarta" }
              ].map((info, i) => (
                <div key={i}>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="text-sm font-bold text-[#0f172a]">{info.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DOKUMEN */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h4 className="text-lg font-bold text-[#0f172a] mb-6">Berkas Persyaratan</h4>
            <div className="space-y-4">
              {/* Berkas foto tempat usaha ditambahkan di sini */}
              {["KTP Pemilik Usaha", "NIB / SIUP Bisnis", "Foto Tempat Usaha"].map((doc, i) => (
                <div key={i} className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-green-300 transition-all cursor-pointer group">
                  <p className="text-sm font-bold text-[#0f172a]">{doc}</p>
                  <span className="text-[11px] font-bold text-green-600 opacity-0 group-hover:opacity-100">Buka Berkas →</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR AKSI */}
        <div className="space-y-6">
          <div className="bg-[#0f172a] p-8 rounded-[2rem] text-white shadow-xl">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-6">Ringkasan Pinjaman</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase">Total Pengajuan</p>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Rp 125.000.000</h3>
            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <p className="text-[11px] text-slate-400">Tenor</p>
              <p className="text-sm font-bold">12 Bulan</p>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <p className="text-[11px] text-slate-400">Bunga p.a</p>
              <p className="text-sm font-bold text-green-400">11.5%</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <h4 className="text-sm font-bold text-[#0f172a] mb-3">Keputusan Admin</h4>
            <textarea placeholder="Tulis catatan kelayakan..." className="w-full bg-slate-50 border-none rounded-xl p-4 text-[11px] min-h-[120px] outline-none" />
          </div>

          <div className="space-y-3">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl text-sm shadow-lg shadow-green-100 transition-all">Setujui Pengajuan</button>
            <button className="w-full bg-white text-rose-500 border border-slate-100 font-bold py-4 rounded-2xl text-sm hover:bg-rose-50 transition-all">Tolak / Revisi</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <SidebarAdmin />
      <main className="flex-1 ml-64 p-10 overflow-y-auto">
        {view === "daftar" ? <RenderDaftar /> : <RenderDetail />}
      </main>
    </div>
  );
}
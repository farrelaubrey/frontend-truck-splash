import React, { useState } from "react";
import { SidebarAdmin } from "../components/SidebarAdmin";

export default function PengaturanAdmin() {
  const [view, setView] = useState("daftar"); // 'daftar' atau 'edit'

  const daftarAdmin = [
    { id: "TS-ADM-001", nama: "Aditya Wijaya", email: "aditya.w@trucksplash.id", peran: "SUPER ADMIN", status: "Aktif", foto: "AW" },
    { id: "TS-ADM-004", nama: "Siti Aminah", email: "siti.aminah@trucksplash.id", peran: "VERIFIKATOR", status: "Aktif", foto: "SA" },
    { id: "TS-ADM-012", nama: "Maya Putri", email: "maya.putri@trucksplash.id", peran: "DATA PENGGUNA", status: "Offline", foto: "MP" },
    { id: "TS-ADM-009", nama: "Rizky Pratama", email: "rizky.p@trucksplash.id", peran: "VERIFIKATOR", status: "Ditangguhkan", foto: "RP" },
  ];

  // Tampilan Utama: Kelola Akses Admin (Admin Setting.png)
  const RenderDaftarAkses = () => (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#0f172a] tracking-tight">Kelola Akses Admin</h2>
          <p className="text-slate-400 text-xs font-medium mt-1">Pantau dan atur hak akses tim operasional Truck Splash.</p>
        </div>
        <button 
          onClick={() => setView("edit")}
          className="bg-[#00a65a] hover:bg-[#008d4c] text-white text-[12px] font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-green-100"
        >
          <span className="text-lg">+</span> TAMBAH ADMIN BARU
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-10">
        {[
          { label: "Total Admin", val: "24", sub: "+2 bulan ini", color: "text-[#0f172a]" },
          { label: "Admin Aktif", val: "21", sub: "Sedang Login", color: "text-blue-600" },
          { label: "Perlu Review", val: "03", sub: "Izin Kadaluarsa", color: "text-rose-500" },
        ].map((s, i) => (
          <div key={i} className="bg-white p-7 rounded-[1.5rem] border border-slate-100 shadow-sm">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{s.label}</p>
            <div className="flex items-baseline gap-2">
              <h3 className={`text-2xl font-bold ${s.color}`}>{s.val}</h3>
              <span className="text-[10px] text-slate-400 font-medium">{s.sub}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <th className="px-8 py-5">Nama Staff</th>
              <th className="px-8 py-5">Email Address</th>
              <th className="px-8 py-5">Peran / Role</th>
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {daftarAdmin.map((admin, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-all cursor-pointer" onClick={() => setView("edit")}>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white text-[11px] font-bold">
                      {admin.foto}
                    </div>
                    <div>
                      <p className="font-bold text-[#0f172a] text-[13px]">{admin.nama}</p>
                      <p className="text-[10px] text-slate-400 font-medium">ID: {admin.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5 text-[12px] text-slate-500 font-medium">{admin.email}</td>
                <td className="px-8 py-5">
                  <span className="bg-slate-100 text-slate-600 text-[9px] font-bold px-3 py-1 rounded-md uppercase tracking-tighter">
                    {admin.peran}
                  </span>
                </td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${admin.status === 'Aktif' ? 'bg-green-500' : admin.status === 'Offline' ? 'bg-slate-300' : 'bg-rose-500'}`}></div>
                    <span className="text-[11px] font-bold text-slate-600">{admin.status}</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-center">
                  <button className="text-slate-300 hover:text-slate-600 text-xl font-bold">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  // Tampilan Form: Pengaturan Admin (Admin Setting (1).png)
  const RenderFormPengaturan = () => (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#0f172a]">Pengaturan Admin</h2>
        <div className="h-1 w-12 bg-green-500 rounded-full mt-2"></div>
      </div>

      <div className="bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-sm space-y-12">
        {/* SEKSI INFORMASI PRIBADI */}
        <div className="grid grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="w-32 h-32 bg-slate-100 rounded-full mx-auto border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
               <img src="https://via.placeholder.com/150" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-bold text-[#0f172a] text-sm">Foto Profil</p>
              <p className="text-[10px] text-slate-400 mt-1 px-4 leading-relaxed">Format JPG/PNG, maks 2MB. Untuk identifikasi visual di log aktivitas.</p>
            </div>
          </div>

          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-5 h-5 bg-green-50 text-green-600 rounded-md flex items-center justify-center text-[10px]">👤</div>
               <h4 className="text-sm font-bold text-[#0f172a]">Informasi Pribadi</h4>
            </div>
            <div>
              <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-2">Nama Lengkap</label>
              <input 
                type="text" 
                placeholder="Masukkan nama sesuai KTP"
                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
              />
            </div>
          </div>
        </div>

        <hr className="border-slate-50" />

        {/* SEKSI PERAN & IZIN */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
             <div className="w-5 h-5 bg-green-50 text-green-600 rounded-md flex items-center justify-center text-[10px]">🛡️</div>
             <h4 className="text-sm font-bold text-[#0f172a]">Pengaturan Peran & Izin</h4>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-2">Peran Admin</label>
              <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm outline-none appearance-none">
                <option>Pilih Peran Admin</option>
                <option>Super Admin</option>
                <option>Verifikator</option>
                <option>Data Pengguna</option>
              </select>
            </div>
          </div>

          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">Izin Akses Modul</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Data Pengguna", desc: "Kelola data peminjam.", active: true },
                { title: "Verifikasi Pinjaman", desc: "Analisis profil risiko dan dokumen UMKM.", active: false },
              ].map((modul, i) => (
                <div key={i} className={`p-5 rounded-2xl border transition-all flex items-start gap-4 ${modul.active ? 'border-green-500 bg-green-50/30' : 'border-slate-100 bg-white'}`}>
                  <input type="checkbox" checked={modul.active} className="mt-1 accent-green-600 h-4 w-4" readOnly />
                  <div>
                    <p className="text-sm font-bold text-[#0f172a]">{modul.title}</p>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">{modul.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex justify-between items-center border-t border-slate-50">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-xs">ⓘ</span>
            <p className="text-[10px]">Password akan dikirimkan otomatis ke email yang didaftarkan.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setView("daftar")}
              className="px-8 py-3 rounded-xl text-xs font-bold text-slate-400 hover:bg-slate-50 transition-all"
            >
              BATAL
            </button>
            <button className="px-10 py-3 bg-[#00a65a] hover:bg-[#008d4c] text-white text-xs font-bold rounded-xl shadow-lg shadow-green-100 transition-all">
              SIMPAN ADMIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <SidebarAdmin />
      <main className="flex-1 ml-64 p-12 overflow-y-auto">
        {view === "daftar" ? <RenderDaftarAkses /> : <RenderFormPengaturan />}
      </main>
    </div>
  );
}
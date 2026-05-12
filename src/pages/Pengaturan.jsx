import { useState } from "react";
import { Sidebar } from "../components/Sidebar";

export default function Pengaturan() {
  const [view, setView] = useState("main");

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <Sidebar />

      {/* Padding dikurangi dari p-10 ke p-8 */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <div className="max-w-4xl">
          {/* HEADER NAVIGASI - Ukuran teks disesuaikan */}
          <div className="flex items-center gap-3 mb-8">
            <h2 
              className={`text-2xl font-black cursor-pointer transition-all ${view === 'main' ? 'text-[#0f172a]' : 'text-slate-300 hover:text-slate-500'}`}
              onClick={() => setView("main")}
            >
              Pengaturan
            </h2>
            {view !== "main" && (
              <>
                <span className="text-slate-300 text-xl font-light">/</span>
                <span className="text-2xl font-black text-[#0f172a] animate-in fade-in slide-in-from-left-2">
                  {view === "edit-profil" ? "Edit Profil" : "Edit Bisnis"}
                </span>
              </>
            )}
          </div>

          {/* VIEW 1: TAMPILAN UTAMA PENGATURAN */}
          {view === "main" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              {/* SECTION: PROFIL PENGGUNA */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-lg font-black text-[#0f172a] tracking-tight">Profil Pengguna</h3>
                    <p className="text-xs text-slate-400 mt-0.5 font-medium">Informasi identitas pribadi Anda.</p>
                  </div>
                  <button 
                    onClick={() => setView("edit-profil")}
                    className="bg-[#f8fafc] text-[#0f172a] px-6 py-2.5 rounded-xl text-[10px] font-black border border-slate-200 hover:bg-[#0f172a] hover:text-white transition-all"
                  >
                    EDIT PROFIL
                  </button>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 bg-[#0f172a] rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-md">
                    BS
                  </div>
                  <div className="grid grid-cols-3 gap-8 flex-1">
                    <div>
                      <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Nama Lengkap</p>
                      <p className="text-sm font-bold text-[#0f172a]">Budi Setiawan</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Email</p>
                      <p className="text-sm font-bold text-[#0f172a]">budi@umkm.id</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Telepon</p>
                      <p className="text-sm font-bold text-[#0f172a]">+62 812-3456</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: INFORMASI BISNIS */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-lg font-black text-[#0f172a] tracking-tight">Informasi Bisnis</h3>
                    <p className="text-xs text-slate-400 mt-0.5 font-medium">Detail entitas bisnis Anda.</p>
                  </div>
                  <button 
                    onClick={() => setView("edit-bisnis")}
                    className="bg-[#f8fafc] text-[#0f172a] px-6 py-2.5 rounded-xl text-[10px] font-black border border-slate-200 hover:bg-[#0f172a] hover:text-white transition-all"
                  >
                    EDIT BISNIS
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-100 col-span-2">
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Nama Bisnis</p>
                    <p className="text-base font-black text-[#0f172a]">Toko Kelontong Berkah</p>
                  </div>
                  <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-100">
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Kategori</p>
                    <p className="text-sm font-bold text-[#0f172a]">Mikro / Ritel</p>
                  </div>
                  <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-100">
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Wilayah</p>
                    <p className="text-sm font-bold text-[#0f172a]">Jakarta Pusat</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: EDIT PROFIL */}
          {view === "edit-profil" && (
            <div className="flex gap-8 animate-in slide-in-from-right-4 duration-500">
              <div className="w-1/3 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center h-fit">
                <div className="relative group cursor-pointer transition-transform hover:scale-105">
                  <div className="w-32 h-32 rounded-2xl bg-slate-200 border-2 border-white shadow-md overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=Budi+Setiawan&background=0f172a&color=fff&size=128" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-green-500 p-2 rounded-lg text-white shadow-lg border-2 border-white">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                  </div>
                </div>
                <h4 className="mt-5 font-black text-[#0f172a] text-sm">Ganti Foto</h4>
                <p className="text-[9px] text-slate-400 mt-1 uppercase font-bold text-center leading-tight">Format JPG/PNG<br/>Maks 2MB</p>
              </div>

              <div className="flex-1 space-y-4">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <div className="space-y-4">
                    <div>
                      <label className="text-[9px] text-slate-400 font-black uppercase mb-2 block tracking-widest">Nama Lengkap</label>
                      <input type="text" defaultValue="Budi Setiawan" className="w-full bg-[#f8fafc] border-none rounded-xl p-3.5 text-xs font-bold text-[#0f172a] focus:ring-2 focus:ring-green-500/20" />
                    </div>
                    <div>
                      <label className="text-[9px] text-slate-400 font-black uppercase mb-2 block tracking-widest">Email</label>
                      <input type="email" defaultValue="budi@umkm.id" className="w-full bg-[#f8fafc] border-none rounded-xl p-3.5 text-xs font-bold text-[#0f172a] focus:ring-2 focus:ring-green-500/20" />
                    </div>
                    <div>
                      <label className="text-[9px] text-slate-400 font-black uppercase mb-2 block tracking-widest">WhatsApp</label>
                      <div className="flex items-center bg-[#f8fafc] rounded-xl px-4 focus-within:ring-2 focus-within:ring-green-500/20">
                        <span className="text-slate-400 text-xs font-black mr-2">+62</span>
                        <input type="text" defaultValue="81234567890" className="w-full bg-transparent border-none py-3.5 text-xs font-bold text-[#0f172a] focus:ring-0" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex gap-3">
                    <button onClick={() => setView("main")} className="flex-[2] bg-[#0f172a] text-white py-3.5 rounded-xl font-black text-[10px] hover:bg-slate-800 transition-all">SIMPAN</button>
                    <button onClick={() => setView("main")} className="flex-1 bg-white text-slate-400 py-3.5 rounded-xl font-black text-[10px] border border-slate-200 hover:bg-slate-50">BATAL</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 3: EDIT BISNIS */}
          {view === "edit-bisnis" && (
            <div className="flex gap-8 animate-in slide-in-from-right-4 duration-500">
              <div className="w-1/3">
                <div className="bg-[#0f172a] p-8 rounded-2xl border border-slate-800 relative overflow-hidden shadow-md">
                  <div className="relative z-10 text-white">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-md shadow-green-500/20">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </div>
                    <h4 className="text-xl font-black mb-2 leading-tight">Data Bisnis</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">Perubahan akan melalui proses validasi sistem.</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-1">
                    <label className="text-[9px] text-slate-400 font-black uppercase mb-2 block tracking-widest">Nama Bisnis</label>
                    <input type="text" defaultValue="Toko Berkah" className="w-full bg-[#f8fafc] border-none rounded-xl p-3.5 text-xs font-bold text-[#0f172a] focus:ring-2 focus:ring-green-500/20" />
                  </div>
                  <div className="col-span-1">
                    <label className="text-[9px] text-slate-400 font-black uppercase mb-2 block tracking-widest">Kategori</label>
                    <select className="w-full bg-[#f8fafc] border-none rounded-xl p-3.5 text-xs font-bold text-[#0f172a] focus:ring-2 focus:ring-green-500/20">
                      <option>Mikro / Ritel</option>
                      <option>Jasa Kuliner</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="text-[9px] text-slate-400 font-black uppercase mb-2 block tracking-widest">Alamat</label>
                    <textarea rows="3" defaultValue="Jl. Merdeka No. 123, Jakarta" className="w-full bg-[#f8fafc] border-none rounded-xl p-3.5 text-xs font-bold text-[#0f172a] resize-none focus:ring-2 focus:ring-green-500/20"></textarea>
                  </div>
                </div>
                <div className="mt-8 flex justify-end gap-4 items-center">
                  <button onClick={() => setView("main")} className="text-slate-400 text-[10px] font-black hover:text-[#0f172a]">BATAL</button>
                  <button onClick={() => setView("main")} className="bg-green-600 text-white px-8 py-3.5 rounded-xl font-black text-[10px] shadow-md hover:bg-green-700 transition-all">SIMPAN</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PengajuanPinjaman() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleFinish = () => navigate("/DashboardUser");

  return (
    // Memastikan kontainer utama selalu memenuhi layar tanpa scroll yang tidak perlu
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#0f172a] flex flex-col">
      
      {/* NAVBAR */}
      <nav className="bg-[#0F172A] text-white py-5 px-10 shadow-lg flex-shrink-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tighter">Truck Splash</h1>
          {step < 4 && (
            <button 
              onClick={() => navigate(-1)} 
              className="text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              Batal & Kembali
            </button>
          )}
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-10">
        
        {step < 4 ? (
          <div className="w-full max-w-6xl">
            
            {/* HEADER SECTION */}
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-4xl font-black mb-3 tracking-tight">Langkah Menuju Pertumbuhan.</h2>
              <p className="text-slate-500 text-sm max-w-2xl leading-relaxed font-medium">
                Isi detail profil bisnis Anda untuk membantu kami memahami potensi usaha Anda dan mempercepat proses verifikasi.
              </p>
            </div>

            {/* FLEX CONTAINER UNTUK ASIDE & FORM */}
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              
              {/* STEPS INDICATOR (SIDEBAR) */}
              <aside className="lg:w-1/3">
                <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm h-full">
                  <p className="text-[10px] font-black text-green-600 uppercase tracking-[0.2em] mb-10">Progres Pengajuan</p>
                  <div className="space-y-8">
                    {[
                      { id: 1, label: "Informasi Dasar", desc: "Profil & Kategori Bisnis" },
                      { id: 2, label: "Dokumen Legalitas", desc: "KTP & Foto Operasional" },
                      { id: 3, label: "Analisis Keuangan", desc: "Review Plafon & Tenor" }
                    ].map((s) => (
                      <div key={s.id} className="flex items-center gap-5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm transition-all duration-500 ${
                          step === s.id 
                            ? "bg-green-600 text-white shadow-xl shadow-green-200 rotate-3" 
                            : step > s.id 
                            ? "bg-slate-800 text-white" 
                            : "bg-slate-100 text-slate-400"
                        }`}>
                          {step > s.id ? "✓" : s.id}
                        </div>
                        <div>
                          <p className={`font-bold text-sm ${step === s.id ? "text-[#0f172a]" : "text-slate-400"}`}>{s.label}</p>
                          <p className="text-[10px] text-slate-400 font-medium">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>

              {/* FORM CARD */}
              <section className="lg:w-2/3">
                <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-2xl shadow-slate-200/50 min-h-[500px] flex flex-col">
                  
                  <div className="flex-1">
                    {/* STEP 1: INFORMASI DASAR */}
                    {step === 1 && (
                      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="col-span-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Nama Bisnis / Usaha</label>
                            <input type="text" placeholder="Contoh: Bengkel Maju Jaya" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all" />
                          </div>
                          <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Kategori Bisnis</label>
                            <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-bold outline-none focus:ring-4 focus:ring-green-500/10 transition-all">
                              <option>Usaha Mikro</option>
                              <option>Usaha Kecil</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Lama Beroperasi</label>
                            <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-bold outline-none focus:ring-4 focus:ring-green-500/10 transition-all">
                              <option>1 - 2 Tahun</option>
                              <option> {">"} 2 Tahun</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Alamat Lengkap Operasional</label>
                          <textarea rows="4" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-bold outline-none focus:ring-4 focus:ring-green-500/10 resize-none transition-all" placeholder="Tulis alamat lengkap..."></textarea>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: DOKUMEN LEGALITAS */}
                    {step === 2 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                        {[
                          { title: "Kartu Tanda Penduduk (KTP)", desc: "Upload foto KTP asli Anda", tag: "KTP" },
                          { title: "Foto Tempat Usaha", desc: "Foto tampak depan dengan papan nama", tag: "FOTO" },
                          { title: "Surat Izin Usaha / NIB", desc: "Dokumen legalitas bisnis", tag: "NIB" }
                        ].map((doc, i) => (
                          <div key={i} className="group p-6 border-2 border-dashed border-slate-100 rounded-[2rem] flex items-center justify-between bg-slate-50/50 hover:bg-white hover:border-green-500/30 transition-all cursor-pointer">
                            <div className="flex items-center gap-5">
                              <div className="w-16 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:text-green-600 group-hover:border-green-100 shadow-sm transition-all">
                                {doc.tag}
                              </div>
                              <div>
                                <p className="font-bold text-sm text-[#0f172a]">{doc.title}</p>
                                <p className="text-[10px] text-slate-400 font-medium">{doc.desc}</p>
                              </div>
                            </div>
                            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-green-600 transition-all">Unggah</button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* STEP 3: ANALISIS KEUANGAN */}
                    {step === 3 && (
                      <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="bg-[#0f172a] rounded-[2.5rem] p-8 text-white relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                          <p className="text-[10px] font-black text-green-400 uppercase tracking-widest mb-6">Ringkasan Pinjaman</p>
                          <div className="flex justify-between items-end mb-8">
                            <div>
                              <p className="text-slate-400 text-[11px] mb-2 font-bold">Plafon Pinjaman</p>
                              <p className="text-4xl font-black">Rp 5.000.000</p>
                            </div>
                            <div className="text-right">
                              <p className="text-slate-400 text-[11px] mb-2 font-bold">Tenor</p>
                              <p className="text-2xl font-black">12 Bulan</p>
                            </div>
                          </div>
                          <div className="space-y-3 pt-6 border-t border-white/10 text-xs">
                            <div className="flex justify-between text-slate-400 font-bold"><span>Bunga Bulanan</span><span className="text-white">0.8%</span></div>
                            <div className="flex justify-between text-slate-400 font-bold"><span>Biaya Admin</span><span className="text-white">Rp 50.000</span></div>
                            <div className="flex justify-between p-4 bg-green-500/10 rounded-2xl text-green-400 font-black text-sm mt-4">
                              <span>Total Diterima</span><span>Rp 4.950.000</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-[10px] text-slate-400 text-center font-medium">Dengan menekan tombol di bawah, Anda menyetujui syarat dan ketentuan yang berlaku.</p>
                      </div>
                    )}
                  </div>

                  {/* NAVIGATION BUTTONS */}
                  <div className="flex gap-4 mt-10">
                    {step > 1 && (
                      <button 
                        onClick={() => setStep(step - 1)} 
                        className="flex-1 border-2 border-slate-100 py-4 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all text-slate-500"
                      >
                        Kembali
                      </button>
                    )}
                    <button 
                      onClick={() => step < 3 ? setStep(step + 1) : setStep(4)} 
                      className={`flex-[2] py-4 rounded-2xl font-black text-sm transition-all shadow-lg active:scale-[0.98] ${
                        step === 3 
                        ? "bg-green-600 text-white shadow-green-200 hover:bg-green-700" 
                        : "bg-[#0f172a] text-white hover:bg-slate-800"
                      }`}
                    >
                      {step === 3 ? "KONFIRMASI & AJUKAN SEKARANG" : "LANJUTKAN →"}
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ) : (
          /* STEP 4: SUCCESS STATE */
          <div className="max-w-xl mx-auto text-center animate-in zoom-in duration-700">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner rotate-12">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-4xl font-black mb-4 tracking-tighter">Pengajuan Berhasil!</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
              Data Anda telah masuk ke sistem kami. Tim analis Truck Splash akan melakukan verifikasi dalam waktu maksimal 48 jam.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-widest">Nomor Tiket</p>
                <p className="font-black text-[#0f172a] text-base">#TRK-9210</p>
              </div>
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-widest">Estimasi</p>
                <p className="font-black text-[#0f172a] text-base">2 Hari Kerja</p>
              </div>
            </div>
            <button 
              onClick={handleFinish} 
              className="bg-green-600 text-white px-12 py-4 rounded-2xl font-black text-sm hover:bg-green-700 transition-all shadow-xl shadow-green-100 active:scale-95"
            >
              KEMBALI KE BERANDA
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
import { useNavigate } from "react-router-dom";

import { SidebarAdmin } from "../components/SidebarAdmin";

import {
  ArrowLeft,
  Save,
} from "lucide-react";

export default function DataPenggunaEdit() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* SIDEBAR */}
      <SidebarAdmin />

      {/* CONTENT */}
      <div className="flex-1 p-8">
        {/* HEADER */}
        <div className="flex justify-between items-start mb-10">
          {/* LEFT */}
          <div className="flex items-start gap-4">
            {/* BACK */}
            <button
              onClick={() =>
                navigate("/DataPengguna/1")
              }
              className="w-12 h-12 rounded-full border bg-white flex items-center justify-center hover:bg-slate-50 transition"
            >
              <ArrowLeft />
            </button>

            {/* TITLE */}
            <div>
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-5xl font-bold text-slate-900">
                  Ubah Data Profil
                </h1>

                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Ahmad Setiadi
                </span>
              </div>

              <p className="text-slate-500">
                User ID: FF-2023-08942
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex gap-4">
            <button
              onClick={() =>
                navigate("/DataPengguna/1")
              }
              className="h-14 px-8 rounded-2xl border bg-white font-bold hover:bg-slate-50 transition"
            >
              Batal
            </button>

            <button className="h-14 px-8 rounded-2xl bg-green-600 text-white font-bold flex items-center gap-3 hover:bg-green-700 transition">
              <Save size={18} />
              Simpan Perubahan
            </button>
          </div>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-[30px] border border-slate-100 p-10">
          {/* TITLE */}
          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Informasi Pribadi & Bisnis
          </h2>

          {/* FORM */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* NAMA */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">
                Nama Lengkap
              </label>

              <input
                type="text"
                defaultValue="Ahmad Setiadi"
                className="w-full h-14 border border-slate-200 rounded-2xl px-5 outline-none focus:border-green-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">
                Alamat Email
              </label>

              <input
                type="email"
                defaultValue="ahmad.setiadi@email.com"
                className="w-full h-14 border border-slate-200 rounded-2xl px-5 outline-none focus:border-green-500"
              />
            </div>

            {/* TELEPON */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">
                Nomor Telepon
              </label>

              <input
                type="text"
                defaultValue="+62 812-3456-7890"
                className="w-full h-14 border border-slate-200 rounded-2xl px-5 outline-none focus:border-green-500"
              />
            </div>

            {/* BISNIS */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">
                Nama Bisnis
              </label>

              <input
                type="text"
                defaultValue="Warung Berkah"
                className="w-full h-14 border border-slate-200 rounded-2xl px-5 outline-none focus:border-green-500"
              />
            </div>
          </div>

          {/* TEXTAREA */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">
              Alamat Bisnis
            </label>

            <textarea
              defaultValue="Jl. Kebon Sirih No.12 Menteng Jakarta Pusat"
              className="w-full h-40 border border-slate-200 rounded-2xl p-5 outline-none resize-none focus:border-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
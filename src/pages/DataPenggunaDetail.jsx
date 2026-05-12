import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SidebarAdmin } from "../components/SidebarAdmin";

import {
  ArrowLeft,
  Pencil,
  Ban,
  MoreVertical,
} from "lucide-react";

export default function DataPenggunaDetail() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* SIDEBAR */}
      <SidebarAdmin />

      {/* CONTENT */}
      <div className="flex-1 p-8 relative">
        {/* HEADER */}
        <div className="flex justify-between items-start mb-10">
          {/* LEFT */}
          <div className="flex items-start gap-4">
            <button
              onClick={() => navigate("/DataPengguna")}
              className="w-12 h-12 rounded-full border bg-white flex items-center justify-center"
            >
              <ArrowLeft />
            </button>

            <div>
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-5xl font-bold text-slate-900">
                  Ahmad Setiadi
                </h1>

                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Aktif
                </span>
              </div>

              <p className="text-slate-500">
                User ID: FF-2023-08942
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex gap-4">
            {/* EDIT */}
            <button
              onClick={() =>
                navigate("/DataPengguna/1/edit")
              }
              className="px-8 py-4 rounded-2xl border bg-white font-bold flex items-center gap-3 hover:bg-slate-50 transition"
            >
              <Pencil size={18} />
              Ubah Data
            </button>

            {/* FREEZE */}
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-4 rounded-2xl bg-red-600 text-white font-bold flex items-center gap-3 hover:bg-red-700 transition"
            >
              <Ban size={18} />
              Bekukan Akun
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-100">
          <table className="w-full">
            {/* HEAD */}
            <thead className="bg-slate-50">
              <tr className="text-xs uppercase text-slate-400 tracking-wider text-left">
                <th className="py-5 px-8">
                  Tanggal
                </th>

                <th>ID Pinjaman</th>

                <th>Jumlah</th>

                <th>Tenor</th>

                <th>Status</th>

                <th></th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              <tr className="border-t border-slate-100">
                <td className="py-6 px-8">
                  12 Aug 2023
                </td>

                <td className="font-semibold">
                  #LN-008241
                </td>

                <td className="font-semibold">
                  Rp 15.000.000
                </td>

                <td>12 Bulan</td>

                <td>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-bold uppercase">
                    Aktif
                  </span>
                </td>

                {/* TITIK 3 */}
                <td>
                  <button
                    onClick={() =>
                      navigate("/DataPengguna/1/edit")
                    }
                    className="hover:bg-slate-100 p-2 rounded-lg transition"
                  >
                    <MoreVertical className="text-slate-500" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-[500px] rounded-[30px] overflow-hidden shadow-2xl">
              {/* TOP */}
              <div className="p-10">
                {/* ICON */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                    <Ban
                      className="text-red-600"
                      size={34}
                    />
                  </div>
                </div>

                {/* TITLE */}
                <h2 className="text-4xl font-bold text-center mb-4">
                  Bekukan Akun Ahmad Setiadi?
                </h2>

                {/* DESC */}
                <p className="text-center text-slate-500 leading-8 mb-8">
                  Pengguna tidak akan bisa login atau
                  mengajukan pinjaman sampai status
                  dipulihkan.
                </p>

                {/* SELECT */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                    Alasan Pembekuan
                  </label>

                  <select className="w-full h-14 rounded-2xl border border-slate-200 px-5 outline-none">
                    <option>
                      Pilih alasan...
                    </option>

                    <option>
                      Pelanggaran Sistem
                    </option>

                    <option>
                      Dokumen Tidak Valid
                    </option>
                  </select>
                </div>
              </div>

              {/* BUTTON */}
              <div className="bg-slate-50 p-6 flex flex-col gap-4">
                <button className="h-14 rounded-2xl bg-red-600 text-white font-bold hover:bg-red-700 transition">
                  Ya, Bekukan Akun
                </button>

                <button
                  onClick={() =>
                    setShowModal(false)
                  }
                  className="h-14 rounded-2xl bg-white border font-bold hover:bg-slate-50 transition"
                >
                  Batalkan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LupaPassword() {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    // Simulasi pengiriman email reset password
    setIsSent(true);
  };

  return (
    <div className="min-h-screen flex bg-[#020617] text-white">
      {/* LEFT SECTION - Konsisten dengan Login */}
      <section className="w-1/2 flex flex-col justify-between p-12">
        <div>
          <h1 className="text-lg font-semibold mb-12 cursor-pointer" onClick={() => navigate("/Login")}>
            Truck Splash
          </h1>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Keamanan <br />
            <span className="text-green-500">Akun</span> Adalah <br />
            Prioritas Kami.
          </h2>

          <p className="text-gray-400 max-w-md">
            Jangan khawatir, kami akan membantu Anda memulihkan akses ke akun UMKM Anda dalam hitungan menit.
          </p>
        </div>

        <img
          src="/Frame.png"
          alt="Ilustrasi Keamanan"
          className="w-full h-[300px] object-cover rounded-2xl opacity-80"
        />
      </section>

      {/* RIGHT SECTION - Form Lupa Password */}
      <section className="w-1/2 flex items-center justify-center bg-[#0F172A]">
        <div className="w-full max-w-md bg-[#111827] p-8 rounded-2xl shadow-lg">
          {!isSent ? (
            <>
              <h2 className="text-3xl font-bold text-center mb-2">Lupa Password?</h2>
              <p className="text-gray-400 text-center mb-8">
                Masukkan email yang terdaftar dan kami akan mengirimkan instruksi untuk mengatur ulang password Anda.
              </p>

              <form onSubmit={handleReset}>
                <div className="mb-6">
                  <label className="text-sm text-gray-300">Alamat Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="user@example.com"
                    className="w-full mt-2 p-3 rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 p-3 rounded-lg font-semibold hover:bg-green-700 transition mb-4 active:scale-[0.98]"
                >
                  Kirim Instruksi Reset →
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              {/* Notifikasi Sukses Terkirim */}
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Email Terkirim!</h2>
              <p className="text-gray-400 mb-8">
                Kami telah mengirimkan tautan reset password ke <br />
                <span className="text-white font-semibold">{email}</span>. Silakan periksa kotak masuk atau folder spam Anda.
              </p>
              <button
                onClick={() => setIsSent(false)}
                className="text-green-400 hover:underline text-sm font-medium"
              >
                Tidak menerima email? Kirim ulang
              </button>
            </div>
          )}

          {/* Navigasi Kembali */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <button
              onClick={() => navigate("/Login")}
              className="text-gray-400 hover:text-white transition text-sm flex items-center justify-center gap-2 mx-auto"
            >
              ← Kembali ke halaman Login
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
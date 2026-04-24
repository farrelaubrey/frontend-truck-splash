import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  // STATE → menyimpan mode login (user / admin)
  const [mode, setMode] = useState("user");

  return (
    // CONTAINER UTAMA
    <div className="min-h-screen flex bg-[#020617] text-white">

      {/* LEFT SECTION */}
      <section className="w-1/2 flex flex-col justify-between p-12">
        
        {/* TEXT */}
        <div>
          <h1 className="text-lg font-semibold mb-12">
            Truck Splash
          </h1>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Pemberdayaan <br />
            <span className="text-green-500">UMKM</span> Melalui <br />
            Koneksi Digital.
          </h2>

          <p className="text-gray-400 max-w-md">
            Bergabunglah dengan ribuan pengusaha di seluruh Indonesia.
          </p>
        </div>

        {/* IMAGE */}
        <img
          src="/Frame.png"
          alt="Ilustrasi UMKM"
          className="w-full h-[300px] object-cover rounded-2xl"
        />
      </section>

      {/* RIGHT SECTION */}
      <section className="w-1/2 flex items-center justify-center bg-[#0F172A]">
        
        {/* CARD LOGIN */}
        <div className="w-full max-w-md bg-[#111827] p-8 rounded-2xl shadow-lg">

          {/* TITLE */}
          <h2 className="text-3xl font-bold text-center mb-2">
            Selamat Datang
          </h2>

          {/* DESKRIPSI DINAMIS */}
          <p className="text-gray-400 text-center mb-6">
            {mode === "user"
              ? "Masuk ke akun Anda untuk mengelola finansial."
              : "Masuk ke akun Admin untuk mengelola sistem."}
          </p>

          {/* TOGGLE MODE */}
          <div className="flex bg-gray-300 rounded-xl p-1 mb-6">
            
            <button
              onClick={() => setMode("user")}
              className={`w-1/2 py-2 rounded-lg font-medium transition ${
                mode === "user"
                  ? "bg-white text-black"
                  : "text-black"
              }`}
            >
              User Login
            </button>

            <button
              onClick={() => setMode("admin")}
              className={`w-1/2 py-2 rounded-lg font-medium transition ${
                mode === "admin"
                  ? "bg-white text-black"
                  : "text-black"
              }`}
            >
              Admin Login
            </button>

          </div>

          {/* INPUT EMAIL */}
          <div className="mb-4">
            <label className="text-sm text-gray-300">
              {mode === "user" ? "Email atau Username" : "Email Admin"}
            </label>

            <input
              type="text"
              placeholder={
                mode === "user"
                  ? "user@example.com"
                  : "admin@example.com"
              }
              className="w-full mt-2 p-3 rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* INPUT PASSWORD */}
          <div className="mb-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Password</span>
              <span className="text-green-400 cursor-pointer">
                Lupa Password?
              </span>
            </div>

            <input
              type="password"
              className="w-full mt-2 p-3 rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* REMEMBER ME */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <input type="checkbox" />
            <span>Ingat saya di perangkat ini</span>
          </div>

          {/* BUTTON LOGIN */}
          <button className="w-full bg-green-600 p-3 rounded-lg font-semibold hover:bg-green-700 transition">
            {mode === "user"
              ? "Masuk Sekarang →"
              : "Masuk sebagai Admin →"}
          </button>

          {/* SOCIAL LOGIN */}
          <div className="text-center text-gray-400 my-4">
            ATAU
          </div>

          <div className="flex gap-4">
            <button className="w-1/2 bg-gray-200 text-black py-2 rounded-lg hover:bg-gray-300">
              Google
            </button>
            <button className="w-1/2 bg-gray-200 text-black py-2 rounded-lg hover:bg-gray-300">
              Facebook
            </button>
          </div>

          {/* FOOTER */}
          {mode === "user" ? (
            <p className="text-center text-gray-400 mt-6 text-sm">
              Belum punya akun?{" "}
              <Link to="/Daftar" className="text-green-400 hover:underline">
                Daftar Sekarang
              </Link>
            </p>
          ) : (
            <p className="text-center text-gray-400 mt-6 text-sm">
              Halaman ini khusus untuk admin
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
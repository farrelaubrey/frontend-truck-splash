import { Link } from "react-router-dom";

export default function Daftar() {
  return (
    <div className="min-h-screen flex bg-[#020617] text-white">

      {/* LEFT SECTION */}
      <section className="w-1/2 flex flex-col justify-between p-12 bg-black">
        {/* TEXT */}
        <div>
          <h1 className="text-lg font-semibold mb-12">
            Truck Splash
          </h1>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Gabung & <span className="text-green-500">Mulai Usaha</span>,<br />
            Anda Sekarang.
          </h2>
          <p className="text-gray-400 max-w-md">
            Akses pendanaan fleksibel untuk UMKM Indonesia.<br />
            Bergabunglah dengan ribuan pengusaha yang telah bertumbuh bersama kami.
          </p>
        </div>
        {/* IMAGE */}
        <div className="flex-grow flex items-end">
          <img
            src="/Entrepreneurs.png"
            alt="Ilustrasi UMKM"
            className="max-w-sm w-full h-auto object-cover rounded-2xl mt-8 shadow-lg"
          />
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="w-1/2 flex items-center justify-center bg-[#0F172A]">
        
        {/* CARD */}
        <div className="w-full max-w-md bg-[#111827] p-8 rounded-2xl shadow-lg">
          
          {/* TITLE */}
          <h2 className="text-3xl font-bold text-center mb-2">
            Daftar Akun
          </h2>

          <p className="text-gray-400 text-center mb-6">
            Buat akun baru dan mulai mengelola finansial Anda.
          </p>

          {/* INPUT NAMA */}
          <div className="mb-4">
            <label className="text-sm text-gray-300">
              Nama Lengkap
            </label>
            <input
              type="text"
              placeholder="Masukkan nama lengkap"
              className="w-full mt-2 p-3 rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* INPUT EMAIL */}
          <div className="mb-4">
            <label className="text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full mt-2 p-3 rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* INPUT PASSWORD */}
          <div className="mb-4">
            <label className="text-sm text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Minimal 8 karakter"
              className="w-full mt-2 p-3 rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* BUTTON */}
          <button className="w-full bg-green-600 p-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Daftar Sekarang →
          </button>

          {/* FOOTER */}
          <p className="text-center text-gray-400 mt-6 text-sm">
            Sudah punya akun?{" "}
            <Link to="/Login" className="text-green-400 hover:underline">
              Masuk
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
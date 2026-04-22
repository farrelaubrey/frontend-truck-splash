function LoginUser() {
  return (
    <div className="min-h-screen flex bg-[#020617] text-white">
      
      {/* LEFT */}
      <div className="w-1/2 flex flex-col justify-between p-12 bg-[#020617]">
        
        {/* Text */}
        <div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Truck Splash</h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Pemberdayaan <br />
            <span className="text-green-500">UMKM</span> Melalui <br />
            Koneksi Digital.
          </h2>

          <p className="text-gray-400 max-w-md leading-relaxed">
            Bergabunglah dengan ribuan pengusaha di seluruh Indonesia yang telah
            mengubah bisnis mereka dengan akses finansial yang lebih cerdas dan transparan.
          </p>
        </div>

        {/* Image */}
        <div className="mt-10">
          <img
            src="/Frame.png"
            alt="UMKM"
            className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/2 flex items-center justify-center bg-[#0F172A]">
        <div className="w-full max-w-md bg-[#111827] p-8 rounded-2xl shadow-xl">
          
          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-2">
            Selamat Datang
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Masuk ke akun Anda untuk mengelola finansial.
          </p>

          {/* Toggle */}
          <div className="flex bg-gray-300 rounded-xl p-1 mb-6">
            <button className="w-1/2 bg-white text-black rounded-lg py-2 font-medium">
              User Login
            </button>
            <button className="w-1/2 text-black py-2 font-medium">
              Admin Login
            </button>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-gray-300">
              Email atau Username
            </label>
            <input
              type="text"
              placeholder="lorem.ipsum@example.com"
              className="w-full mt-2 p-3 rounded-lg bg-gray-200 text-black outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Password</span>
              <span className="text-green-400 cursor-pointer hover:underline">
                Lupa Password?
              </span>
            </div>
            <input
              type="password"
              className="w-full mt-2 p-3 rounded-lg bg-gray-200 text-black outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Remember */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <input type="checkbox" className="accent-green-500" />
            <span>Ingat saya di perangkat ini</span>
          </div>

          {/* Button */}
          <button className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 p-3 rounded-lg font-semibold shadow-md">
            Masuk Sekarang →
          </button>

          {/* Divider */}
          <div className="text-center text-gray-400 my-5 text-sm">
            ATAU
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <button className="w-1/2 bg-gray-200 text-black py-2 rounded-lg hover:bg-gray-300">
              Google
            </button>
            <button className="w-1/2 bg-gray-200 text-black py-2 rounded-lg hover:bg-gray-300">
              Facebook
            </button>
          </div>

          {/* Register */}
          <p className="text-center text-gray-400 mt-6 text-sm">
            Belum punya akun?{" "}
            <span className="text-green-400 cursor-pointer hover:underline">
              Daftar Sekarang
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default LoginUser;
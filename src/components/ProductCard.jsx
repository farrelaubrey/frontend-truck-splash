import { useNavigate } from "react-router-dom";

export const ProductCard = ({ title, category, desc, tenor, bunga, categoryColor }) => {
  const navigate = useNavigate(); // Inisialisasi navigasi

  // Mapping warna kategori tetap dipertahankan
  const colors = {
    kuliner: "bg-[#e8f5e9] text-[#2e7d32]",
    kreatif: "bg-[#e3f2fd] text-[#1565c0]",
    warung: "bg-[#fff3e0] text-[#ef6c00]",
    pasar: "bg-[#f1f8e9] text-[#558b2f]",
    tani: "bg-[#f1f8e9] text-[#558b2f]",
  };

  return (
    /* Kartu utama memiliki efek hover: bayangan, border hijau, dan terangkat */
    <div className="group p-7 bg-white border border-slate-200 rounded-[2rem] hover:border-green-300 hover:shadow-2xl hover:shadow-green-900/5 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer">
      
      <div>
        <div className="flex justify-between items-start mb-4 min-h-[56px]">
          {/* Judul otomatis hijau saat kartu di-hover */}
          <h4 className="font-bold text-lg leading-tight w-2/3 text-[#0f172a] group-hover:text-green-700 transition-colors">
            {title}
          </h4>
          <span className={`text-[9px] px-2.5 py-1 rounded-full font-extrabold uppercase tracking-wider ${colors[categoryColor?.toLowerCase()] || colors.kuliner}`}>
            {category}
          </span>
        </div>
        
        <p className="text-slate-500 text-sm mb-6 leading-relaxed font-medium flex-grow">
          {desc}
        </p>
        
        {/* Box Detail: Tenor & Bunga */}
        <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-slate-50 rounded-2xl border border-transparent group-hover:bg-green-50 group-hover:border-green-100 transition-all">
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Tenor</p>
            <p className="text-sm font-bold text-slate-700">{tenor}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Bunga</p>
            <p className="text-sm font-bold text-green-600">{bunga}</p>
          </div>
        </div>
      </div>

      {/* Tombol Ajukan Sekarang (Outline) */}
      {/* Logika navigasi dipindahkan ke tombol ini */}
      <button 
        onClick={() => navigate("/PengajuanPinjaman")}
        className="w-full bg-white border-2 border-green-600 text-green-600 py-3.5 rounded-2xl font-bold text-sm hover:bg-green-600 hover:text-white transition-all duration-300 active:scale-[0.97]"
      >
        Ajukan Sekarang
      </button>
    </div>
  );
};
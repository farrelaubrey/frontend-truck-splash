import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TampilanUtama from "./pages/TampilanUtama";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar";
import LupaPassword from "./pages/LupaPassword";
import DashboardUser from "./pages/DashboardUser";
import Pinjaman from "./pages/Pinjaman";
import PengajuanPinjaman from "./pages/PengajuanPinjaman";
import PinjamanSaya from "./pages/PinjamanSaya";
import DaftarPinjamanAktif from "./pages/DaftarPinjamanAktif";
import Riwayat from "./pages/Riwayat";
import Pengaturan from "./pages/Pengaturan";
import DashboardAdmin from "./pages/DashboardAdmin";
import DataPengguna from "./pages/DataPengguna";
import DataPenggunaDetail from './pages/DataPenggunaDetail';
import DataPenggunaEdit from './pages/DataPenggunaEdit';
import VerifikasiPembayaran from './pages/VerifikasiPembayaran';
import VerifikasiPengajuan from './pages/VerifikasiPengajuan';
import PengaturanAdmin from './pages/PengaturanAdmin';
function App() {
  return (
    <Router>
      <Routes>
        {/* Rute Publik */}
        <Route path="/" element={<TampilanUtama />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Daftar" element={<Daftar />} />
        <Route path="/LupaPassword" element={<LupaPassword />} />
        <Route path="/PengajuanPinjaman" element={<PengajuanPinjaman />} />
        <Route path="/DaftarPinjamanAktif" element={<DaftarPinjamanAktif />} />
        <Route path="/DataPengguna/1" element={<DataPenggunaDetail />} />
        <Route path="/DataPengguna/1/edit" element={<DataPenggunaEdit />} />

        {/* Rute Dashboard Langsung (Tanpa Nesting/Layout) */}
        <Route path="/DashboardUser" element={<DashboardUser />} />
        <Route path="/Pinjaman" element={<Pinjaman />} />
        <Route path="/PinjamanSaya" element={<PinjamanSaya />} />
        <Route path="/Riwayat" element={<Riwayat />} />
        <Route path="/Pengaturan" element={<Pengaturan />} />
        <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/DataPengguna" element={<DataPengguna />} />
        <Route path="/VerifikasiPembayaran" element={<VerifikasiPembayaran />} />
        <Route path="/VerifikasiPengajuan" element={<VerifikasiPengajuan />} />
        <Route path="/PengaturanAdmin" element={<PengaturanAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
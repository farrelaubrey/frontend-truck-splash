import { BrowserRouter, Routes, Route } from "react-router-dom";
import TampilanUtama from "./pages/TampilanUtama";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar";
import DashboardUser from "./pages/DashboardUser";
import DashboardAdmin from "./pages/DashboardAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/TampilanUtama" element={<TampilanUtama />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Daftar" element={<Daftar />} />
        <Route path="/DashboardUser" element={<DashboardUser />} />
        <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginUser";
import TampilanUtama from "./pages/TampilanUtama";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/TampilanUtama.jsx" element={<TampilanUtama />} />
        <Route path="/LoginUser.jsx" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
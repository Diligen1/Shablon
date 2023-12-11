import { ContactPage } from "../Pages/ContactPage/ContactPage";
import { MainPage } from "../Pages/MainPage/Collect/MainPage";
import { MenuPage } from "../Pages/MenuPage/MenuPage";
import { RegisterPage } from "../Pages/RegisterPage/Collect/RegisterPage";
import { AdminPage } from "../Pages/AdminPage/AdminPage";
import { KorzinaPage } from "../Pages/KorzinaPage/KorzinaPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export function PageRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/korzina" element={<KorzinaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

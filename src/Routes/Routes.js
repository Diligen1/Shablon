import { ContactPage } from "../Pages/ContactPage/Collect/ContactPage";
import { MainPage } from "../Pages/MainPage/Collect/MainPage";
import { MenuPage } from "../Pages/MenuPage/MenuPage";
import { RegisterPage } from "../Pages/RegisterPage/Register";
import { AdminPage } from "../Pages/AdminPage/AdminPage";
import { KorzinaPage } from "../Pages/KorzinaPage/KorzinaPage";
import { AuthorPage } from "../Pages/AuthorPage/Author";
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
        <Route path="/author" element={<AuthorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

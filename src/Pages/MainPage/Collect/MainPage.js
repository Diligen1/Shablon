import style from "./MainPage.module.css";
import { Header } from "../Components/Header/Header";
import { Banner } from "../Components/Banner/Banner";
import { NewProduct } from "../Components/NewProduct/NewProduct";
import { Menu } from "../Components/Menu/Menu";
export function MainPage() {
  return (
    <main>
      <Header />
      <Banner />
      <NewProduct />
      <Menu />
    </main>
  );
}

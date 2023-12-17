import { Banner } from "../../MainPage/Components/Banner/Banner/Banner";
import { Banner2 } from "../../MainPage/Components/Banner/Banner2/Banner2";
import { Banner3 } from "../../MainPage/Components/Banner/Banner3/Banner3";
import { Columns } from "../Components/columns/columns";
import { Header } from "../../MainPage/Components/Header/Header";
import { Contacts } from "../Components/contacts/contacts";
import style from "./ContactPage.module.css";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Footer } from "../../MainPage/Components/Footer/Footer";

export function ContactPage() {
  const banners = [, <Banner2 />, <Banner3 />, <Banner />];

  return (
    <div>
      <Header />
      <Swiper
        className={style.block}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} ${style.pagination}"></span>`;
          },
        }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>{banner}</SwiperSlide>
        ))}
      </Swiper>

      <Columns />
      <Contacts />
      <Footer />
    </div>
  );
}

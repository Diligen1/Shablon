import style from "./MainPage.module.css";
import { useState, useEffect } from "react";
import { Header } from "../Components/Header/Header";
import { Banner } from "../Components/Banner/Banner/Banner";
import { Banner2 } from "../Components/Banner/Banner2/Banner2";
import { Banner3 } from "../Components/Banner/Banner3/Banner3";
import { NewProduct } from "../Components/NewProduct/NewProduct";
import { Menu } from "../Components/Menu/Menu";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export function MainPage() {
  const banners = [<Banner />, <Banner2 />, <Banner3 />];

  return (
    <main>
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

      <NewProduct />
      <Menu />
    </main>
  );
}

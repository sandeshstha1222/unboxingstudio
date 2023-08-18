import React from "react";
import "./herosection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";
import product4 from "../../assets/product4.jpg";
import product5 from "../../assets/product5.jpg";
import product6 from "../../assets/product6.jpg";

const herosection = () => {
  return (
    <div className="herosection">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
      >
        <SwiperSlide>
          <img src={product1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product6} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default herosection;

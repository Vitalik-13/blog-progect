import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import imgOne from "assets/foto-in-slider-one.jpg";
import imgTwo from "assets/foto-in-slider-two.jpg";
import imgThree from "assets/foto-in-slider-three.jpg";
import imgFour from "assets/foto-in-slider-four.jpg";
import imgFive from "assets/foto-in-slider-five.jpg";
import imgSix from "assets/foto-in-slider-six.jpg";
import "./slider.css";

type Props = {};
const SwiperSlider = (props: Props) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={1}
        keyboard={true}
        navigation={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img src={imgOne} alt="" className="foto-in-slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgTwo} alt="" className="foto-in-slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgThree} alt="" className="foto-in-slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgFour} alt="" className="foto-in-slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgFive} alt="" className="foto-in-slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgSix} alt="" className="foto-in-slider" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperSlider;

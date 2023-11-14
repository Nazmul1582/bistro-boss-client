import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <SectionTitle
          subHeading="From 11:00am to 10:00pm"
          heading="Order Online"
        />

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-full" src={slide1} alt="slide image" />
            <h2 className="font-semibold text-center text-4xl -mt-20 text-white uppercase">
              Salads
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={slide2} alt="slide image" />
            <h2 className="font-semibold text-center text-4xl -mt-20 text-white uppercase">
              Pizzas
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={slide3} alt="slide image" />
            <h2 className="font-semibold text-center text-4xl -mt-20 text-white uppercase">
              Soups
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={slide4} alt="slide image" />
            <h2 className="font-semibold text-center text-4xl -mt-20 text-white uppercase">
              desserts
            </h2>
          </SwiperSlide>
          <SwiperSlide className="mb-24">
            <img className="w-full" src={slide5} alt="slide image" />
            <h2 className="font-semibold text-center text-4xl -mt-20 text-white uppercase">
              Salads
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={slide2} alt="slide image" />
            <h2 className="font-semibold text-center text-4xl -mt-20 text-white uppercase">
              Pizzas
            </h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;

import FoodCard from "../../components/FoodCard/FoodCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={pagination}
        modules={[Pagination]}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item._id} className="mb-20">
            <FoodCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OrderTab;

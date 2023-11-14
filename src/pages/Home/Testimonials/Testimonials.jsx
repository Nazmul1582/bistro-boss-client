import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <section>
      <div className="container mx-auto pt-20">
        <SectionTitle
          subHeading="What Our Clients Say"
          heading="Testimonials"
        />
        <div>
          <Swiper
            slidesPerView={1}
            autoplay={true} navigation={true}
            modules={[Navigation, Autoplay]}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center justify-center gap-5">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <p>
                    <FaQuoteLeft className="text-7xl font-bold" />
                  </p>
                  <p className="text-center">{review.details}</p>
                  <h2 className="text-4xl font-semibold text-amber-400">
                    {review.name}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

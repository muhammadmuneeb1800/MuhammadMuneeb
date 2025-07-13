import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { TESTIMONIALS } from "../constants";

const OpenSource = () => {
  return (
    <section id="openSource">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] px-5 pb-10 text-white ss:leading-[80px] leading-[80px]">
        Testimonials
      </h1>
      <section id="testimonials" className="container mx-auto mb-8 mt-5">
        <div className="container px-5 mx-auto flex items-center justify-center">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="flex flex-col items-center justify-between w-[340px] h-[380px] bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-2xl rounded-lg border-2 border-teal-400 p-6 transform transition-transform duration-300 hover:shadow-[0px_0px_25px_rgba(0,255,255,0.7)]">
                  <div className="text-center flex-1 overflow-auto max-h-[300px]">
                    <p className="font-poppins font-normal text-white text-[14px] leading-[18px] mb-4">
                      "{testimonial.feedback}"
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-teal-400"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </section>
  );
};

export default OpenSource;

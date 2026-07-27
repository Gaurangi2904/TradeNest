import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Stock Investor",
    review:
      "TradeNest has completely changed how I invest. The UI is clean, fast and incredibly easy to use.",
  },
  {
    name: "Priya Verma",
    role: "Swing Trader",
    review:
      "The analytics and portfolio dashboard are amazing. Everything feels smooth and professional.",
  },
  {
    name: "Amit Patel",
    role: "Long-term Investor",
    review:
      "Dark mode, performance tracking and modern design make TradeNest my favorite trading platform.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section py-5">
      <div className="container">

        <h2 className="text-center fw-bold mb-3">
          What Our Users Say
        </h2>

        <p
          className="text-center mb-5"
          style={{ color: "var(--secondary-text)" }}
        >
          Trusted by thousands of investors.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3500,
          }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">

                <h3>{item.name}</h3>

                <small>{item.role}</small>

                <p>"{item.review}"</p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Testimonials;
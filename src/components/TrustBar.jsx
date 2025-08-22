import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function TrustBar() {
  const logos = [
    { src: "/ipsum.png", alt: "Logo 1" },
    { src: "/ipsum.png", alt: "Logo 2" },
    { src: "/ipsum.png", alt: "Logo 3" },
    { src: "/ipsum.png", alt: "Logo 4" },
    { src: "/ipsum.png", alt: "Logo 5" },
    { src: "/ipsum.png", alt: "Logo 6" },
  ];

  // duplicate the list so the loop has plenty to scroll
  const items = [...logos, ...logos, ...logos];

  return (
    <section className="py-6 border-y border-slate-200 bg-white/60">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-xs uppercase tracking-wide  font-nunito text-2xl font-bold">
          Trusted by over 20,000 users nationwide
        </p>

        <div className="mt-6">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={"auto"}
            spaceBetween={32}
            loop
            speed={6000} // how fast it moves
            autoplay={{
              delay: 0, // continuous scroll
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            allowTouchMove={false} // remove if you want drag
          >
            {items.map((logo, idx) => (
              <SwiperSlide key={idx} className="!w-auto">
                <div className="h-12 flex items-center justify-center">
                  <img src={logo.src} alt={logo.alt} className="max-h-10 object-contain opacity-80" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

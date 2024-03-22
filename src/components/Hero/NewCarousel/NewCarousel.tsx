import "swiper/css";
import "swiper/css/pagination";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";

import { useState, useEffect, useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { carouselItems } from "@/app/db/data";
import { Swiper as SwiperType } from "swiper";

export const NewCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isFirstRender = useRef(true);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentImageIndex(swiper.realIndex);
  };

  useEffect(() => {
    if (!isFirstRender.current) {
      const tlText = gsap.timeline({ repeat: 0 });
      tlText.from(`#text-${currentImageIndex}`, {
        duration: 0.75,
        x: 150,
        stagger: 0.2,
      });

      gsap.to(`#text-${currentImageIndex}`, {
        duration: 0,
        x: 0,
      });

      const tlBrandDesc = gsap.timeline({ repeat: 0 });
      tlBrandDesc.from(
        `#brand-${currentImageIndex}, #desc-${currentImageIndex}`,
        {
          duration: 0.75,
          x: 150,
          stagger: 0.2,
        }
      );

      gsap.to(`#brand-${currentImageIndex}, #desc-${currentImageIndex}`, {
        duration: 0,
        x: 0,
      });
    } else {
      isFirstRender.current = false;
    }
  }, [currentImageIndex]);

  return (
    <section className={styles.carousel}>
      <Swiper
        className="grid place-items-center h-screen"
        effect="none"
        slidesPerView={1}
        allowTouchMove={false}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Autoplay]}
        onSlideChange={handleSlideChange}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              className={`${styles.content} ${
                currentImageIndex === index
                  ? styles["carousel-transition"]
                  : " "
              }`}
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${item.image})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            >
              <article id={`brand-${index}`} className="absolute z-10 top-1/3">
                <p className="uppercase tracking-[15px] text-primary font-bold text-4xl">
                  {item.brand}
                </p>
              </article>
              <span
                id={`text-${index}`}
                className={`${styles["large-text"]} ${styles.before}`}
              >
                {item.name}
              </span>
              <figure className={styles["image-wrap"]}>
                <div className="absolute bg-black bg-opacity-40 left-0 top-0 w-full h-full z-50" />
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="w-full h-full object-cover"
                />
              </figure>
              <span
                id={`text-${index}`}
                className={`${styles["large-text"]} ${styles.after}`}
              >
                {item.name}
              </span>
              <article
                id={`desc-${index}`}
                className="absolute w-1/2 top-[55%] z-10"
              >
                <p className="desc text-2xl text-center font-semibold text-gray-200">
                  {item.desc}
                </p>
              </article>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

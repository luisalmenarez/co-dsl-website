import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { gsap } from "gsap";

export const NewCarousel = () => {
  return (
    <section className={styles.carousel}>
      <Swiper
        effect="none"
        slidesPerView={1}
        allowTouchMove={false}
        loop={true}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div className={styles.content}>
            <span
              className={`${styles["large-text"]} ${styles.before} ${styles.recreation}`}
            >
              ADAPTABILIDAD
            </span>

            <figure className={styles["image-wrap"]}>
              <div className="absolute bg-black bg-opacity-30 left-0 top-0 w-full h-full z-50" />
              <Image
                src="/images/1.jpg"
                alt="Imagen"
                layout="fill"
                objectFit="cover"
              />
            </figure>
            <span className={`${styles["large-text"]} ${styles.after}`}>
              ADAPTABILIDAD
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.content}>
            <span
              className={`${styles["large-text"]} ${styles.before} ${styles.recreation}`}
            >
              EFICIENCIA
            </span>
            <figure className={styles["image-wrap"]}>
              <Image
                src="/images/2.jpg"
                alt="Imagen"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </figure>
            <span className={`${styles["large-text"]} ${styles.after}`}>
              EFICIENCIA
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

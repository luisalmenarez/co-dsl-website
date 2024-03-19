"use client";
import { carouselItems } from "@/app/db/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      allowTouchMove={false}
      effect={"cards"}
      loop={true}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Autoplay, EffectCards]}
    >
      {carouselItems.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="w-full h-screen relative">
            <div className="h-full">
              <article className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </article>
              <div className="absolute bg-black bg-opacity-25 left-0 top-0 w-full h-full" />
              <article className="space-y-4 absolute left-[10%] top-[30%] w-[500px] max-w-[80%] z-10">
                <p
                  className={cn(
                    "uppercase tracking-[10px] text-white font-semibold text-3xl"
                  )}
                >
                  {item.brand}
                </p>
                <h2 className={"text-5xl lg:6xl m-0 text-primary font-bold"}>
                  {item.name}
                </h2>
                <p className="text-gray-200 font-semibold">{item.desc}</p>
              </article>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

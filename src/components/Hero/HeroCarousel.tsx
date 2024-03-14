"use client";
import { useState } from "react";
import { ItemSlider } from "@/components/ui/ItemSlider";
import { Arrows } from "@/components/shared/Arrows";
import { SliderThumbnail } from "@/components/ui/SliderThumbnail";
import { carouselItems, thumbnails } from "@/app/db/data";

export const HeroCarousel = () => {
  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

  const onPrev = () => {
    setItemActive((itemActive - 1 + countItems) % countItems || countItems);
  };

  const onNext = () => {
    setItemActive((itemActive + 1) % countItems || countItems);
  };

  return (
    <>
      <ul>
        {carouselItems.map((item) => (
          <ItemSlider
            key={item.id}
            itemActive={itemActive}
            id={item.id}
            image={item.image}
            brand={item.brand}
            name={item.name}
            desc={item.desc}
          />
        ))}
      </ul>
      <Arrows onClickNext={() => onNext()} onClickPrev={() => onPrev()} />
      <ul className="absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full h-[250px] px-14 overflow-y-hidden overflow-x-auto">
        {thumbnails.map((thumbnail) => (
          <SliderThumbnail
            key={thumbnail.id}
            itemActive={itemActive}
            image={thumbnail.image}
            id={thumbnail.id}
            onClick={() => setItemActive(thumbnail.id)}
          />
        ))}
      </ul>
    </>
  );
};

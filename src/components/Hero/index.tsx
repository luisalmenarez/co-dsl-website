import { Carousel } from "./Carousel";
import { HeroCarousel } from "./HeroCarousel";
import { NewCarousel } from "./NewCarousel/NewCarousel";

export const Hero = () => {
  return (
    <>
      <NewCarousel />
      {/* <div className="w-full relative">
        <HeroCarousel />
        <Carousel />
      </div> */}
    </>
  );
};

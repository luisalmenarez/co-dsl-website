"use client";
import { Arrows } from "@/components/shared/Arrows";
import { ItemSlider } from "@/components/ui/ItemSlider";
import { SliderThumbail } from "@/components/ui/SliderThumbail";
import { useState } from "react";

export default function Home() {
  const [itemActive, setItemActive] = useState<number>(2);
  const countItems = 5;

  const onPrev = () => {
    setItemActive(itemActive - 1);
    if (itemActive === 1) {
      setItemActive(countItems);
    }
  };

  const onNext = () => {
    setItemActive(itemActive + 1);
    if (itemActive >= countItems) {
      setItemActive(1);
    }
  };

  return (
    <div className="h-screen relative">
      <ul>
        <ItemSlider
          itemActive={itemActive}
          id={1}
          image="/images/1.jpg"
          brand="SOMOS"
          name="ADAPTABILIDAD"
          desc="Otorgamos una alta disponibilidad en vehículos, CO-DSL es la solución
          porque nos permite tener una disponibilidad mecánica de 96% y así
          ofrecer un servicio competitivo."
        />
        <ItemSlider
          itemActive={itemActive}
          id={2}
          image="/images/2.jpg"
          brand="SOMOS"
          name="EFICIENCIA"
          desc="Aenean lacus tellus, semper id sollicitudin ac, imperdiet eu purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sit amet euismod eros."
        />
        <ItemSlider
          itemActive={itemActive}
          id={3}
          image="/images/3.jpg"
          brand="SOMOS"
          name="PRÁCTICA"
          desc="Donec ut nunc metus. Ut at massa ut enim commodo congue id vel urna. Morbi turpis quam, feugiat at scelerisque id, fermentum id quam."
        />
        <ItemSlider
          itemActive={itemActive}
          id={4}
          image="/images/4.jpg"
          brand="SOMOS"
          name="SOLUCIONES"
          desc="Donec ut nunc metus. Ut at massa ut enim commodo congue id vel urna. Morbi turpis quam, feugiat at scelerisque id, fermentum id quam."
        />
        <ItemSlider
          itemActive={itemActive}
          id={5}
          image="/images/5.jpg"
          brand="SOMOS"
          name="LOGISTICA"
          desc="Donec ut nunc metus. Ut at massa ut enim commodo congue id vel urna. Morbi turpis quam, feugiat at scelerisque id, fermentum id quam."
        />
      </ul>
      <Arrows onClickNext={() => onNext()} onClickPrev={() => onPrev()} />
      <ul className="absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full h-[250px] px-14 overflow-y-hidden overflow-x-auto">
        <SliderThumbail
          itemActive={itemActive}
          image="/images/1.jpg"
          id={1}
          name="ADAPTABILIDAD"
          onClick={() => setItemActive(1)}
        />
        <SliderThumbail
          itemActive={itemActive}
          image="/images/2.jpg"
          id={2}
          name="LOGISTICA"
          onClick={() => setItemActive(2)}
        />
        <SliderThumbail
          itemActive={itemActive}
          image="/images/3.jpg"
          id={3}
          name="SOLUCIONES"
          onClick={() => setItemActive(3)}
        />
        <SliderThumbail
          itemActive={itemActive}
          image="/images/4.jpg"
          id={4}
          name="PRÁCTICA"
          onClick={() => setItemActive(4)}
        />
        <SliderThumbail
          itemActive={itemActive}
          image="/images/5.jpg"
          id={5}
          name="EFICIENCIA"
          onClick={() => setItemActive(5)}
        />
      </ul>
    </div>
  );
}

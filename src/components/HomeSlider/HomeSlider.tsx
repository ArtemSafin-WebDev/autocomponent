"use client";

import { HomeSlide } from "@/types/api";
import styles from "./homeSlider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
import SliderPrevButton from "../SliderPrevButton/SliderPrevButton";

import SliderNextButton from "../SlideNextButton/SliderNextButton";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface HomeSliderProps {
  slides: HomeSlide[];
}

export default function HomeSlider({ slides }: HomeSliderProps) {
  if (!(slides && slides.length)) return null;
  return (
    <div className={styles.homeSlider}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation, Pagination, EffectFade]}
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.card}>
              <div className={styles.textContent}>
                <h3 className={styles.title}>{slide.title}</h3>
                {slide.subtitle ? (
                  <div className={styles.subtitle}>{slide.subtitle}</div>
                ) : null}
                {slide.desc ? (
                  <div className={styles.desc}>{slide.desc}</div>
                ) : null}
              </div>
              <Image
                src={slide.src}
                alt=""
                className={styles.image}
                width={400}
                height={400}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.navigation}>
          <SliderPrevButton />
          <SliderNextButton />
        </div>
      </Swiper>
    </div>
  );
}

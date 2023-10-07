"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styles from "./today.module.scss";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import SliderPrevButton from "../SliderPrevButton/SliderPrevButton";
import SliderNextButton from "../SlideNextButton/SliderNextButton";

interface TodayProps {
  heading: string;
  items?: Array<{
    id: number;
    amount: string | number;
    text: string;
  }>;
  slides?: Array<{
    id: number;
    src: string;
  }>;
}

export default function Today({ heading, items, slides }: TodayProps) {
  console.log("Slides", slides);
  return (
    <div className={styles.today}>
      <h2 className={styles.todayHeading}>{heading}</h2>
      {items?.length ? (
        <ul className={styles.todayNumbersList}>
          {items.map((item) => (
            <li className={styles.todayNumberListItem} key={item.id}>
              <div className={styles.todayNumbersCard}>
                <div className={styles.todayNumbersCardAmount}>
                  {item.amount}
                </div>
                <div className={styles.todayNumbersCardText}>{item.text}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {slides?.length ? (
        <div className={styles.slider}>
          <Swiper
            spaceBetween={35}
            slidesPerView={2}
            modules={[Navigation]}
            effect={"fade"}
            className={styles.sliderContainer}
            loop
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className={styles.sliderCard}>
                  <Image
                    src={slide.src}
                    alt=""
                    className={styles.sliderCardImage}
                    fill
                  />
                </div>
              </SwiperSlide>
            ))}
            <div className={styles.prev}>
              <SliderPrevButton />
            </div>
            <div className={styles.next}>
              <SliderNextButton />
            </div>
          </Swiper>
        </div>
      ) : null}
    </div>
  );
}

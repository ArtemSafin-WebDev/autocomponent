import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import styles from "./sliderPrevButton.module.scss";
import sliderArrowLeft from "@/assets/images/slider-arrow-left.svg";

import { useSwiper } from "swiper/react";

export default function SliderPrevButton() {
  const swiper = useSwiper();

  return (
    <button className={styles.btn} onClick={() => swiper.slidePrev()}>
      <EmbedSVG src={sliderArrowLeft.src} />
    </button>
  );
}

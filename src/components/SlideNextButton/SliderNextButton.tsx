import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import styles from "./slideNextButton.module.scss";
import sliderArrowLeft from "@/assets/images/slider-arrow-right.svg";

import { useSwiper } from "swiper/react";

export default function SliderNextButton() {
  const swiper = useSwiper();

  return (
    <button className={styles.btn} onClick={() => swiper.slideNext()}>
      <EmbedSVG src={sliderArrowLeft.src} />
    </button>
  );
}

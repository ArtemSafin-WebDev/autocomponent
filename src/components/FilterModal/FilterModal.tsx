"use client"

import {Dispatch, SetStateAction, useEffect, useState} from "react";
import styles from "./filterModal.module.scss"

import {AnimatePresence, motion} from "framer-motion";
import cross from "@/assets/images/cross.svg"
import Image from "next/image";
import FilterModalPrice from "@/components/FilterModalPrice/FilterModalPrice";
import FilterModalManuf from "@/components/FilterModalManuf/FilterModalManuf";
import FilterModalCategory from "@/components/FilterModalCategory/FilterModalCategory";

interface IFilterModal {
  isActive: boolean;
  closeModal: Dispatch<SetStateAction<boolean>>;
}
export default function FilterModal({isActive, closeModal}: IFilterModal) {
  const [priceVal, setPriceVal] = useState<number>(0)
  const [markupVal, setMarkupVal] = useState<number>(0)

  return (
    <AnimatePresence>
      {isActive &&
        <motion.div
          onClick={(evt) => evt.stopPropagation()}
          className={styles.modalContent}
          initial={{x: -500}}
          animate={{x: 0}}
          transition={{type: "spring", bounce: 0.1, duration: 1}}
          exit={{x: -500}}
        >
          <div className={styles.modalContent__container}>
            <button onClick={() => closeModal(false)}>
              <Image src={cross} alt="closeIcon" className={styles.modalContent__closeBtn}/>
            </button>
              <FilterModalPrice
                priceVal={priceVal}
                setPriceVal={setPriceVal}
                markupVal={markupVal}
                setMarkupVal={setMarkupVal}
              />
              <FilterModalManuf/>
              <FilterModalCategory/>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
}
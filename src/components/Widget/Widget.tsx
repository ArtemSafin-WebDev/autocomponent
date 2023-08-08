import styles from "./widget.module.scss"
import arrowDown from "@/assets/images/arrow-down.svg"
import Image from "next/image";
import {useState, useRef, useCallback} from "react";
import {AnimatePresence, motion} from "framer-motion";

interface IWidget {
  title?: string;
  widgetData?: any;
  field: string;
}

export default function Widget({title, widgetData, field}: IWidget) {
  const [crnValue, setCrnValue] = useState<string>("")
  const [toggle, setToggle] = useState<boolean>(false)
  const changeState = useCallback(() => setToggle(toggle => !toggle), [setToggle])


  console.log(widgetData)
  return (
    <div className={styles.widget}>
      <div className={styles.widget__block}>
        <h5 className={styles.widget__title}>{title}</h5>
        <button className={styles.widget__btn} onClick={changeState}>
          <span className={styles.widget__text}></span>
          <Image
            className={styles.widget__image}
            src={arrowDown}
            alt={"icon"}
            width={8}
            height={8}></Image >
        </button>
      </div>
      <AnimatePresence>
        {toggle && <motion.div
          className={styles.widget__dropdown}
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 20}}
        >
          <div className={styles.widget__dropDownBlock}>
            <button onClick={() => setCrnValue("")}></button>
          </div>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}
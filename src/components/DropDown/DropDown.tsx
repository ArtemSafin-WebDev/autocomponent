"use client"
import styles from "./dropDown.module.scss"
import Image from "next/image";
import arrowDown from "@/assets/images/arrow-down.svg";
import {useEffect, useState, useRef, ChangeEvent} from "react";
import {AnimatePresence, motion} from "framer-motion";

interface IDropDown {
  dropDownValues: string[] | number[];
  activeIndexValue: number;
  buttonText?: string;
  buttonStyle?: {[keyof: string]: string};
  dropDownStyle?: {[keyof: string]: string};
}

const dropDownAnimation = {
  open: {
    y: 0,
    opacity: 1,
    zIndex: 25,
    display: "flex",
    transitionend: {
      display: "none"
    }
  },
  closed: {
    y: 20,
    opacity: 0,
    zIndex: 25,
    transitionend: {
      display: "none"
    }
  },
}

export default function DropDown({dropDownValues, activeIndexValue, buttonText, buttonStyle, dropDownStyle, }: IDropDown) {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [dropDownValue, setDropDownValue] = useState<string | number>("")
  const dropDownBlockRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    dropDownValues?.map((dropDownValue: string | number, index: number) => {
      if(activeIndexValue === index) {
        setDropDownValue(dropDownValue)
      } else {
        setDropDownValue(dropDownValues[0])
      }
    })
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropDownBlockRef.current && !dropDownBlockRef.current.contains(event.target)) {
        setIsActive(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [setIsActive])

  return (
    <div className={styles.dropDown} ref={dropDownBlockRef}>
      <button style={buttonStyle} className={styles.dropDown__button} onClick={() => setIsActive((prevVal: boolean) => !prevVal)}>
        {buttonText} {dropDownValue}
        <Image src={arrowDown} alt={"icon"} className={isActive ? styles.dropDown__buttonIcon_active : styles.dropDown__buttonIcon}/>
      </button>
      <AnimatePresence>
        <motion.ul
          style={dropDownStyle}
          transition={{
            duration: .2,
            stiffness: 1000
          }}
          className={styles.dropDown__block}
          variants={dropDownAnimation}
          initial={{
            y: 20,
            opacity: 0,
            zIndex: 25,
            onTransitionEnd: {
              // @ts-ignore
              display: "none"
            }
          }}
          animate={isActive ? {
            y: 0,
            opacity: 1,
            zIndex: 25,
            display: "flex"
          } : {
            y: 20,
            opacity: 0,
            zIndex: 25,
            transitionEnd: {
              display: "none"
            }
          }}
        >
          {dropDownValues?.map((buttonValue: string | number, index: number) => (
            <li key={index}>
              <button
                className={dropDownValue === buttonValue ? styles.dropDown__buttonValue_active : styles.dropDown__buttonValue}
                onClick={() => setDropDownValue(buttonValue)}
              >{buttonValue}</button>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  )
}
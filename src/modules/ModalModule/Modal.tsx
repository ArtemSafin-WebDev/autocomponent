"use client"
import styles from "./Modal.module.scss"
import {ReactNode, useState, useRef, useEffect} from "react";
import {createPortal} from "react-dom";
import {motion, AnimatePresence} from "framer-motion";

interface IModalModule {
  isOpen?: boolean;
  children: ReactNode
}

export default function ModalModule({isOpen = false, children}: IModalModule) {
  const ref = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState<boolean>(isOpen)

  const handlerClick = () => setIsActive((prev: boolean) => !prev)
  const keyHandler = (evt: KeyboardEvent) => evt.code === "Escape" && setIsActive(false)

  useEffect(() => {
    window.addEventListener("keydown", keyHandler)
    return (() => window.removeEventListener("keydown", keyHandler))
  }, [keyHandler])

  return (
    <>
      {createPortal(
        <AnimatePresence>
          {isActive && (
            <motion.div
              className={styles.modal}
              onClick={handlerClick}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              ref={ref}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body )}
    </>
  )
}
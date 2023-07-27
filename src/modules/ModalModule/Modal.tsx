import styles from "./Modal.module.scss"
import {ReactNode, useState, useRef, useEffect, useLayoutEffect} from "react";
import {createPortal} from "react-dom";
import {motion, AnimatePresence} from "framer-motion";
import {useModalStore} from "@/store/useModalStore";

interface IModalModule {
  isOpen?: boolean;
  children: ReactNode;
  handlerClick: (payload: boolean) => void;
}

export default function ModalModule({isOpen, handlerClick, children}: IModalModule) {
  const [mounted, setMounted] = useState<boolean>(false)

  const keyHandlerClose = (evt: KeyboardEvent): void => {
    if(evt.key === "Escape") {
      handlerClick(false)
    }
  }
  useEffect(() => {
    setMounted(true)
  }, [mounted])

  useEffect(() => {
    window.addEventListener("keydown", keyHandlerClose)
    return (() => window.removeEventListener("keydown", keyHandlerClose))
  }, [keyHandlerClose])

  return (
    <>
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.modal}
              onClick={() => handlerClick(false)}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body )}
    </>
  )
}
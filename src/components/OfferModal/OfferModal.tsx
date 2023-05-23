import styles from "./offerModal.module.scss";
import cross from "@/assets/images/cross.svg";
import { useCallback, useEffect, useRef } from "react";
import useOnClickOutside from "@/hooks/useOutsideClick";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollbarWidth } from "@/hooks/useScrollbarWidth";

interface OfferModalProps {
  content: string;
  closeHandler: () => void;
  open: boolean;
  title: string;
}

export default function OfferModal({
  content,
  closeHandler,
  open,
  title,
}: OfferModalProps) {
  const sbw = useScrollbarWidth();
  const ref = useRef<HTMLDivElement>(null);
  const innerModalRef = useRef<HTMLDivElement>(null);
  const outsideClickHandler = useCallback(() => closeHandler(), []);
  useOnClickOutside(innerModalRef, outsideClickHandler);
  useEffect(() => {
    if (open) {
      document.body.classList.add(styles.modalOpen);
      document.body.style.paddingRight = sbw + "px";
      if (ref.current) {
        ref.current.style.paddingRight = sbw + "px";
      }
    } else {
      document.body.classList.remove(styles.modalOpen);
      document.body.style.paddingRight = "";
      if (ref.current) {
        ref.current.style.paddingRight = "";
      }
    }
    return () => {
      document.body.classList.remove(styles.modalOpen);
      document.body.style.paddingRight = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          ref={ref}
        >
          <div className={styles.modalInner} ref={innerModalRef}>
            <button
              className={styles.modalCloseBtn}
              onClick={() => closeHandler()}
              type="button"
            >
              <EmbedSVG src={cross.src} />
            </button>
            <h3 className={styles.heading}>{title}</h3>
            <div className={styles.scrollWrapper}>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              ></div>
            </div>
            <button
              className={styles.okBtn}
              onClick={() => closeHandler()}
              type="button"
            >
              Ок
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

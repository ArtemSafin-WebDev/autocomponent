import styles from "./returnModal.module.scss";
import useOnClickOutside from "@/hooks/useOutsideClick";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import { AnimatePresence, motion } from "framer-motion";

import cross from "@/assets/images/cross.svg";
import arrowDown from "@/assets/images/arrow-down-fixed.svg";

interface ReturnModalProps {
  closeHandler: () => void;
  open: boolean;
}

interface ReturnModalCardProps {
  title: string;
  amount: number;
  code: string;
  brand: string;
}

const returnItems = [
  {
    title:
      "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
    code: "12961llecob2",
    brand: "Kolbenschmidt",
    amount: 1,
  },
  {
    title:
      "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
    code: "12961llecob2",
    brand: "Kolbenschmidt",
    amount: 1,
  },
  {
    title:
      "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
    code: "12961llecob2",
    brand: "Kolbenschmidt",
    amount: 1,
  },
  {
    title:
      "Лампа 12V 5W (номер, габариты) б/цок. (W5W / W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт",
    code: "12961llecob2",
    brand: "Kolbenschmidt",
    amount: 1,
  },
];

function ReturnModalCard({ title, amount, code, brand }: ReturnModalCardProps) {
  const [comment, setComment] = useState("");
  const [count, setCount] = useState<number>(1);

  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const outsideClickHandler = useCallback(() => setToggle(false), []);
  useOnClickOutside(ref, outsideClickHandler);

  const [reason, setReason] = useState("");

  useEffect(() => {
    if (amount && !count) {
      setCount(amount);
    }
  }, [amount]);

  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.brand}>
        {brand}
        <br />
        {code}
      </div>
      <div className={styles.counter}>
        <input className={styles.counterInput} value={count} readOnly />
        <div className={styles.counterButtons}>
          <button
            className={styles.btnUp}
            onClick={() => {
              setCount((count) => ++count);
            }}
          >
            <EmbedSVG src={arrowDown.src} />
          </button>
          <button
            className={styles.btnDown}
            onClick={() => {
              if (count > 1) {
                setCount((count) => --count);
              }
            }}
            disabled={count === 1}
          >
            <EmbedSVG src={arrowDown.src} />
          </button>
        </div>
      </div>
      <div className={styles.reason} ref={ref}>
        <button
          className={`${styles.btn} ${toggle ? styles.btnActive : ""}`}
          onClick={() => setToggle((toggle) => !toggle)}
          type="button"
        >
          <span className={styles.btnText}>
            {reason ? reason : "Укажите причину возврата"}
          </span>
          <EmbedSVG src={arrowDown.src} />
        </button>
        <AnimatePresence>
          {toggle && (
            <motion.div
              className={styles.dropdown}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={styles.dropdownInner}>
                <button
                  className={styles.dropdownBtn}
                  type="button"
                  key="Причина 1"
                  onClick={() => {
                    setReason("Причина 1");
                    setToggle(false);
                  }}
                >
                  Причина 1
                </button>
                <button
                  className={styles.dropdownBtn}
                  type="button"
                  key="Причина 2"
                  onClick={() => {
                    setReason("Причина 2");
                    setToggle(false);
                  }}
                >
                  Причина 1
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          placeholder="Комментарий"
          onChange={(event) => setComment(event.target.value)}
          value={comment}
        />
      </div>
    </div>
  );
}

export default function ReturnModal({ closeHandler, open }: ReturnModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerModalRef = useRef<HTMLDivElement>(null);
  const outsideClickHandler = useCallback(() => closeHandler(), []);
  useOnClickOutside(innerModalRef, outsideClickHandler);

  useEffect(() => {
    if (open) {
      document.body.classList.add(styles.modalOpen);
    } else {
      document.body.classList.remove(styles.modalOpen);
    }
    return () => {
      document.body.classList.remove(styles.modalOpen);
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
            >
              <EmbedSVG src={cross.src} />
            </button>
            <h3 className={styles.heading}>Укажите причину возврата</h3>
            <ul className={styles.list}>
              {returnItems.map((item, itemIndex) => (
                <li className={styles.listItem} key={itemIndex}>
                  <ReturnModalCard {...item} />
                </li>
              ))}
            </ul>
            <div className={styles.message}>
              Для товара «Лампа 12V 5W (номер, габариты) б/цок. (W5W /
              W2,1*9,5d) (PНILIPS) LongLife Eco Vision, 2шт» недоступна
              выбранная причина возврата. Обратитесь к менеджеру.
            </div>
            <div className={styles.controls}>
              <div className={styles.infoItem}>
                <div className={styles.key}>Общее количество:</div>
                <div className={styles.value}>8 шт</div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.key}>Сумма возврата:</div>
                <div className={styles.value}>122 973 ₽</div>
              </div>
              <button className={styles.submit}>Оформить возврат</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

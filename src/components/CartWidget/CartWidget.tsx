"use client";

import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import styles from "./cartWidget.module.scss";
import cartIcon from "@/assets/images/cart.svg";
import trash from "@/assets/images/trash.svg";
import useOnClickOutside from "@/hooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";

export default function CartWidget() {
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const outsideClickHandler = useCallback(() => setToggle(false), []);

  useOnClickOutside(ref, outsideClickHandler);
  return (
    <div className={styles.cartWidget} ref={ref}>
      <button
        className={styles.btn}
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <EmbedSVG src={cartIcon.src} />1 289 867 ₽
      </button>
      <AnimatePresence>
        {toggle && (
          <motion.div
            className={styles.dropdown}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className={styles.dropdownInner}>
              <div className={styles.scrollWrapper}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <div className={styles.card}>
                      <div className={styles.title}>
                        Электродвигатель стеклоочистителя ВАЗ-2123, 1118,
                        2170-2190 передний н/о
                      </div>
                      <div className={styles.amount}>1 шт</div>
                      <div className={styles.price}>234 941 ₽</div>
                      <button className={styles.delete}>
                        <EmbedSVG src={trash.src} />
                      </button>
                    </div>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.card}>
                      <div className={styles.title}>
                        Электродвигатель стеклоочистителя ВАЗ-2123, 1118,
                        2170-2190 передний н/о
                      </div>
                      <div className={styles.amount}>1 шт</div>
                      <div className={styles.price}>234 941 ₽</div>
                      <button className={styles.delete}>
                        <EmbedSVG src={trash.src} />
                      </button>
                    </div>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.card}>
                      <div className={styles.title}>
                        Электродвигатель стеклоочистителя ВАЗ-2123, 1118,
                        2170-2190 передний н/о
                      </div>
                      <div className={styles.amount}>1 шт</div>
                      <div className={styles.price}>234 941 ₽</div>
                      <button className={styles.delete}>
                        <EmbedSVG src={trash.src} />
                      </button>
                    </div>
                  </li>
                  <li className={styles.listItem}>
                    <div className={styles.card}>
                      <div className={styles.title}>
                        Электродвигатель стеклоочистителя ВАЗ-2123, 1118,
                        2170-2190 передний н/о
                      </div>
                      <div className={styles.amount}>1 шт</div>
                      <div className={styles.price}>234 941 ₽</div>
                      <button className={styles.delete}>
                        <EmbedSVG src={trash.src} />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.bottomRow}>
                <div className={styles.totalWrapper}>
                  <div className={styles.productCount}>12 товаров</div>
                  <div className={styles.total}>На сумму: 1 244 882 ₽</div>
                </div>
                <button className={styles.goToCart}>Перейти в корзину</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

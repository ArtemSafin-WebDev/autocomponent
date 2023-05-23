import Link from "next/link";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import styles from "./headerDropdown.module.scss";
import arrowDown from "@/assets/images/arrow-down.svg";
import { useCallback, useRef, useState } from "react";
import useOnClickOutside from "@/hooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";

interface DropdownItem {
  id: number;
  href: string;
  title: string;
}

interface HeaderDropdownProps {
  title: string;
  items: DropdownItem[];
}

export default function HeaderDropdown({ items, title }: HeaderDropdownProps) {
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const outsideClickHandler = useCallback(() => setToggle(false), []);
  useOnClickOutside(ref, outsideClickHandler);

  if (!(items && items.length)) return null;
  return (
    <div className={styles.headerDropdown} ref={ref}>
      <button
        className={styles.btn}
        onClick={() => setToggle((toggle) => !toggle)}
      >
        {title}
        <EmbedSVG src={arrowDown.src} />
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
              {items.map((item) => (
                <Link
                  href={item.href}
                  className={styles.link}
                  onClick={() => setToggle(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

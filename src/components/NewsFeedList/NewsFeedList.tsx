import { NewsFeedCard as NewsFeedCardType } from "@/types/api";
import styles from "./newsFeedList.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import NewsFeedCard from "../NewsFeedCard/NewsFeedCard";

interface NewsFeedListProps {
  items: NewsFeedCardType[];
}

export default function NewsFeedList({ items }: NewsFeedListProps) {
  return (
    <motion.ul className={styles.list}>
      <AnimatePresence mode="popLayout" initial={false}>
        {items.map((item) => (
          <motion.li
            className={styles.listItem}
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NewsFeedCard card={item} />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}

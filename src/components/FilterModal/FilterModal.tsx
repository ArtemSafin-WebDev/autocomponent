import styles from "./filterModal.module.scss"
import {AnimatePresence, motion} from "framer-motion";

interface IFilterModal {
  isActive: boolean;
}

export default function FilterModal({isActive}: IFilterModal) {
  console.log(isActive)
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

        </motion.div>
      }
    </AnimatePresence>
  )
}
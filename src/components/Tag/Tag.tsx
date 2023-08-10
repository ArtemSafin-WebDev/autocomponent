"use client"

import styles from "./tag.module.scss"
import Image from "next/image";
import closeIcon from "@/assets/images/close.svg"
import {ITag} from "@/components/Tag/types";

export default function Tag({count, text, isCounter, handleClick}: ITag) {
  return (
    <>
      {(isCounter && count) ?
      <span className={styles.tag}>
        {count !== 1 ? <span>{count} категории</span> : <span>1 категория</span>}
        <button>
          <Image src={closeIcon} alt="icon" className={styles.tag__image}/>
        </button>
      </span> : null}
      {(count && !isCounter) ?
        <span className={styles.tag}>
        <span>{text}</span>
        <button onClick={handleClick}>
          <Image src={closeIcon} alt="icon" className={styles.tag__image}/>
        </button>
      </span> : null
      }
    </>
  );
};

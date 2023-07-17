"use client";

import { useState } from "react";
import InfoIcon from "../../icons/Info";
import styles from "./info.module.scss";
import InfoModal from "../InfoModal/InfoModal";

export default function Info() {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <>
      <button
        className={styles.info}
        type="button"
        onClick={() => setModalToggle((toggle) => !toggle)}
      >
        <InfoIcon />
      </button>
      <InfoModal
        open={modalToggle}
        closeHandler={() => {
          setModalToggle(false);
        }}
      />
    </>
  );
}

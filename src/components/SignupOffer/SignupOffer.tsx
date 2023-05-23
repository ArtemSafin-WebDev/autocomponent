"use client";

import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import styles from "./signupOffer.module.scss";
import checkmark from "@/assets/images/checkmark.svg";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { SignupFormData } from "../Signup/Signup";
import { useState } from "react";
import OfferModal from "../OfferModal/OfferModal";
import content from "./content";

interface SignupOfferProps {
  label: Path<SignupFormData>;
  register: UseFormRegister<SignupFormData>;
  errors: FieldErrors<SignupFormData>;
}

export default function SignupOffer({
  label,
  register,
  errors,
}: SignupOfferProps) {
  const [modalToggle, setModalToggle] = useState(false);
  return (
    <div className={styles.offer}>
      <label className={styles.checkbox}>
        <input type="checkbox" className={styles.input} {...register(label)} />
        <span className={styles.checkmark}>
          <EmbedSVG src={checkmark.src} />
        </span>
        <span className={styles.checkboxText}>
          С{" "}
          <button type="button" onClick={() => setModalToggle(true)}>
            договором оферты
          </button>{" "}
          ознакомлен и согласен
        </span>
      </label>
      {errors[label]?.message && (
        <span className={styles.validationError}>{errors[label]?.message}</span>
      )}
      <OfferModal
        title="Регистрация"
        content={content}
        open={modalToggle}
        closeHandler={() => {
          setModalToggle(false);
        }}
      />
    </div>
  );
}

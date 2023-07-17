"use client";

import styles from "./loginModal.module.scss";
import useOnClickOutside from "@/hooks/useOutsideClick";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import { AnimatePresence, motion } from "framer-motion";

import cross from "@/assets/images/cross.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPortal } from "react-dom";

interface LoginModalProps {
  onRememberClick: () => void;
  closeHandler: () => void;
  open: boolean;
}

export default function LoginModal({
  onRememberClick,
  closeHandler,
  open,
}: LoginModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerModalRef = useRef<HTMLDivElement>(null);
  const outsideClickHandler = useCallback(() => closeHandler(), []);
  useOnClickOutside(innerModalRef, outsideClickHandler);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const passwordFieldId = useId();
  const emailFieldId = useId();

  const Schema = z.object({
    email: z
      .string()
      .min(1, { message: "Обязательное поле" })
      .email({ message: "Введите корректный E-mail" }),
    password: z.string().min(1, { message: "Обязательное поле" }),
  });

  type FormData = z.infer<typeof Schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    reset();
  };

  return (
    <>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className={styles.modal}
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.modalInner} ref={innerModalRef}>
                  <button
                    className={styles.modalCloseBtn}
                    onClick={() => closeHandler()}
                  >
                    <EmbedSVG src={cross.src} />
                  </button>
                  <h3 className={styles.heading}>Авторизация</h3>
                  <form
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className={styles.fields}>
                      <div className={styles.field}>
                        <label className={styles.label} htmlFor={emailFieldId}>
                          E-mail
                        </label>
                        <input
                          type="email"
                          className={`${styles.input} ${
                            errors.email ? styles.inputInvalid : ""
                          }`}
                          id={emailFieldId}
                          {...register("email", { required: true })}
                        />
                        {errors.email?.message && (
                          <span className={styles.validationError}>
                            {errors.email?.message}
                          </span>
                        )}
                      </div>
                      <div className={styles.field}>
                        <label
                          className={styles.label}
                          htmlFor={passwordFieldId}
                        >
                          Пароль
                        </label>
                        <input
                          type="password"
                          className={`${styles.input} ${
                            errors.password ? styles.inputInvalid : ""
                          }`}
                          id={passwordFieldId}
                          {...register("password", { required: true })}
                        />
                        {errors.password?.message && (
                          <span className={styles.validationError}>
                            {errors.password?.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <button className={styles.submit}>Войти</button>
                    <button
                      type="button"
                      className={styles.rememberLink}
                      onClick={() => onRememberClick()}
                    >
                      Не помню пароль
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

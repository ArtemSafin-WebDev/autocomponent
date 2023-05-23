"use client";

import { useId } from "react";
import styles from "./signupField.module.scss";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { SignupFormData } from "../Signup/Signup";

interface SignupFieldProps {
  type?: string;
  labelText: string;
  placeholder?: string;
  label: Path<SignupFormData>;
  register: UseFormRegister<SignupFormData>;
  errors: FieldErrors<SignupFormData>;
  remark?: string;
}

const SignupField = ({
  type,
  labelText,
  placeholder,
  label,
  errors,
  remark,
  register,
}: SignupFieldProps) => {
  const fieldId = useId();
  const fieldType = type ? type : "text";
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={fieldId}>
        {labelText}
      </label>
      <input
        type={fieldType}
        placeholder={placeholder}
        id={fieldId}
        className={`${styles.input} ${
          errors[label] ? styles.inputInvalid : ""
        }`}
        {...register(label)}
      />
      {remark && <div className={styles.remark}>{remark}</div>}
      {errors[label]?.message && (
        <span className={styles.validationError}>{errors[label]?.message}</span>
      )}
    </div>
  );
};

export default SignupField;

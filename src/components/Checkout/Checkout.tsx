"use client";

import Link from "next/link";
import styles from "./checkout.module.scss";
import EmbedSVG from "../utils/EmbedSVG/EmbedSVG";
import backArrow from "@/assets/images/back-arrow.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import CheckoutSelect from "../CheckoutSelect/CheckoutSelect";
import { useState } from "react";

const Schema = z.object({
  company: z.string().min(1, { message: "Обязательное поле" }),
  paymentMethod: z.string().min(1, { message: "Обязательное поле" }),
  comment: z.string(),
  delivery: z.string().min(1, { message: "Обязательное поле" }),
  address: z.string().min(1, { message: "Обязательное поле" }),
});

type CheckoutFormData = z.infer<typeof Schema>;

enum PaymentMethod {
  Bill = "Банковским платежом",
  Cash = "Наличными при получении",
}
enum DeliveryMethod {
  Self = "Самовывоз",
  Company = "Доставка",
}

export default function Checkout() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(Schema),
  });

  const onSubmit: SubmitHandler<CheckoutFormData> = (data) => {
    console.log(data);
    reset();
  };

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.Bill
  );

  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>(
    DeliveryMethod.Self
  );

  return (
    <div className={styles.checkout}>
      <Link href="/" className={styles.backLink}>
        <EmbedSVG src={backArrow.src} />
        Вернуться в корзину
      </Link>
      <div className={styles.checkoutInner}>
        <h1 className={styles.heading}>Оформление заказа</h1>
        <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={styles.formHeading}>Данные заказа</h2>
          <div className={styles.fields}>
            <div className={styles.field}>
              <CheckoutSelect
                labelText="Юр. лицо"
                items={[
                  {
                    title: "Юр. лицо 1",
                    value: "company1",
                  },
                  {
                    title: "Юр. лицо 2",
                    value: "company2",
                  },
                ]}
                label="company"
                register={register}
                errors={errors}
                placeholder="Выберите юр. лицо"
                setValue={setValue}
              />
            </div>
            <div className={styles.field}>
              <div className={styles.label}>Тип оплаты</div>
              <div className={styles.paymentTypes}>
                <button
                  className={`${styles.paymentCheckbox} ${
                    paymentMethod === PaymentMethod.Bill ? styles.checked : ""
                  }`}
                  onClick={() => {
                    setPaymentMethod(PaymentMethod.Bill);
                    setValue("paymentMethod", PaymentMethod.Bill, {
                      shouldValidate: true,
                    });
                  }}
                  type="button"
                >
                  <span className={styles.paymentCheckboxMark}></span>
                  {PaymentMethod.Bill}
                </button>
                <button
                  className={`${styles.paymentCheckbox} ${
                    paymentMethod === PaymentMethod.Cash ? styles.checked : ""
                  }`}
                  onClick={() => {
                    setPaymentMethod(PaymentMethod.Cash);
                    setValue("paymentMethod", PaymentMethod.Cash, {
                      shouldValidate: true,
                    });
                  }}
                  type="button"
                >
                  <span className={styles.paymentCheckboxMark}></span>
                  {PaymentMethod.Cash}
                </button>
                <input
                  type="hidden"
                  {...register("paymentMethod", { required: true })}
                  value={paymentMethod}
                />
              </div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>Способ получения</div>
              <div className={styles.checkboxes}>
                <button
                  className={styles.checkbox}
                  onClick={() => {
                    setDeliveryMethod(DeliveryMethod.Self);
                    setValue("delivery", DeliveryMethod.Self, {
                      shouldValidate: true,
                    });
                  }}
                  type="button"
                >
                  <span
                    className={`${styles.mark} ${
                      deliveryMethod === DeliveryMethod.Self
                        ? styles.markChecked
                        : ""
                    }`}
                  ></span>
                  <span className={styles.checkboxText}>
                    {DeliveryMethod.Self}
                  </span>
                </button>
                <button
                  className={styles.checkbox}
                  onClick={() => {
                    setDeliveryMethod(DeliveryMethod.Company);
                    setValue("delivery", DeliveryMethod.Company, {
                      shouldValidate: true,
                    });
                  }}
                  type="button"
                >
                  <span
                    className={`${styles.mark} ${
                      deliveryMethod === DeliveryMethod.Company
                        ? styles.markChecked
                        : ""
                    }`}
                  ></span>
                  <span className={styles.checkboxText}>
                    {DeliveryMethod.Company}
                  </span>
                </button>
              </div>
              <input
                type="hidden"
                {...register("delivery", { required: true })}
              />
              <CheckoutSelect
                items={[
                  {
                    title: "Адрес 1",
                    value: "address1",
                  },
                  {
                    title: "Адрес 2",
                    value: "address2",
                  },
                ]}
                label="address"
                register={register}
                errors={errors}
                placeholder="Выберите адрес доставки"
                setValue={setValue}
              />
            </div>
            <div className={styles.field}>
              <div className={styles.label}>Комментарий к заказу</div>
              <textarea
                className={styles.comment}
                {...register("comment", { required: false })}
              ></textarea>
            </div>
          </div>
          <button className={styles.submit}>Оформить заказ</button>
        </form>
        <div className={styles.warning}>
          В связи с непрогнозируемым изменением цен от производителей,
          <br /> ваш заказ необходимо согласовать с менеджером.
        </div>
      </div>
    </div>
  );
}

export type { CheckoutFormData };

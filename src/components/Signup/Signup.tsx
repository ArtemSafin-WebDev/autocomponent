"use client";

import SignupField from "../SignupField/SignupField";
import styles from "./signup.module.scss";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SignupSelect from "../SignupSelect/SignupSelect";
import SignupOffer from "../SignupOffer/SignupOffer";

const Schema = z.object({
  inn: z.string().min(1, { message: "Обязательное поле" }),
  companyName: z.string().min(1, { message: "Обязательное поле" }),
  tax: z.string().min(1, { message: "Обязательное поле" }),
  sphere: z.string().min(1, { message: "Обязательное поле" }),
  region: z.string().min(1, { message: "Обязательное поле" }),
  delivery: z.string().min(1, { message: "Обязательное поле" }),
  working: z.string().min(1, { message: "Обязательное поле" }),
  account: z.string().min(1, { message: "Обязательное поле" }),
  bik: z.string().min(1, { message: "Обязательное поле" }),
  corAccount: z.string().min(1, { message: "Обязательное поле" }),
  email: z
    .string()
    .min(1, { message: "Обязательное поле" })
    .email({ message: "Введите корректный E-mail" }),
  person: z.string().min(1, { message: "Обязательное поле" }),
  offer: z.literal(true, {
    errorMap: () => ({ message: "Необходимо принять условия" }),
  }),
});

type SignupFormData = z.infer<typeof Schema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(Schema),
  });

  const onSubmit: SubmitHandler<SignupFormData> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className={styles.signup}>
      <h1 className={styles.heading}>Регистрация</h1>
      <div className={styles.card}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.blocks}>
            <div className={styles.block}>
              <h2 className={styles.blockHeading}>Данные об организации</h2>
              <div className={styles.fields}>
                <SignupSelect
                  labelText="Система налогобложения"
                  items={[
                    {
                      title: "Без НДС",
                      value: "Без НДС",
                    },
                    {
                      title: "C НДС",
                      value: "C НДС",
                    },
                  ]}
                  label="tax"
                  register={register}
                  errors={errors}
                />
                <SignupSelect
                  labelText="Сфера деятельности"
                  items={[
                    {
                      title: "СТО",
                      value: "СТО",
                    },
                    {
                      title: "Другая",
                      value: "Другая",
                    },
                  ]}
                  label="sphere"
                  register={register}
                  errors={errors}
                />
                <SignupField
                  labelText="ИНН"
                  placeholder="Название в свободной форме, адрес, ИНН"
                  label="inn"
                  register={register}
                  errors={errors}
                />
                <SignupField
                  labelText="Название компании"
                  placeholder="ООО «Ромашка»"
                  label="companyName"
                  register={register}
                  errors={errors}
                />
                <SignupSelect
                  labelText="Регион"
                  items={[
                    {
                      title: "Санкт-Петербург",
                      value: "Санкт-Петербург",
                    },
                    {
                      title: "Москва",
                      value: "Москва",
                    },
                  ]}
                  label="region"
                  register={register}
                  errors={errors}
                />
                <SignupField
                  labelText="Адрес доставки"
                  placeholder="Адрес доставки"
                  label="delivery"
                  register={register}
                  errors={errors}
                  remark="Если у вас несколько адресов, то укажите основной (с большим кол-вом доставок)"
                />
                <SignupSelect
                  labelText="Уже работаете с нами?"
                  items={[
                    {
                      title: "Нет, я новый клиент",
                      value: "Нет, я новый клиент",
                    },
                    {
                      title: "Да",
                      value: "Да",
                    },
                  ]}
                  label="working"
                  register={register}
                  errors={errors}
                  remark="Если вы когда-нибудь совершали заказы у нас, то обязательно выберите «Да, уже работаем»"
                />
              </div>
            </div>
            <div className={styles.block}>
              <h2 className={styles.blockHeading}>Банковские реквизиты</h2>
              <div className={styles.fields}>
                <SignupField
                  labelText="Расчётный счёт"
                  placeholder="40702810330000100078"
                  label="account"
                  register={register}
                  errors={errors}
                />
                <SignupField
                  labelText="БИК"
                  placeholder="040349602"
                  label="bik"
                  register={register}
                  errors={errors}
                />
                <SignupField
                  labelText="Корреспондентский счёт"
                  placeholder="20100810100000000738"
                  label="corAccount"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className={styles.block}>
              <h2 className={styles.blockHeading}>Контактная информация</h2>
              <div className={styles.fields}>
                <SignupField
                  labelText="Контактное лицо"
                  placeholder="Петров Сергей Викторович"
                  label="person"
                  register={register}
                  errors={errors}
                />
                <SignupField
                  type="email"
                  labelText="E-mail"
                  placeholder="mail@mail.ru"
                  label="email"
                  register={register}
                  errors={errors}
                  remark="Будет использоваться для обратной связи и как логин для входа в Личный кабинет"
                />
              </div>
            </div>
          </div>
          <div className={styles.controls}>
            <div className={styles.controlsInner}>
              <SignupOffer label="offer" register={register} errors={errors} />
              <button className={styles.submit}>Зарегистрироваться</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export type { SignupFormData };

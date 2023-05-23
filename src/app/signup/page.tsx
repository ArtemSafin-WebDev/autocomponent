import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import styles from "./page.module.scss";
import Signup from "@/components/Signup/Signup";

export const metadata = {
  title: "Автокомпонент - Регистрация",
  description: "",
};

export default function SignupPage() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            { id: 2, href: "/signup", title: "Регистрация", active: true },
          ]}
        />
        <Signup />
      </div>
    </>
  );
}

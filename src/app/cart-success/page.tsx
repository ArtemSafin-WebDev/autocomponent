import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CartSuccess from "@/components/CartSuccess/CartSuccess";

export const metadata = {
  title: "Автокомпонент - Заказ успешно оформлен",
  description: "",
};

export default async function CartSuccessPage() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            { id: 2, href: "/cart", title: "Корзина" },
            {
              id: 3,
              href: "/signup",
              title: "Оформление заказа",
              active: true,
            },
          ]}
        />
        <CartSuccess />
      </div>
    </>
  );
}

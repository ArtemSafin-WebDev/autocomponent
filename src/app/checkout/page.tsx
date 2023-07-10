import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Checkout from "@/components/Checkout/Checkout";

export const metadata = {
  title: "Автокомпонент - Оформление заказов",
  description: "",
};

export const revalidate = 60;

export default function CheckoutPage() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            { id: 2, href: "/cart", title: "Корзина" },
            {
              id: 3,
              href: "/checkout",
              title: "Оформление заказа",
              active: true,
            },
          ]}
        />
        <Checkout />
      </div>
    </>
  );
}

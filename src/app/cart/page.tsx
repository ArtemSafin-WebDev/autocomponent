import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Cart from "@/components/Cart/Cart";

export const metadata = {
  title: "Автокомпонент - Корзина",
  description: "",
};

export default async function CartPage() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            { id: 1, href: "/", title: "Главная" },
            { id: 2, href: "/cart", title: "Корзина", active: true },
          ]}
        />
        <Cart />
      </div>
    </>
  );
}

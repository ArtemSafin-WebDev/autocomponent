import { HomeSlide } from "@/types/api";

const homeSlides: HomeSlide[] = [
  {
    id: 1,
    src: "/home-slider/home-slider.webp",
    title: "Доставка в день заказа!",
    subtitle: "Закажите до 11:00, привезём до 19:00",
    desc: "Санкт-Петербург, Тосно, Гатчина, Ломоносов, Кронштадт, Сертолово, Песочное, Кузьмолово, Парголово, Всеволожск, Кировск.",
  },
  {
    id: 2,
    src: "/home-slider/home-slider.webp",
    title: "Доставка в день заказа!",
    desc: "Санкт-Петербург, Тосно, Гатчина, Ломоносов, Кронштадт, Сертолово, Песочное, Кузьмолово, Парголово, Всеволожск, Кировск.",
  },
  {
    id: 3,
    src: "/home-slider/home-slider.webp",
    title: "Доставка в день заказа!",
    subtitle: "Закажите до 11:00, привезём до 19:00",
    desc: "Санкт-Петербург, Тосно, Гатчина, Ломоносов, Кронштадт, Сертолово, Песочное, Кузьмолово, Парголово, Всеволожск, Кировск.",
  },
  {
    id: 4,
    src: "/home-slider/home-slider.webp",
    title: "Доставка в день заказа!",
    subtitle: "Закажите до 11:00, привезём до 19:00",
    desc: "Санкт-Петербург, Тосно, Гатчина, Ломоносов, Кронштадт, Сертолово, Песочное, Кузьмолово, Парголово, Всеволожск, Кировск.",
  },
  {
    id: 5,
    src: "/home-slider/home-slider.webp",
    title: "Доставка в день заказа!",
    subtitle: "Закажите до 11:00, привезём до 19:00",
    desc: "Санкт-Петербург, Тосно, Гатчина, Ломоносов, Кронштадт, Сертолово, Песочное, Кузьмолово, Парголово, Всеволожск, Кировск.",
  },
];

export const getHomeSlides = () =>
  new Promise<HomeSlide[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(homeSlides);
    }, 50);
  });

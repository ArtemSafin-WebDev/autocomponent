import { DashboardData } from "@/types/api";

export async function fetchDashboardData(): Promise<DashboardData> {
  await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Ready");
    }, 50);
  });

  return {
    manager: {
      photo: "/manager.jpg",
      name: "Мызников Игорь",
      phone: "+7 911 772-21-22",
      email: "miznikov@mail.ru",
    },
    credentials: {
      login: "dvizhkom",
      password: "dvizhkom@yandex.ru",
    },
    contracts: {
      file: "/manager.jpg",
      items: [
        "ООО «Автосервис»",
        "ООО «Арком»",
        "ООО «Автотрейд»",
        "ООО «Автоспектр»",
        "ООО «Автомолл»",
        "ООО «Авторегион»",
        "ООО «Реформа»",
      ],
    },
  };
}

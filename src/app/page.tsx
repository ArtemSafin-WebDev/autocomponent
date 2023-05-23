import { fetchHomeData } from "@/clientApi/fetchHomeData";
import HomeCatalog from "@/components/HomeCatalog/HomeCatalog";
import HomeInfo from "@/components/HomeInfo/HomeInfo";
import HomeLinks from "@/components/HomeLinks/HomeLinks";
import styles from "./page.module.scss";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import HomeCard from "@/components/HomeCard/HomeCard";
import NewsFeed from "@/components/NewsFeed/NewsFeed";

export const metadata = {
  title: "Автокомпонент - Главная страница",
  description: "",
};

export default async function Home() {
  const data = await fetchHomeData();

  return (
    <>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.slider}>
            <HomeSlider slides={data.homeSlides} />
          </div>

          <div className={styles.newsFeed}>
            <NewsFeed data={data.newsFeed} />
          </div>

          {data.homeCards && data.homeCards.length ? (
            <div className={styles.cards}>
              {data.homeCards.map((card) => (
                <HomeCard card={card} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <HomeCatalog items={data.homeCatalogItems} />
      <HomeLinks links={data.homeLinks} />
      <HomeInfo />
    </>
  );
}

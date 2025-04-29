import { useEffect, useState } from "react";
import { apiNews } from "../../../api/apiNews";
import NewsBanner from "../../../components/NewsBanner/NewsBanner";
import NewsList from "../../../components/NewsList/NewsList";
import Skeleton from "../../../components/Skeleton/Skeleton";
import styles from "./Main.module.css";

const Main = () => {
  const [news, setNews] = useState<NewsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await apiNews();
        console.log(response);
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length && !isLoading ? <NewsBanner news={news[0]} /> : <Skeleton count={1} type={"banner"} />}
      {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type={"item"} />}
    </main>
  );
};

export default Main;

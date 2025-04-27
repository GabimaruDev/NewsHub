import { useEffect, useState } from "react";
// import { apiNews } from "../../../api/apiNews";
import NewsBanner from "../../../components/NewsBanner/NewsBanner";
import NewsList from "../../../components/NewsList/NewsList";
import styles from "./Main.module.css";
import test from "./test.json";

const Main = () => {
  const [news, setNews] = useState<NewsProps[]>([]);

  useEffect(() => {
    // const fetchNews = async () => {
    //   try {
    //     const response = await apiNews();
    //     console.log(response);
    //     setNews(response.news);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchNews();
    console.log(test.news);
    setNews(test.news);
  }, []);

  return (
    <main className={styles.main}>
      {news.length ? <NewsBanner news={news[0]} /> : null}
      <NewsList news={news} />
    </main>
  );
};

export default Main;

import { FC } from "react";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./NewsList.module.css";

interface NewsListProps {
  news: NewsProps[];
}

const NewsList: FC<NewsListProps> = (props) => {
  const { news } = props;
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default NewsList;

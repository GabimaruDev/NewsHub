import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

interface NewsListProps {
  news: NewsProps[];
}

const NewsList = (props: NewsListProps) => {
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

import withSkeleton from "../../app/helpers/hocs/withSkeleton";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

interface NewsListProps {
  news?: INews[];
}

const NewsList = (props: NewsListProps) => {
  const { news } = props;
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<NewsListProps>(NewsList, "item", 10);

export default NewsListWithSkeleton;

import { formatTimeAgo } from "../../app/helpers/formatTimeAgo";
import Image from "../Image/Image";
import styles from "./styles.module.css";

const NewsBanner = (props: { news: NewsProps }) => {
  const { news } = props;

  return (
    <a href={news.url} className={styles.banner}>
      <Image image={news.image} />
      <h3 className={styles.title}>{news.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(news.published)} by {news.author}
      </p>
    </a>
  );
};

export default NewsBanner;

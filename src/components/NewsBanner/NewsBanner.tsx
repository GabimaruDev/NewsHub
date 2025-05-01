import { formatTimeAgo } from "../../app/helpers/formatTimeAgo";
import Image from "../Image/Image";
import styles from "./styles.module.css";

const NewsBanner = (props: { news: NewsProps }) => {
  const { news } = props;

  return (
    <div className={styles.banner}>
      <Image image={news.image} />
      <h3 className={styles.title}>{news.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(news.published)} by {news.author}
      </p>
    </div>
  );
};

export default NewsBanner;

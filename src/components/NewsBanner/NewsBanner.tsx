import { FC } from "react";
import { formatTimeAgo } from "../../app/helpers/formatTimeAgo";
import Image from "../Image/Image";
import styles from "./NewsBanner.module.css";

const NewsBanner: FC<{ news: NewsProps }> = (props) => {
  const { news } = props;

  return (
    <div>
      <Image image={news.image} />
      <h3 className={styles.title}>{news.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(news.published)} by {news.author}
      </p>
    </div>
  );
};

export default NewsBanner;

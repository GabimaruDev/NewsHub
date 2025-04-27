import { FC } from "react";
import { formatTimeAgo } from "../../app/helpers/formatTimeAgo";
import styles from "./NewsItem.module.css";

interface NewsItemProps {
  item: NewsProps;
}

const NewsItem: FC<NewsItemProps> = (props) => {
  const { item } = props;

  return (
    <li key={item.id}>
      <a className={styles.item} href={item.url}>
        <div className={styles.wrapper} style={{ backgroundImage: `url(${item.image})` }}></div>
        <div className={styles.info}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.extra}>
            {formatTimeAgo(item.published)} by {item.author}
          </p>
        </div>
      </a>
    </li>
  );
};

export default NewsItem;

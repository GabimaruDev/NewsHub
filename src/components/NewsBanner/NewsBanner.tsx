import { formatTimeAgo } from "../../app/helpers/formatTimeAgo";
import withSkeleton from "../../app/helpers/hocs/withSkeleton";
import Image from "../Image/Image";
import styles from "./styles.module.css";

const NewsBanner = (props: { news: INews }) => {
  const { news } = props;
  if (!news) return null;

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

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);

export default NewsBannerWithSkeleton;

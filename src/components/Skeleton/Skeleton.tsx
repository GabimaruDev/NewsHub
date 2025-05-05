import styles from "./styles.module.css";

interface SkeletonProps {
  count?: number;
  type?: SkeletonType;
}

const Skeleton = (props: SkeletonProps) => {
  const { count = 1, type = "banner" } = props;
  return (
    <>
      {count > 1 ? (
        <ul className={styles.list}>
          {[...Array(count)].map((_, index) => (
            <li className={type === "banner" ? styles.banner : styles.item} key={index}></li>
          ))}
        </ul>
      ) : (
        <li className={type === "banner" ? styles.banner : styles.item}></li>
      )}
    </>
  );
};

export default Skeleton;

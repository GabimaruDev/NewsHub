import styles from "./styles.module.css";

interface ImageProps {
  image: string;
}

const Image = (props: ImageProps) => {
  const { image } = props;

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} />
    </div>
  );
};

export default Image;

import { FC } from "react";
import styles from "./styles.module.css";

interface ImageProps {
  image: string;
}

const Image: FC<ImageProps> = (props) => {
  const { image } = props;

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} />
    </div>
  );
};

export default Image;

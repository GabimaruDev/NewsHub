import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Created by{" "}
        <a className={styles.link} href="https://github.com/GabimaruDev">
          GabimaruDev
        </a>
      </p>
    </footer>
  );
};

export default Footer;

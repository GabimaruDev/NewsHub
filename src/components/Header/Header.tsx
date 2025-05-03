import { useEffect, useState } from "react";
import { formatDate } from "../../app/helpers/formatDate";
import styles from "./styles.module.css";

const Header = () => {
  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <a href="#" onClick={() => location.reload()}>
          NewsHub
        </a>
      </h1>
      <p className={styles.date}>{formatDate(date)}</p>
    </header>
  );
};

export default Header;

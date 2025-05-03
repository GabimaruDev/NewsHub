import { useState } from "react";
import styles from "./styles.module.css";

interface SearchProps {
  fetchNews: (keywords: string) => void;
}

const Search = (props: SearchProps) => {
  const { fetchNews } = props;
  const [keyword, setKeyword] = useState("");

  const clearInput = () => {
    setKeyword("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchNews(keyword);
    }
  };

  return (
    <div className={styles.search}>
      <div className={styles.input_wrapper}>
        <input
          className={styles.input}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          type="text"
          value={keyword}
          placeholder="Search..."
          onKeyDown={handleKeyDown}
        />
        {keyword ? (
          <button onClick={clearInput} className={styles.close}>
            X
          </button>
        ) : null}
      </div>
      <button
        className="button"
        onClick={() => {
          fetchNews(keyword);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;

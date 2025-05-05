import { useState } from "react";
import styles from "./styles.module.css";

interface SearchProps {
  setKeywords: (keywords: string) => void;
}

const Search = (props: SearchProps) => {
  const { setKeywords } = props;
  const [inputValue, setInputValue] = useState("");

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className={styles.search}>
      <div className={styles.input_wrapper}>
        <input
          className={styles.input}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          value={inputValue}
          placeholder="Search..."
          name="search"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setKeywords(inputValue);
            }
          }}
        />
        {inputValue ? (
          <button onClick={clearInput} className={styles.close}>
            X
          </button>
        ) : null}
      </div>
      <button
        className="button"
        onClick={() => {
          setKeywords(inputValue);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;

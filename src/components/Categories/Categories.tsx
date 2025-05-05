import { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";

interface CategoriesProps {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const Categories = forwardRef(
  ({ categories, selectedCategory, setSelectedCategory }: CategoriesProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button onClick={() => setSelectedCategory(null)} className={!selectedCategory ? styles.active : styles.item}>
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? styles.active : styles.item}
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

export default Categories;

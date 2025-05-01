import styles from "./styles.module.css";

interface CategoriesProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Categories = (props: CategoriesProps) => {
  const { categories, selectedCategory, setSelectedCategory } = props;

  return (
    <div className={styles.categories}>
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
};

export default Categories;

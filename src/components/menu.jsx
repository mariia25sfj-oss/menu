import Dish from "./Dish";
import styles from "./Menu.module.css";

const Menu = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Dish key={item.id} dish={item} />
      ))}
    </div>
  );
};

export default Menu;
import styles from "./Dish.module.css";

const Dish = ({ dish }) => {
  return (
    <div className={styles.card}>
      <h2>{dish.tittel}</h2>
      <p>{dish.pris}</p>
      <p>{dish.ingredienser}</p>
      <p>{dish.kategori}</p>
    </div>
  );
};

export default Dish;
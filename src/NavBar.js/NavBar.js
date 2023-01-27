import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
function NavBar() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link to="/" className={styles.text}>
          Home
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="/empresa" className={styles.text}>
          Empresa
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="/Product/" className={styles.text}>
          Produto
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;

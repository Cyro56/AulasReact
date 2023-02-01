import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="/Produto" className={styles.link}>
          Produtos
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="/Empresa" className={styles.link}>
          Empresa
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;

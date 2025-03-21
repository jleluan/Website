import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>James Le-luan</h1>
      <nav>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/projects" className={styles.navLink}>
          Projects
        </Link>
        <Link to="/about" className={styles.navLink}>
          About
        </Link>
        <Link to="/TestPage" className={styles.navLink}>
          TestPage
        </Link>
        <Link to="/projects/project1" className={styles.navLink}>
          Proj1
        </Link>
      </nav>
    </header>
  );
}

export default Header;
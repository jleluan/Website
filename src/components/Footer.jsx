import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} My Personal Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
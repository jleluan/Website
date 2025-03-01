import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>My Personal Website</h1>
      <nav>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/projects" style={styles.navLink}>Projects</Link>
        <Link to="/about" style={styles.navLink}>About</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
  },
  navLink: {
    color: "white",
    margin: "0 15px",
    fontSize: "1.2rem",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Header;

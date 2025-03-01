function Footer() {
    return (
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Personal Website. All rights reserved.</p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      backgroundColor: "#282c34",
      color: "white",
      padding: "10px",
      textAlign: "center",
      width: "100%",
      marginTop: "auto",
    },
  };
  
  export default Footer;
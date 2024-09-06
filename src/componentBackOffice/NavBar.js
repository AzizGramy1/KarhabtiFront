import React from "react";

function NavBar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>KARHABTI</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <a href="/" style={styles.navLink}>Home</a>
        </li>
        <li style={styles.navItem}>
          <a href="/about" style={styles.navLink}>About</a>
        </li>
        <li style={styles.navItem}>
          <a href="/contact" style={styles.navLink}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed', // Fixe la navbar en haut
    top: 0, // Collé au haut de la page
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2c3e50', // Bleu foncé
    padding: '1rem',
    color: '#fff',
    zIndex: 1000, // Assure que la navbar reste au-dessus du contenu
    width: '100%', // Prend toute la largeur
  },
  logo: {
    fontSize: '1.5rem',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center', // Centre les éléments horizontalement
    flex: 1, // Prend l'espace disponible
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '1rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem', // Augmente la taille de police
  },
};

export default NavBar;

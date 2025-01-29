import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
          <div className={styles.link}>
            <a href="#secao_1">Início</a>
          </div>
          <div className={styles.link}>
            <a href="#sobre">Metodologia de ensino</a>
          </div>
          <div className={styles.link}>
            <a href="#skills">Contato</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

import { useTheme } from "../context/ThemeContext";
import styles from "./Header.module.css"

function Header() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Kanban Board</h1>

      <button 
      className={styles.button}
      onClick={toggleTheme}>
        {theme === "light"
          ? "Dark Mode"
          : "Light Mode"}
      </button>
    </header>
  );
}

export default Header;
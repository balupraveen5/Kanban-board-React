import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <header>
      <h1>Kanban Board</h1>

      <button onClick={toggleTheme}>
        {theme === "light"
          ? "Dark Mode"
          : "Light Mode"}
      </button>
    </header>
  );
}

export default Header;
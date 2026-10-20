import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="btn-toggle">
      {theme === "light" ? "🌙 Chế độ Tối" : "☀️ Chế độ Sáng"}
    </button>
  );
}
import { useTheme } from "next-themes";

/**
 * ColorMode Component
 *
 * The ColorMode component represents a color mode toggle button for switching between light and dark themes using the `next-themes` library.
 *
 * @returns {JSX.Element} The JSX representation of the ColorMode component.
 */
export default function ColorMode() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="color-mode"
      onClick={() =>
        setTheme((t) => {
          if (t == "light") {
            return "dark";
          }
          return "light";
        })
      }
    >
      <span className="material-icons-outlined">dark_mode</span>
    </div>
  );
}

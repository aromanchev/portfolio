import { useState, useEffect } from "react";
import { MoonIcon, LightIcon } from "../../assets/Icons";
import styles from "./theme-changer.module.scss";

export type Themes = "light" | "dark";

export const ThemeChanger = () => {
  const [theme, setTheme] = useState<Themes>("dark");
  const classes = [
    styles.themeChanger,
    theme === "light" && styles.themeChangerLight,
  ]
    .filter(Boolean)
    .join(" ");
  const handleChangeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.remove("light-theme");
    }
  };
  useEffect(() => {
    setTheme(localStorage?.getItem("theme") as Themes);
    if (theme === "light") {
      document.documentElement.classList.add("light-theme");
    }
  }, [theme]);
  return (
    <button className={classes} onClick={handleChangeTheme}>
      {theme === "light" ? <MoonIcon /> : <LightIcon />}
    </button>
  );
};

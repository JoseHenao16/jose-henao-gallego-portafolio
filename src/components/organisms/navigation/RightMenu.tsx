"use client";

import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaSun,
  FaCloud,
  FaMoon,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const socialIcons = [
  { icon: <FaInstagram />, href: "https://instagram.com/josehenaogll", label: "Instagram" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/jos%C3%A9-david-gallego-587a97210/", label: "LinkedIn" },
  { icon: <FaGithub />, href: "https://github.com/JoseHenao16", label: "GitHub" },
];

const themes = ["theme-sunny", "theme-cloudy", "theme-dark"];
const themeIcons = [FaSun, FaCloud, FaMoon];

const RightMenu = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const theme = themes[themeIndex];
    document.body.classList.remove(...themes);
    document.body.classList.add(theme);
  }, [themeIndex]);

  return (
    <aside className="order-3 hidden h-huge w-[95px] flex-col items-center gap-[19px] bg-[var(--color-fondo)] pt-[73px] pb-[131px] lg:flex">
      <span className="text-[18px] font-bold leading-[124%] text-[var(--color-darktext)]">
        Connect
      </span>

      <div className="flex flex-col items-center gap-[15px] mt-4">
        {socialIcons.map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[48px] h-[48px] rounded-full bg-[var(--color-accent)] flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <span className="text-[var(--color-darktext)] text-[18px]">
              {icon}
            </span>
          </a>
        ))}
      </div>

      {/* Separador visual */}
      <div className="h-[1px] w-10 bg-[var(--color-darktext)] opacity-20 my-4" />

      {/* Selector de temas */}
      <div className="flex flex-col items-center gap-2">
        {themeIcons.map((IconComponent, index) => (
          <button
            key={index}
            onClick={() => setThemeIndex(index)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300
      ${
        themeIndex === index
          ? "bg-[var(--color-accent)] scale-110"
          : "bg-[var(--color-darktext)] opacity-60 hover:opacity-100 hover:cursor-pointer"
      }`}
          >
            <IconComponent />
          </button>
        ))}
      </div>
    </aside>
  );
};

export default RightMenu;

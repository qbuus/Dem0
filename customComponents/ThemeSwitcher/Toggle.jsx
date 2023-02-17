import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import styled from "@emotion/styled";

const ThemeContainer = styled.button`
  --toggle-width: 50px;
  --toggle-height: 2.5rem;
  --toggle-padding: 3.3px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.2rem;
  line-height: 0;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background-color: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 2px 1px var(--color-bg-toggle);
  },
`;

const ThemeSwitcher = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: calc(var(--toggle-padding));
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: rgb(243, 243, 243);
  transition: transform 0.25s ease-in-out;
  transform: ${(p) =>
    p.activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;

const Toggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <ThemeContainer
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      <ThemeSwitcher activeTheme={activeTheme} />
      <span aria-hidden={true}>
        <FiMoon />
      </span>
      <span aria-hidden={true}>
        <FiSun />
      </span>
    </ThemeContainer>
  );
};

export default Toggle;

import React from "react";
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Switch,
} from "@blueprintjs/core";
import blueprintLogo from "./assets/blueprint-logo.png";

interface NavigationProps {
  darkTheme: boolean;
  onToggleDarkTheme: () => void;
  strictMode: boolean;
  onToggleStrictMode: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  darkTheme,
  onToggleDarkTheme,
  strictMode,
  onToggleStrictMode,
}) => {
  return (
    <Navbar className={Classes.DARK}>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          <img
            src={blueprintLogo}
            className="logo"
            alt="Blueprint logo"
            height={20}
            width={20}
          />
          <span>Blueprint v5 + React v16</span>
        </NavbarHeading>
        <NavbarDivider />
        <AnchorButton
          href="http://blueprintjs.com/docs"
          text="Docs"
          target="_blank"
          minimal
          rightIcon="share"
        />
        <AnchorButton
          href="http://github.com/palantir/blueprint"
          text="Github"
          target="_blank"
          minimal
          rightIcon="code"
        />
        <NavbarDivider />
        <Switch
          className="dark-theme-switch"
          label="Dark theme"
          checked={darkTheme}
          onChange={onToggleDarkTheme}
        />
        <div style={{ width: 20 }} />
        <Switch
          className="dark-theme-switch"
          label="React strict mode"
          checked={strictMode}
          onChange={onToggleStrictMode}
        />
      </NavbarGroup>
    </Navbar>
  );
};

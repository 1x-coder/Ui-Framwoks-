import classNames from "classnames";
import { StrictMode, useCallback, useState } from "react";
import { Classes } from "@blueprintjs/core";
import { Navigation } from "./Navigation";
import { CoreExample } from "./CoreExample";
import { DatetimeExample } from "./DatetimeExample";
import { SelectExample } from "./SelectExample";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const handleDarkThemeToggle = useCallback(
    () => setDarkTheme(!darkTheme),
    [darkTheme],
  );
  const [strictMode, setStrictMode] = useState(false);
  const handleStrictModeToggle = useCallback(
    () => setStrictMode((s) => !s),
    [],
  );

  const examples = (
    <div className="examples-container">
      <CoreExample />
      <DatetimeExample />
      <SelectExample />
    </div>
  );

  return (
    <div
      className={classNames("app", {
        [Classes.DARK]: darkTheme,
      })}
    >
      <Navigation
        darkTheme={darkTheme}
        onToggleDarkTheme={handleDarkThemeToggle}
        strictMode={strictMode}
        onToggleStrictMode={handleStrictModeToggle}
      />
      {strictMode ? <StrictMode>{examples}</StrictMode> : examples}
    </div>
  );
}

export default App;

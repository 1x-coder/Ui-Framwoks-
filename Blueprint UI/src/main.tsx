import ReactDOM from "react-dom";
import App from "./App";

import { FocusStyleManager } from "@blueprintjs/core";
import { Icons, IconPaths } from "@blueprintjs/icons";

import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/datetime2/lib/css/blueprint-datetime2.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "./main.css";

FocusStyleManager.onlyShowFocusOnTabs();

// see https://vitejs.dev/guide/features.html#glob-import
const iconModules: Record<string, { default: IconPaths }> = import.meta.glob(
  [
    "../node_modules/@blueprintjs/icons/lib/esm/generated/16px/paths/*.js",
    "../node_modules/@blueprintjs/icons/lib/esm/generated/20px/paths/*.js",
  ],
  { eager: true },
);

Icons.setLoaderOptions({
  loader: async (name, size) =>
    iconModules[
      `../node_modules/@blueprintjs/icons/lib/esm/generated/${size}px/paths/${name}.js`
    ].default,
});

ReactDOM.render(<App />, document.getElementById("root"));

import { renderToString } from "react-dom/server.browser";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.jsx";

// Rendered at build time by scripts/prerender.mjs, once per route.
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}

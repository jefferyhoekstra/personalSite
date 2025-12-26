import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function setAppViewportHeight() {
  // Use innerHeight to avoid mobile URL-bar vh jumps.
  document.documentElement.style.setProperty(
    "--app-viewport-height",
    `${window.innerHeight}px`
  );
}

setAppViewportHeight();
window.addEventListener("resize", setAppViewportHeight, { passive: true });
window.addEventListener("orientationchange", setAppViewportHeight, {
  passive: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

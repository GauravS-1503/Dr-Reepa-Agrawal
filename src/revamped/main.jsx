import React from "react";
import { createRoot } from "react-dom/client";
import RevampedPage from "./RevampedPage.jsx";
import "./revamped.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RevampedPage />
  </React.StrictMode>,
);

import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Footer } from "@pmndrs/branding";
import "./styles.css";
import App from "./App";

function Overlay() {
  return (
    <>
      <App />
    </>
  );
}

createRoot(document.getElementById("root")).render(<Overlay />);

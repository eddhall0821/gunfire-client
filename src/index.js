import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Footer } from "@pmndrs/branding";
import "./styles.css";
import App from "./App";

function Overlay() {
  const [ready, set] = useState(false);
  function openFullscreen() {
    var elem = document.getElementById("canvas");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
    elem.style.width = "100%";
    elem.style.height = "100%";
  }
  return (
    <>
      <App />
      <div className="dot" />
      <div
        className={`fullscreen bg ${ready ? "ready" : "notready"} ${
          ready && "clicked"
        }`}
      >
        <div className="stack">
          <button
            onClick={() => {
              openFullscreen();
              set(true);
            }}
          >
            Start
          </button>
        </div>
        <Footer date="16. June" year="2021" />
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Overlay />);

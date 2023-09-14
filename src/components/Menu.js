import { useEffect, useState } from "react";
import { useAppStore } from "../store/appStore";

const Menu = () => {
  const isRunning = useAppStore((state) => state.isRunning);
  const toggleRunning = useAppStore((state) => state.toggleRunning);
  const [startDisabled, setStartDisabled] = useState(false);

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

  const pointerlockchange = (e) => {
    toggleRunning();
  };
  useEffect(() => {
    document.addEventListener("pointerlockchange", pointerlockchange, false);
    return () => {
      document.removeEventListener(
        "pointerlockchange",
        pointerlockchange,
        false
      );
    };
  });

  return (
    <div
      className={`fullscreen ${isRunning ? "ready" : "notready"} ${
        isRunning && "clicked"
      }`}
    >
      <div className="stack">
        <button id="button" disabled={startDisabled}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Menu;

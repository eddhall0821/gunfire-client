import { useEffect, useState } from "react";
import { useAppStore } from "../store/appStore";

const Menu = () => {
  const isRunning = useAppStore((state) => state.isRunning);
  const setNotRunning = useAppStore((state) => state.setNotRunning);
  const setRunning = useAppStore((state) => state.setRunning);
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
    if (document.pointerLockElement) setRunning();
    else setNotRunning();
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

  useEffect(() => {
    if (!isRunning) {
      setStartDisabled(true);
      setTimeout(() => {
        setStartDisabled(false);
      }, 2000);
    }
  }, [isRunning]);
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
      <div
        style={{
          padding: 16,
          backgroundColor: "white",
          fontSize: 16,
        }}
      >
        fov: 시야각을 설정합니다.
        <br />
        gravity: 타깃의 중력을 설정합니다. 음의 중력이면 아래로, 양의 중력이면
        위로 향합니다.
        <br />
        resolution: 화면 해상도를 설정합니다. 프레임에 영향을 미칩니다.
        <br />
        size: 타깃의 크기를 설정합니다.
        <br />
        restitution: 타깃의 탄성을 설정합니다.
        <br />
        weapon: 무기를 숨기거나 표시합니다.
      </div>
    </div>
  );
};

export default Menu;

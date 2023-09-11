import { Canvas } from "@react-three/fiber";
import { Sky, PointerLockControls, KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Ground } from "./Ground";
import { Player } from "./Player";
import { Cube, Cubes } from "./Cube";
import { useEffect, useState } from "react";
import GunRecoil from "./components/GunRecoil";
import { SocketManager } from "./components/SocketManager";

// The original was made by Maksim Ivanow: https://www.youtube.com/watch?v=Lc2JvBXMesY&t=124s
// This demo needs pointer-lock, that works only if you open it in a new window
// Controls: WASD + left click

export default function App() {
  const [aiming, setAiming] = useState(false);
  const [shooting, setShooting] = useState(false);

  const onPointerDown = (e) => {
    switch (e.button) {
      //left
      case 0:
        setShooting(true);
        return;
      //center
      case 1:
        return;
      //right
      case 2:
        setAiming(true);
        return;
    }
  };

  const onPointerUp = (e) => {
    switch (e.button) {
      //left
      case 0:
        // setShooting(false);
        return;
      //center
      case 1:
        return;
      //right
      case 2:
        setAiming(false);
        return;
    }
  };

  useEffect(() => {
    if (shooting) {
      setTimeout(() => {
        setShooting(false);
      }, 50);
    }
  }, [shooting]);
  return (
    <>
      <SocketManager />
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas
          shadows
          camera={{ fov: 104 }}
          onMouseDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <mesh>
            <Sky sunPosition={[0, 20, 0]} />
            <ambientLight intensity={0.3} />
            <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
            <Physics gravity={[0, -30, 0]}>
              <Ground />
              <Player aiming={aiming} shooting={shooting} />
              <Cube position={[0, 0.5, -10]} />
              <Cubes />
            </Physics>
            <GunRecoil aiming={aiming} shooting={shooting} />
            {/* <PointerLockControls /> */}
          </mesh>
        </Canvas>
      </KeyboardControls>
    </>
  );
}

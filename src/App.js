import { Canvas } from "@react-three/fiber";
import {
  Sky,
  PointerLockControls,
  KeyboardControls,
  Stats,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Ground } from "./Ground";
import { Player } from "./Player";
import React, { useEffect, useMemo, useRef, useState } from "react";
import GunRecoil from "./components/GunRecoil";
import { SocketManager } from "./components/SocketManager";
import { Soldiers } from "./components/Soldier";
import { PlaneGeometry } from "three";
import MuzzleFlash from "./components/MuzzleFlash";
import { Cube, Cubes } from "./Cube";
import Wall from "./components/Wall";
import { useControls } from "leva";
import Ball from "./components/Ball";

export default function App() {
  const [aiming, setAiming] = useState(false);
  const [shooting, setShooting] = useState(false);

  const options = useMemo(() => {
    return {
      resolution: { value: 0.5, min: 0.1, max: 2 },
      mass: { value: 1, min: 1, max: 10 },
      restitution: { value: 1.5, min: 1, max: 2 },
    };
  }, []);
  const { resolution, mass, restitution } = useControls("options", options);

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
          id="canvas"
          dpr={resolution}
          shadows
          camera={{
            fov: 104,
            // aspect: 1920 / 1080
          }}
          onMouseDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <mesh>
            {/* <Sky sunPosition={[0, 20, 0]} /> */}
            <ambientLight intensity={0.3} />
            <pointLight castShadow intensity={0.2} position={[6, 8, 0]} />
            <pointLight castShadow intensity={0.2} position={[0, 8, 0]} />
            <pointLight castShadow intensity={0.2} position={[-6, 8, 0]} />
            <Physics gravity={[0, -30, 0]}>
              <Ground />
              <Wall />
              <Player aiming={aiming} shooting={shooting} />
              {/* <Cube position={[0, 0.5, -10]} />
              <Cubes /> */}
              <Soldiers />
              <Ball
                position={[5, 5, 5]}
                mass={mass}
                restitution={restitution}
              />
            </Physics>
            <GunRecoil aiming={aiming} shooting={shooting} />
          </mesh>

          <Stats showPanel={0} />
        </Canvas>
      </KeyboardControls>
    </>
  );
}

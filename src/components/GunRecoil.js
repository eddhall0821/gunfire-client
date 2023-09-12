import { PointerLockControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Euler, MathUtils } from "three";
import { socket } from "./SocketManager";

function GunRecoil({ aiming, shooting }) {
  const { gl, camera } = useThree();
  const RECOIL = 2;

  useEffect(() => {
    if (shooting) {
      setCamera(2);
    }
  }, [shooting]);

  const setCamera = (x) => {
    const newCamera = new Euler(
      camera.rotation.x,
      camera.rotation.y,
      camera.rotation.z,
      "YXZ"
    );
    const _PI_2 = Math.PI / 2;
    newCamera.setFromQuaternion(camera.quaternion);
    newCamera.x += 10 * 0.002 * RECOIL * x;
    newCamera.x = Math.max(_PI_2 - Math.PI, Math.min(_PI_2 - 0, newCamera.x));
    camera.quaternion.setFromEuler(newCamera);
  };

  useFrame(() => {
    if (aiming && camera.fov > 70) {
      camera.fov -= 5;
      camera.updateProjectionMatrix();
    }

    if (!aiming && camera.fov < 104) {
      camera.fov += 5;
      camera.updateProjectionMatrix();
    }
  });

  return (
    <PointerLockControls rget={[0, 0, 0]} args={[camera, gl.domElement]} />
  );
}

export default GunRecoil;

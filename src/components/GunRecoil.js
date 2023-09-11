import { PointerLockControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Euler } from "three";

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
    newCamera.y -= 10 * 0.002 * RECOIL * 0.5;
    newCamera.y = Math.max(_PI_2 - Math.PI, Math.min(_PI_2 - 0, newCamera.y));
    camera.quaternion.setFromEuler(newCamera);
  };

  useFrame((state) => {
    if (aiming) {
      // state.camera.position.z -= 5;
    }
    // console.log(time);
  });

  return (
    <PointerLockControls rget={[0, 0, 0]} args={[camera, gl.domElement]} />
  );
}

export default GunRecoil;

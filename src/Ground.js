import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import tile from "./assets/tile.jpg";
import { MAP_SIZE } from "./components/Wall";

export function Ground(props) {
  const texture = useTexture(tile);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return (
    <RigidBody {...props} type="fixed" colliders={false}>
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          map={texture}
          map-repeat={[MAP_SIZE, MAP_SIZE / 2]}
        />
      </mesh>
      <CuboidCollider args={[1000, 2, 1000]} position={[0, -2, 0]} />
    </RigidBody>
  );
}

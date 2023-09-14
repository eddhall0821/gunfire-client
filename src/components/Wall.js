import { useTexture } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import tile from "../assets/tile.jpg";
export const MAP_SIZE = 10;

export function Wall(props) {
  const texture = useTexture(tile);

  return (
    <RigidBody {...props} type="fixed" colliders="cuboid">
      <mesh
        receiveShadow
        position={[0, MAP_SIZE / 2, MAP_SIZE]}
        rotation={[0, Math.PI, 0]}
      >
        <boxGeometry args={[MAP_SIZE * 2, MAP_SIZE]} />
        <meshStandardMaterial
          map={texture}
          map-repeat={[MAP_SIZE, MAP_SIZE / 2]}
        />
      </mesh>

      <mesh
        receiveShadow
        position={[MAP_SIZE, MAP_SIZE / 2, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry args={[MAP_SIZE * 2, MAP_SIZE]} />
        <meshStandardMaterial
          map={texture}
          map-repeat={[MAP_SIZE, MAP_SIZE / 2]}
        />
      </mesh>

      <mesh
        receiveShadow
        position={[MAP_SIZE * -1, MAP_SIZE / 2, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry args={[MAP_SIZE * 2, MAP_SIZE]} />
        <meshStandardMaterial
          map={texture}
          map-repeat={[MAP_SIZE, MAP_SIZE / 2]}
        />
      </mesh>

      <mesh
        receiveShadow
        position={[0, MAP_SIZE / 2, MAP_SIZE * -1]}
        rotation={[0, 0, 0]}
      >
        <boxGeometry args={[MAP_SIZE * 2, MAP_SIZE]} />
        <meshStandardMaterial
          map={texture}
          map-repeat={[MAP_SIZE, MAP_SIZE / 2]}
        />
      </mesh>

      {/* <mesh
        receiveShadow
        position={[MAP_SIZE, MAP_SIZE / 2, 0]}
        rotation={[0, 0, 0]}
      >
        <boxGeometry args={[MAP_SIZE * 2, MAP_SIZE]} />
        <meshStandardMaterial
          map={texture}
          map-repeat={[MAP_SIZE, MAP_SIZE / 2]}
        />
      </mesh> */}

      {/* 천장 */}
      <mesh receiveShadow position={[0, 12, 0]} rotation-x={-Math.PI / 2}>
        <boxGeometry args={[100, 100]} />
        <meshStandardMaterial
          map={texture}
          map-repeat={[MAP_SIZE, MAP_SIZE / 2]}
        />
      </mesh>
    </RigidBody>
  );
}

export default Wall;

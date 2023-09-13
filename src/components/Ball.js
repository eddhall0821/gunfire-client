import { BallCollider, RigidBody } from "@react-three/rapier";
import { useState } from "react";

export function Ball(props) {
  const [hover, setHover] = useState(false);
  return (
    <RigidBody {...props} friction={1} colliders="ball">
      <mesh
        onPointerMove={() => setHover(true)}
        onPointerOut={() => {
          setHover(false);
        }}
      >
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial
          color={hover ? "red" : "green"}
          roughness={0.8}
          metalness={0.2}
        />
        <BallCollider args={[1, 0.5]} />
      </mesh>
    </RigidBody>
  );
}

export default Ball;

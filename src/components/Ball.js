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
        <sphereGeometry args={[props.size, 12, 12]} />
        <meshStandardMaterial
          color={hover ? "red" : "green"}
          roughness={0.8}
          metalness={0.2}
        />
        <BallCollider args={[props.size]} />
      </mesh>
    </RigidBody>
  );
}

export default Ball;

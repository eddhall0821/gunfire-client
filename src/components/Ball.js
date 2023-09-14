import { BallCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useState } from "react";
import { targetStore } from "../store/targetStore";

export function Targets(props) {
  const targets = targetStore((state) => state.targets);
  return targets.map((target) => (
    //x:-8~8
    //y:2~8
    //z:-3~-8
    <Ball
      position={target.position}
      key={target.id}
      {...props}
      ballId={target.id}
    />
  ));
}

export function Ball(props) {
  const [hover, setHover] = useState(false);
  const destroyTarget = targetStore((state) => state.destroyTarget);

  useEffect(() => {
    if (props.shooting && hover) {
      destroyTarget(props.ballId);
    }
  }, [props.shooting]);

  return (
    <RigidBody {...props} friction={1} colliders="ball">
      <mesh
        onPointerMove={() => setHover(true)}
        onPointerOut={() => {
          setHover(false);
        }}
      >
        <sphereGeometry args={[props.size, 24, 24]} />
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

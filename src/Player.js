import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d-compat";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import Axe from "./Axe";
import { a, useSpring } from "@react-spring/three";
import { socket } from "./components/SocketManager";
import MuzzleFlash from "./components/MuzzleFlash";

const RECOIL_INTERVAL = 1;
const SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotation = new THREE.Vector3();

const notAimingWeaponVector = [0.1, -0.35, 0.6];
const aimingWeaponVector = [0, -0.31, 0.6];

export function Player({
  lerp = THREE.MathUtils.lerp,
  aiming,
  shooting,
  weapon,
}) {
  const { weaponPosition } = useSpring({
    weaponPosition: aiming ? aimingWeaponVector : notAimingWeaponVector,
  });

  const weaponShooting = useSpring({
    scale: shooting ? [1, 1, 1] : [1, 1, 1],
    position: shooting ? [0, 0, 0.05] : [0, 0, 0],
    config: { duration: 100 },
  });

  const axe = useRef();
  const ref = useRef();
  const rapier = useRapier();
  const [, get] = useKeyboardControls();

  useFrame((state) => {
    const { forward, backward, left, right, jump } = get();
    const velocity = ref.current.linvel();
    // update camera
    // state.camera.rotation.z = 0;
    state.camera.position.set(...ref.current.translation());
    // update axe
    axe.current.children[0].rotation.x = lerp(
      axe.current.children[0].rotation.x,
      Math.sin((velocity.length() > 1) * state.clock.elapsedTime * 10) / 60,
      1
    );
    axe.current.rotation.copy(state.camera.rotation);
    axe.current.position
      .copy(state.camera.position)
      .add(state.camera.getWorldDirection(rotation).multiplyScalar(1));
    // movement
    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED + (aiming && -2))
      .applyEuler(state.camera.rotation);
    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });
    // jumping
    const world = rapier.world.raw();
    const ray = world.castRay(
      new RAPIER.Ray(ref.current.translation(), { x: 0, y: -1, z: 0 })
    );
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75;
    if (jump && grounded) ref.current.setLinvel({ x: 0, y: 7.5, z: 0 });

    const position = ref.current.translation();
    const euler = new THREE.Euler().setFromQuaternion(
      state.camera.quaternion,
      "YXZ"
    );

    socket.emit("move", {
      position,
      rotation: euler.y,
    });
  });
  return (
    <>
      <RigidBody
        ref={ref}
        colliders={false}
        mass={1}
        type="dynamic"
        position={[0, 10, 0]}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[0.75, 0.5]} />
      </RigidBody>
      <group
        ref={axe}
        // onPointerMissed={(e) => (axe.current.children[0].rotation.x = -0.5)}
      >
        <a.mesh position={weaponPosition}>
          <MuzzleFlash shooting={shooting} weapon={weapon} />
          <a.mesh
            scale={weaponShooting.scale}
            position={weaponShooting.position}
          >
            {weapon && <Axe />}
          </a.mesh>
        </a.mesh>
      </group>
    </>
  );
}

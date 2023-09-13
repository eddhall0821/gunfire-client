import { useTexture } from "@react-three/drei";
import flash from "../assets/flash.png";

const MuzzleFlash = ({ shooting, rotation }) => {
  const texture = useTexture(flash);
  return (
    <mesh position={[0, 0.2, -0.7]} rotation={[0, 0, Math.random()]}>
      <meshBasicMaterial
        opacity={0.6}
        visible={shooting}
        map={texture}
        transparent={true}
      />
      {shooting && (
        <pointLight position={[0, 0, 0]} distance={5} intensity={5} />
      )}
      <planeGeometry />
    </mesh>
  );
};

export default MuzzleFlash;

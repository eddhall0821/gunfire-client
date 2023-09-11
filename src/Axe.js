import { useGLTF } from "@react-three/drei";
import MPXUrl from "./assets/MPX.glb";

export default function Axe(props) {
  const { nodes, materials } = useGLTF(MPXUrl);
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2.022, 0, 0]} scale={0.05}>
        <group position={[0, 0, -1.098]} scale={1.19}>
          <mesh
            geometry={nodes.Front_Sight_Open_Ring.geometry}
            material={materials["Sights_Open_Ring_mat.001"]}
            position={[0, -6.732, -3.369]}
          >
            <mesh
              geometry={nodes.Front_Sight_KAC_Micro_Connector001.geometry}
              material={materials["Sights_Open_Ring_mat.001"]}
              position={[-0.441, -4.864, 0.161]}
            />
            <mesh
              geometry={nodes.Front_Sight_KAC_Micro_Screw001.geometry}
              material={materials["Sights_Open_Ring_mat.001"]}
              position={[-0.033, -7.008, 4.481]}
              scale={1.292}
            />
            <mesh
              geometry={nodes.Screw001.geometry}
              material={materials["Sights_Open_Ring_mat.001"]}
              position={[0, -0.48, 0.01]}
              rotation={[0, -1.571, 0]}
            >
              <mesh
                geometry={nodes.Sight001.geometry}
                material={materials["Sights_Open_Ring_mat.001"]}
                position={[-0.831, -0.24, 0]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.955}
              />
            </mesh>
          </mesh>
          <mesh
            geometry={nodes.Rear_Sight_Ring.geometry}
            material={materials["Sights_Open_Ring_mat.001"]}
            position={[0, 4.482, -3.369]}
          >
            <mesh
              geometry={nodes.Front_Sight_KAC_Micro_Connector.geometry}
              material={materials["Sights_Open_Ring_mat.001"]}
              position={[-0.441, -4.864, 0.161]}
            />
            <mesh
              geometry={nodes.Front_Sight_KAC_Micro_Screw.geometry}
              material={materials["Sights_Open_Ring_mat.001"]}
              position={[-0.033, -7.008, 4.481]}
              scale={1.292}
            />
            <mesh
              geometry={nodes.Screw.geometry}
              material={materials["Sights_Open_Ring_mat.001"]}
              position={[0, -0.48, 0.01]}
              rotation={[0, -1.571, 0]}
            >
              <mesh
                geometry={nodes.Sight.geometry}
                material={materials["Sights_Open_Ring_mat.001"]}
                position={[-0.831, -0.24, 0]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.955}
              >
                <mesh
                  geometry={nodes.Rear_Sight.geometry}
                  material={materials["Sights_Open_Ring_mat.001"]}
                  position={[0, 2.918, 3.051]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.64}
                />
              </mesh>
            </mesh>
          </mesh>
        </group>
        <mesh
          geometry={nodes.Barrel.geometry}
          material={materials["MPX_Barrel_Short_mat.001"]}
        >
          <mesh
            geometry={nodes.Flashhider.geometry}
            material={materials["MPX_Barrel_Short_mat.001"]}
          />
        </mesh>
        <mesh
          geometry={nodes.Bolt_Firing.geometry}
          material={materials["MPX_Body_mat.001"]}
        />
        <mesh
          geometry={nodes.Bolt_Release.geometry}
          material={materials["MPX_Body_mat.001"]}
        />
        <mesh
          geometry={nodes.Button_Left_1.geometry}
          material={materials["MPX_Body_mat.001"]}
        />
        <mesh
          geometry={nodes.Charging_Handle.geometry}
          material={materials["MPX_Body_mat.001"]}
        >
          <mesh
            geometry={nodes.Charging_Handle_Inner.geometry}
            material={materials["MPX_Body_mat.001"]}
          />
        </mesh>
        <mesh
          geometry={nodes.Component_Right_1.geometry}
          material={materials["MPX_Body_mat.001"]}
        />
        <mesh
          geometry={nodes.Fire_Selector.geometry}
          material={materials["MPX_Body_mat.001"]}
        />
        <mesh
          geometry={nodes.Mag_Release_Right.geometry}
          material={materials["MPX_Body_mat.001"]}
        />
        <mesh
          geometry={nodes.MPX_Handguard.geometry}
          material={materials["MPX_Handguard_Short_mat.001"]}
        >
          <mesh
            geometry={nodes.Rail_Long_Very_Bottom.geometry}
            material={materials["Handguard_Rails_mat.001"]}
          />
          <mesh
            geometry={nodes.Rail_Short_Very_Left.geometry}
            material={materials["Handguard_Rails_mat.001"]}
          />
          <mesh
            geometry={nodes.Rail_Short_Very_Right.geometry}
            material={materials["Handguard_Rails_mat.001"]}
          />
        </mesh>
        <mesh
          geometry={nodes.Pistol_Grip.geometry}
          material={materials["MPX_Body_mat.001"]}
        />
        <mesh
          geometry={nodes.Receiver_Upper.geometry}
          material={materials["MPX_Body_mat.001"]}
        >
          <mesh
            geometry={nodes.Component_Left_1.geometry}
            material={materials["MPX_Body_mat.001"]}
          />
          <mesh
            geometry={nodes.Component_Left_2.geometry}
            material={materials["MPX_Body_mat.001"]}
          />
          <mesh
            geometry={nodes.Dust_Cover_Mount.geometry}
            material={materials["MPX_Body_mat.001"]}
          >
            <mesh
              geometry={nodes.Dust_Cover.geometry}
              material={materials["MPX_Body_mat.001"]}
            />
          </mesh>
          <mesh
            geometry={nodes.Pic_Rail_Top.geometry}
            material={materials["MPX_Body_mat.001"]}
          />
        </mesh>
        <mesh
          geometry={nodes.Reciver_Lower.geometry}
          material={materials["MPX_Body_mat.001"]}
        >
          <mesh
            geometry={nodes.Bolt_1.geometry}
            material={materials["MPX_Body_mat.001"]}
          />
          <mesh
            geometry={nodes.Bolt_2.geometry}
            material={materials["MPX_Body_mat.001"]}
          />
          <mesh
            geometry={nodes.Full_Auto_Switch.geometry}
            material={materials["MPX_Body_mat.001"]}
          />
          <mesh
            geometry={nodes.Mount_Middle.geometry}
            material={materials["MPX_Body_mat.001"]}
          />
          <mesh
            geometry={nodes.Pic_Rail_Stock.geometry}
            material={materials["MPX_Body_mat.001"]}
          />
          <mesh
            geometry={nodes.Safe_Switch.geometry}
            material={materials["MPX_Body_mat.001"]}
          />
          <mesh
            geometry={nodes.trigger_guard.geometry}
            material={materials["MPX_Body_mat.001"]}
          />
        </mesh>
        <mesh
          geometry={nodes.Rotation_Joint.geometry}
          material={materials["MPX_Body_mat.001"]}
        />
        <mesh
          geometry={nodes.Trigger.geometry}
          material={materials["MPX_Body_mat.001"]}
        />
        <mesh
          geometry={nodes.Magazine_Standard.geometry}
          material={materials["MPX_Magazine_Standard_mat.001"]}
        />
        <mesh
          geometry={nodes.Arm_Left.geometry}
          material={materials["MPX_Stock_Collapsable_mat.001"]}
        />
        <mesh
          geometry={nodes.Arm_Right.geometry}
          material={materials["MPX_Stock_Collapsable_mat.001"]}
        />
        <mesh
          geometry={nodes.Bolt.geometry}
          material={materials["MPX_Stock_Collapsable_mat.001"]}
        />
        <mesh
          geometry={nodes.Butt_Pad.geometry}
          material={materials["MPX_Stock_Collapsable_mat.001"]}
        />
        <mesh
          geometry={nodes.Stock_Mount.geometry}
          material={materials["MPX_Stock_Collapsable_mat.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/axe.glb");

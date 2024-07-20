/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/cassette/scene.gltf");
  return (
    <group {...props} dispose={null} scale={50}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.039}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group
            position={[18.144, 1.188, 7.779]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes["fggggg001_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
              position={[-18.144, 7.778, -3.822]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/cassette/scene.gltf");

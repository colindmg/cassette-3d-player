/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "../public/models/cassettes/Scene";

function App() {
  return (
    <>
      <div className="w-screen h-screen">
        <Canvas>
          <ambientLight intensity={10} />
          {/* <pointLight position={[10, 10, 10]} /> */}
          <OrbitControls />

          <Model />
        </Canvas>
      </div>
    </>
  );
}

export default App;

import React, { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <>
      {/* when we want to use a 3d model we have to use this tag */}
      <mesh>
        {/* then we need to create a light, otherwise we can not see anything */}
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : 0.75}
          position={[0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </>
  );
};

const ComputersCanvas = () => {
  //use the useState hook to handle the state of the isMobile variable
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    //add a listener to change of the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    //set the initial state of the isMobile variable
    setIsMobile(mediaQuery.matches);

    //define a callback function to handle the change of the screen size
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    //add the callback function to handle the change of the screen size
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import Loader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./old_ninja/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
     
      <pointLight intensity={4}/>
     
      <primitive
      object={computer.scene}
      scale={isMobile ? 0.3 : 2.5}
      position={isMobile? [0, -2, -0.5]:[0,-0.5,-1]}
      rotation={[0, -0.2, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () =>{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{position: [20,6,6] , fov: 12}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<Loader/>}>
      <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 2} 
      minPolarAngle={Math.PI / 2}
      />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;
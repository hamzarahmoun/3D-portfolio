import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Loader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
     
      <pointLight intensity={4}/>
     
      <primitive
      object={computer.scene}
      scale={0.7}
      position={[0,-3.2,-1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () =>{
  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{position: [20,3,3] , fov: 25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<Loader/>}>
      <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 2} 
      minPolarAngle={Math.PI / 2}
      />
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;
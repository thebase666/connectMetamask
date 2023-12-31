"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ starsStop }) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / (15 * starsStop);
    ref.current.rotation.y -= delta / (20 * starsStop);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({ starsStop }) => {
  return (
    <div className=' w-full h-screen absolute bottom-0 top-0 left-0 right-0 z-[-1]  '>
      {/* #16023f #280f77 #1a024c */}
      <Canvas
        camera={{ position: [0, 0, 1] }}
        // className='bg-red-300'
      >
        <Suspense fallback={null}>
          <Stars starsStop={starsStop} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

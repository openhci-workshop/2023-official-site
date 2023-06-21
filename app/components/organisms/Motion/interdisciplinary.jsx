"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Trail, Float } from "@react-three/drei";

export default function Interdisciplinary() {
  function Point ({
    withSphere = false,
    sphereRadius, 
    pathColor="#cf50ba",
    pathRadius,
    sphereColor="cf50ba",
    speed,
    flatten = 1,
    ...props
  }) {
    const ref = useRef();

    useFrame((state) => {
      const t = state.clock.getElapsedTime() * speed;
      ref.current.position.set(Math.sin(t) * pathRadius / flatten, Math.cos(t) * pathRadius, 0)
    })

    return (
      <group {...props} >
        <Trail width={0.1} length={20} color={new THREE.Color(pathColor)} attenuation={(t) => t * t}>
          <mesh ref={ref}>
            { withSphere &&
              <>
                <sphereGeometry args={[sphereRadius]} />
                <meshBasicMaterial color={new THREE.Color(sphereColor)} />
              </>
            }
          </mesh>
        </Trail>
      </group>
    )
  }

  return (
    // <Canvas camera={{ position: [0, 0, 20] }}>
      // <Float speed={3} rotationIntensity={1.1} floatIntensity={1.1}>
      <>
        <Point position={[-3.7, 0, 0]} withSphere sphereRadius={0.8} sphereColor="#4158d0" pathRadius={4} pathColor="#6657d0" speed={-6}/> {/* 1 */}
        <Point position={[3.7, 0, 0]} withSphere sphereRadius={0.5} sphereColor="#e752ab" pathRadius={4} pathColor="#fa599c" speed={6}/> {/* 10 */}
        <Point position={[-3, 0, -0.5]} rotation={[0, -0.2, 0]} pathRadius={4.5} pathColor="#8255ce" speed={-6} flatten={1.2}/> {/* 2 */}
        <Point position={[3, 0, -0.5]} rotation={[0, 0.2, 0]} pathRadius={4.5} pathColor="#cf50ba" speed={6} flatten={1.3}/> {/* 9 */}
        <Point position={[-2, 0, -0.7]} rotation={[0, -0.4, 0]} pathRadius={4.8} pathColor="#8255ce" speed={-6} flatten={1.7}/> {/* 3 */}
        <Point position={[2, 0, -0.7]} rotation={[0, 0.4, 0]} pathRadius={4.8} pathColor="#cf50ba" speed={6} flatten={1.7}/> {/* 8 */}
        <Point position={[-1.5, 0, -1]} rotation={[0, -0.7, 0]} pathRadius={5.3} pathColor="#9a54cb" speed={-6} flatten={2.5}/> {/* 4 */}
        <Point position={[1.5, 0, -1]} rotation={[0, 0.7, 0]} pathRadius={5.3} pathColor="#af52c7" speed={6} flatten={2.5}/> {/* 7 */}
        <Point position={[-0.5, 0, -1]} rotation={[0, -1.2, 0]} pathRadius={6} pathColor="#9a54cb" speed={-6} flatten={4}/> {/* 5 */}
        <Point position={[0.5, 0, -1]} rotation={[0, 1.2, 0]} pathRadius={6} pathColor="#af52c7" speed={6} flatten={4}/> {/* 6 */}
      </>
      // </Float>
    // </Canvas>
  )
}

// export default ThreejsTest;

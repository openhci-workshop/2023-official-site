"use client";

import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Trail, Float } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

export default function Insight() {
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
    const [prevX, setPrevX] = useState(0)

    useFrame((state) => {
      const t = state.clock.getElapsedTime() * speed;

      let tan = Math.abs(Math.tan(t) * 6)
      let sin = Math.sin(t) * pathRadius

      let y = tan
      let x = sin

      if (tan < -6) {
        y = -6
        x = prevX
      } else if (tan > 6) {
        y = 6
        x = prevX
      }

      setPrevX(x)

      ref.current.position.set(x, y, 0)

      // ref.current.position.set(Math.sin(t) * pathRadius, calcY(t), 0)
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
      <>
        <Point pathRadius={1} pathColor="#66992c" speed={-6}/>
        <Point pathRadius={2} pathColor="#4b8d2d" speed={-6}/>
        <Point pathRadius={4} pathColor="#2f802e" speed={-6}/>
        <Point pathRadius={6} pathColor="#01732e" speed={6}/>
        <Point pathRadius={10} pathColor="#01732e" speed={-6}/>
        <Point pathRadius={1} pathColor="#f4d03f" speed={-6} rotation={[0, 0, degToRad(180)]}/>
        <Point pathRadius={2} pathColor="#d6c637" speed={-6} rotation={[0, 0, degToRad(180)]}/>
        <Point pathRadius={4} pathColor="#b8bc31" speed={-6} rotation={[0, 0, degToRad(180)]}/>
        <Point pathRadius={6} pathColor="#9c812e" speed={6} rotation={[0, 0, degToRad(180)]}/>
        <Point pathRadius={10} pathColor="#9c812e" speed={-6} rotation={[0, 0, degToRad(180)]}/>
      </>
    // </Canvas>
  )
}

// export default ThreejsTest;

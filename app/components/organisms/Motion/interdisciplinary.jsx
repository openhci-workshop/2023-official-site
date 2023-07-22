"use client";

import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Trail, Float } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

export default function Interdisciplinary() {
  function Point ({
    withSphere = false,
    sphereRadius, 
    pathColor=0XCF50BA,
    pathRadius,
    sphereColor=0XCF50BA,
    speed,
    flatten = 1,
    ...props
  }) {
    const pathRef = useRef();
    const sphereRef = useRef();
    const [currSphereRadius, setCurrSphereRadius] = useState(sphereRadius)

    useFrame((state) => {
      const t = state.clock.getElapsedTime() * speed;
      pathRef.current.position.set(Math.sin(t) * pathRadius / flatten, Math.cos(t) * pathRadius, 0)
      let rad = speed > 0 ? (t / 2 - degToRad(45)) : (t / 2 + degToRad(45))
      setCurrSphereRadius((Math.cos(rad)) * sphereRadius)
    })

    return (
      <group {...props} >
        <Trail width={0.1} length={5} color={new THREE.Color(pathColor)} attenuation={(t) => t * t}>
          <mesh ref={pathRef}>
            { withSphere &&
              <>
                <sphereGeometry args={[currSphereRadius]} ref={sphereRef} />
                <meshBasicMaterial color={new THREE.Color(sphereColor)} />
              </>
            }
          </mesh>
        </Trail>
      </group>
    )
  }

  return (
      <>
        <Point position={[-3.7, 0, 0]} withSphere sphereRadius={0.8} sphereColor={0X4158D0} pathRadius={4} pathColor={0X6657d0} speed={-6}/>
        <Point position={[3.7, 0, 0]} withSphere sphereRadius={0.5} sphereColor={0XE752AB} pathRadius={4} pathColor={0XFA599C} speed={6}/>
        <Point position={[-3, 0, -0.5]} rotation={[0, -0.2, 0]} pathRadius={4.5} pathColor={0X8255CE} speed={-6} flatten={1.2}/>
        <Point position={[3, 0, -0.5]} rotation={[0, 0.2, 0]} pathRadius={4.5} pathColor={0XCF50BA} speed={6} flatten={1.3}/>
        <Point position={[-2, 0, -0.7]} rotation={[0, -0.4, 0]} pathRadius={4.8} pathColor={0X8255CE} speed={-6} flatten={1.7}/>
        <Point position={[2, 0, -0.7]} rotation={[0, 0.4, 0]} pathRadius={4.8} pathColor={0XCF50BA} speed={6} flatten={1.7}/>
        <Point position={[-1.5, 0, -1]} rotation={[0, -0.7, 0]} pathRadius={5.3} pathColor={0X9A54CB} speed={-6} flatten={2.5}/>
        <Point position={[1.5, 0, -1]} rotation={[0, 0.7, 0]} pathRadius={5.3} pathColor={0XAF52C7} speed={6} flatten={2.5}/>
        <Point position={[-0.5, 0, -1]} rotation={[0, -1.2, 0]} pathRadius={6} pathColor={0X9A54CB} speed={-6} flatten={4}/>
        <Point position={[0.5, 0, -1]} rotation={[0, 1.2, 0]} pathRadius={6} pathColor={0XAF52C7} speed={6} flatten={4}/>
      </>
  )
}
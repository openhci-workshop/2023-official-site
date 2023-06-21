"use client"

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { extend, Canvas, useFrame } from '@react-three/fiber'
extend({ Canvas })
import { Trail, Float, Line, Sphere } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

export default function Academic() {
  return (
    <>
      {/* <Canvas camera={{ position: [0, 0, 10] }}>
      <color attach="background" args={['black']} /> */}
      <Float speed={5} rotationIntensity={1.1} floatIntensity={1.1}>
        <Atom />
      </Float>
      {/* <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
    </Canvas> */}
    </>
  )
}

function Atom(props) {
  // const points = useMemo(() => new THREE.EllipseCurve(0, 0, 5, 1, 0, 2 * Math.PI, false, 0).getPoints(100), [])
  return (
    <group {...props}>
      {/* <Line worldUnits points={points} color="white" lineWidth={0.1} />
      <Line worldUnits points={points} color="white" lineWidth={0.1} rotation={[0, 0, 0.8]} />
      <Line worldUnits points={points} color="white" lineWidth={0.1} rotation={[0, 0, -0.8]} />
      <Line worldUnits points={points} color="white" lineWidth={0.1} rotation={[0, 0, 1.6]} /> */}
      <Electron position={[0, 0, 0.5]} speed={6} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, 0.8]} speed={6} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, -0.8]} speed={6} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, 1.6]} speed={6} />
      <ElectronWithSphere radius={5.5} color={0xF4D03F} position={[0, 0, 0.5]} speed={6} />
      <Electron radius={5.5} color={0xF4D03F} position={[0, 0, 0.5]} rotation={[0, 0, 0.9]} speed={6} />
      <Electron radius={5.5} color={0xF4D03F} position={[0, 0, 0.5]} rotation={[0, 0, -0.9]} speed={6} />
      <Electron radius={5.5} color={0xF4D03F} position={[0, 0, 0.5]} rotation={[0, 0, 1.5]} speed={6} />
      <Electron radius={5} color={0x01732E} position={[0, 0, 0.5]} speed={6} />
      <ElectronWithSphere radius={5} color={0x01732E} position={[0, 0, 0.5]} rotation={[0, 0, 0.8]} speed={6} />
      <Electron radius={5} color={0x01732E} position={[0, 0, 0.5]} rotation={[0, 0, -0.8]} speed={6} />
      <Electron radius={5} color={0x01732E} position={[0, 0, 0.5]} rotation={[0, 0, 1.6]} speed={6} />
      <Sphere args={[0.55, 64, 64]}>
      <meshBasicMaterial color={[5, 5, 30]} toneMapped={false} />
      </Sphere>
    </group>
  )
}

function Electron({ radius = 6.5, speed = 5, color = 0xffffff, ...props }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0)
  })
  return (
    <group {...props}>
      <Trail width={0.5} length={10} color={new THREE.Color(color)} attenuation={(t) => t * t}>
        <mesh ref={ref}>
        </mesh>
      </Trail>
    </group>
  )
}

function ElectronWithSphere({ radius = 6.5, speed = 5, color = 0xffffff, ...props }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0)
  })
  return (
    <group {...props}>
      <Trail width={0.5} length={10} color={new THREE.Color(color)} attenuation={(t) => t * t}>
        <mesh ref={ref}>
          <sphereGeometry args={[0.15]}/>
          <meshBasicMaterial color={color} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  )
}
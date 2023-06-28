"use client"
import * as THREE from "three";
import Box from "@/components/organisms/Motion/box";
import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer, OrbitControls, Html } from '@react-three/drei'
import { useControls } from 'leva'
import Academic from "@/components/organisms/Motion/academic";
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Interdisciplinary from "@/components/organisms/Motion/interdisciplinary";
import Insight from "@/components/organisms/Motion/insight";

export const Threejs = () => {
  // return (
  //   <div className="h-screen">
  //     <Insight />
  //     {/* <ThreejsPath /> */}
  //   </div>
  // )

  return (
    <div className="h-screen">
      <reference path="../node_modules/@types/three/index.d.ts" />
      <Canvas orthographic camera={{ position: [6, -5, 10], zoom: 60 }}>
        <color attach="background" args={['#212121']} />
        <ambientLight />
        <directionalLight castShadow intensity={0.6} position={[0, 0, 10]} />
        <OrbitControls makeDefault />
        <Scene scale={0.05} />
        {/* <Environment resolution={256}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
              <Lightformer key={i} form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
            ))}
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]} />
            <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
          </group>
        </Environment> */}
      </Canvas>
    </div>
  )
}

function Scene({ ...props }) {
  const config = useControls({
    backside: false,
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 256, min: 64, max: 2048, step: 64 },
    transmission: { value: 0.95, min: 0, max: 1 },
    roughness: { value: 0.5, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 0.1, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
    thickness: { value: 10, min: 0, max: 200, step: 0.01 },
    backsideThickness: { value: 10, min: 0, max: 200, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 1, min: 0, max: 1 },
    anisotropy: { value: 1, min: 0, max: 10, step: 0.01 },
    distortion: { value: 0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.2, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
    attenuationColor: '#ffffff',
    color: '#ffffff',
  })
  return (
    <>
      <group {...props}>
        <Box color="#FF718F" config={config} />
        <group position={[42, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={5}>
          <Academic />
        </group>
        <group position={[0, 0, 48]} rotation={[0, 0, 0]} scale={5}>
          <Interdisciplinary />
        </group>
        <group position={[0, 50, 0]} rotation={[Math.PI / 2, 0, 0]} scale={35}>
          <Insight />
        </group>
        {/* <Html
          position={[0, 0, 42]}
          transform
          distanceFactor={1}
          rotation-x={0}
          rotation-y={0}
          rotation-z={0}
          // scale={10}
        >
          <iframe className="mx-auto" width={800} height={800} src="/insight/index.html" />
        </Html>  */}
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
        {/* <PivotControls scale={200} activeAxes={[true, true, false]} offset={[0, 0, 100]}>
          <Shape name="Torus" float={0} color="#FF718F" config={config} />
        </PivotControls> */}
        {/* <Shape name="Rectangle 6" color="#FF718F" config={config} position={[-700.64, 343.77, -621.72]} />
        <Shape name="Rectangle 5" color="#29C1A2" config={config} position={[-458.87, 411.05, -435.92]} />
        <Shape name="Rectangle 4" color="#FF9060" config={config} position={[0.66, 47, -435.92]} />
        <Shape name="Rectangle 3" color="#823FFF" config={config} position={[-348.74, -162.23, -167.36]} />
        <Shape name="Rectangle 2" color="skyblue" config={config} position={[242.6, 207, -273.39]} /> */}
      </group>
    </>
  )
}

export default Threejs;
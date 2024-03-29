"use client"
import * as THREE from "three";
import Box from "@/components/organisms/Motion/box";
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Interdisciplinary from "./interdisciplinary";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { forwardRef, useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const XXL = 1280
const XL = 1096
const LG = 980
const MD = 768

export const Threejs = () => {
  const meshRef = useRef()
  const [initX, setInitX] = useState(7)
  const [initY, setInitY] = useState(0)
  const [maxPos, setMaxPos] = useState(10)
  const [scale, setScale] = useState(1)
  const [mobile, setMobile] = useState(false)

  const onResize = () => {
    setMobile(false)
    if (window.innerWidth <= MD) {
      setInitX(2)
      setInitY(-3)
      setMaxPos(3)
      setScale(0.7)
      setMobile(true)
    }
    else if (window.innerWidth <= LG) {
      setInitX(4)
      setInitY(-2)
      setMaxPos(5)
      setScale(1)
    }
    else if (window.innerWidth <= XL) {
      setInitX(6)
      setInitY(0)
      setMaxPos(7)
      setScale(1)
    }
    else if (window.innerWidth <= XXL) {
      setInitX(7)
      setInitY(0)
      setMaxPos(10)
      setScale(1.2)
    }
    else {
      setInitX(8)
      setInitY(-0.5)
      setMaxPos(10)
      setScale(1.4)
    }
  }

  useEffect(() => {
    onResize()

    setTimeout(() => {
      let firstTrigger = {scrollTrigger: {
        trigger: "#header",
        // markers: true,
        start: "top 6%",
        end: "bottom 0%",
        scrub: 0
      }}
  
      const firstTl = gsap.timeline(firstTrigger);
      firstTl.add("first")
            .to(meshRef.current?.rotation, {x: Math.PI / 4, y: Math.PI / 6, z: -Math.PI / 6}, "first")
            .to(meshRef.current?.position, {x: -maxPos, y: 2}, "first")
  
      let secondTrigger = {scrollTrigger: {
        trigger: "#about",
        // markers: true,
        start: "top 0%",
        end: "bottom 0%",
        scrub: 0
      }}

  
      const secondTl = gsap.timeline(secondTrigger);
      secondTl.add("second")
            .to(meshRef.current?.rotation, {x: -Math.PI / 2, y: Math.PI / 6, z: Math.PI / 6}, "second")
            .to(meshRef.current?.position, {x: maxPos, y: -2}, "second")

      let thirdTrigger = {scrollTrigger: {
        trigger: "#organizers",
        // markers: true,
        start: "top 0%",
        end: "bottom 0%",
        scrub: 0
      }}
  
      const thirdTl = gsap.timeline(thirdTrigger);
      thirdTl.add("third")
            .to(meshRef.current?.rotation, {x: Math.PI / 2, y: -Math.PI / 6, z: Math.PI / 4}, "third")
            .to(meshRef.current?.position, {x: -maxPos, y: 2}, "third")
    }, 1500)

    window.addEventListener("resize", onResize);

    return(() => {
      window.removeEventListener("resize", onResize)
    })
  }, [initX, initY, maxPos, scale])

  return (
    <Canvas orthographic camera={{ position: [6, -5, 10], zoom: 60 }}>
      <ambientLight />
      <directionalLight castShadow intensity={0.6} position={[0, 0, 10]} />
      <Scene scale={scale} ref={meshRef} position={[initX, initY, 0]} mobile={mobile} />
    </Canvas>
  )
}

// eslint-disable-next-line react/display-name
export const Scene = forwardRef(function(props, ref) {

  const config = {
    backside: false,
    samples: 16,
    resolution: 1024,
    transmission: 0.98,
    roughness: 0.1,
    clearcoat: 0.1,
    clearcoatRoughness: 0.1,
    thickness: 1,
    backsideThickness: 10,
    ior: 1.5,
    chromaticAberration: 1,
    anisotropy: 1,
    distortion: 0,
    distortionScale: 0.2,
    temporalDistortion: 0,
    attenuationDistance: 0.5,
    attenuationColor: '#D165B2',
    color: '#D165B2',
  }

  return (
    <group {...props} ref={ref}>
      <Box color="#FF718F" config={config} />

      <group position={[2.001, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.2}>
        <Html
          transform
          occlude
        >
          <div style={{backgroundColor: "transparent"}}>
            <iframe width={800} height={800} className="bg-transparent" src={props.mobile ? "./explore/explore.png" : "./explore/main.html"} />
          </div>
        </Html>
      </group>

      <group position={[0, -2, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.2}>
        <Interdisciplinary />
      </group>

      <group position={[0, 0, 2.001]} rotation={[0, 0, 0]} scale={0.2}>
        <Html
          transform
          occlude
        >
          <div style={{backgroundColor: "transparent"}}>
            <iframe width={800} height={800} className="bg-transparent" src="./creative/main.html" />
          </div>
        </Html>
      </group>

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
    </group>
  )
})

export default Threejs;

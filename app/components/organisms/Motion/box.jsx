import { MeshTransmissionMaterial } from '@react-three/drei'

export default function Box({ config }) {
  return (
    <>
      <mesh>
        <boxGeometry args={[100, 100, 100]}/>
        <MeshTransmissionMaterial {...config} color="#FFFFFF" toneMapped={false} />
      </mesh>
    </>
  )
}
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default  function Gosth(props) {
  const { nodes, materials } = useGLTF('assets/models/goshVillan.glb')
  return (
    <group {...props} dispose={null} >
      <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
      <mesh geometry={nodes.toge.geometry} material={materials.Material} />
      <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
      <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
    </group>
  )
}

useGLTF.preload('/goshVillan.glb')
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Caballero(props) {
  const { nodes, materials } = useGLTF('assets/models/caracterKnigth.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.HelmetDevil.geometry}
        material={materials['AnimatedTexture (SecondC(']}
        position={[-0.061, 2, 0]}
      />
      <mesh
        geometry={nodes.Helmet.geometry}
        material={materials.BasciColor4}
        position={[-0.061, 2, 0]}
      />
      <mesh
        geometry={nodes.Eyes.geometry}
        material={materials['AnimatedTexture (SecondC(']}
        position={[-0.061, 2, 0]}
      />
      <mesh
        geometry={nodes.Body.geometry}
        material={materials.AnimatedTexture}
        position={[-0.061, 2, 0]}
      />
      <mesh
        geometry={nodes.Legs.geometry}
        material={materials.BasciColor4}
        position={[-0.061, 2, 0]}
      />
      <mesh
        geometry={nodes.LegsDe.geometry}
        material={materials['AnimatedTexture (SecondC(']}
        position={[-0.061, 2, 0]}
      />
      <mesh
        geometry={nodes.Chest.geometry}
        material={materials.BasciColor4}
        position={[-0.061, 2, 0]}
      />
      <mesh
        geometry={nodes.DetailsChest.geometry}
        material={materials['AnimatedTexture (SecondC(']}
        position={[-0.061, 2, 0]}
      />
      <mesh
        geometry={nodes.Back.geometry}
        material={materials.BasciColor4}
        position={[-0.061, 2, 0]}
      />
      <mesh
        geometry={nodes.sholders.geometry}
        material={materials['AnimatedTexture (SecondC(']}
        position={[-0.061, 2, 0]}
      />
      <mesh
        geometry={nodes.SholdDe.geometry}
        material={materials.BasciColor4}
        position={[-0.061, 2, 0]}
      />
      <mesh
        geometry={nodes.addons.geometry}
        material={materials['AnimatedTexture (SecondC(']}
        position={[-0.061, 2, 0]}
      />
      <mesh
        geometry={nodes.diamont.geometry}
        material={materials.BasciColor4}
        position={[-0.061, 2, 0]}
      />
    </group>
  )
}

useGLTF.preload('/caracterKnigth.glb')
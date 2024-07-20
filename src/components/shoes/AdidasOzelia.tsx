/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 scene.gltf -t -o scene.tsx 
Author: Romain DI CORATO (https://sketchfab.com/dicorato.romain)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/adidas-ozelia-bd99ae674f724ca690198f22764081f8
Title: Adidas Ozelia
*/

import * as THREE from 'three'
import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Baked_Baked_0: THREE.Mesh
    Baked_Baked_0_1: THREE.Mesh
    Baked_Baked_0_2: THREE.Mesh
    Baked_Baked_0_3: THREE.Mesh
    Baked_Baked_0_4: THREE.Mesh
  }
  materials: {
    Baked: THREE.MeshStandardMaterial
  }
  // animations: GLTFAction[]
}

export function AdidasOzelia(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/adidas-ozelia/scene.gltf') as GLTFResult
  
  const [materialState, setMaterialState] = useState(
    {
      materials: {
        baked_0: "#fff000",
        baked_01: "#fff000",
        baked_02: "#fff000",
        baked_03: "#fff000",
        baked_04: "#fff000", 
      }
    }
  )

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-0.903, -12.305, -1.715]} rotation={[-Math.PI / 2, 0, 0]} scale={50}>
          <mesh material-color = {materialState.materials.baked_0} geometry={nodes.Baked_Baked_0.geometry} material={materials.Baked} />
          <mesh material-color = {materialState.materials.baked_01} geometry={nodes.Baked_Baked_0_1.geometry} material={materials.Baked} />
          <mesh material-color = {materialState.materials.baked_02} geometry={nodes.Baked_Baked_0_2.geometry} material={materials.Baked} />
          <mesh material-color = {materialState.materials.baked_03} geometry={nodes.Baked_Baked_0_3.geometry} material={materials.Baked} />
          <mesh material-color = {materialState.materials.baked_04} geometry={nodes.Baked_Baked_0_4.geometry} material={materials.Baked} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

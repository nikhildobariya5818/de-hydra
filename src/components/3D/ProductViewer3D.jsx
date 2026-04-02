'use client'

import { useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PresentationControls, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProductViewer3D({ productImage, productName }) {
  const [show3D, setShow3D] = useState(false)

  if (!show3D) {
    return (
      <motion.button
        onClick={() => setShow3D(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
      >
        🔄 View in 3D
      </motion.button>
    )
  }

  return (
    <motion.div
      className="relative w-full h-96 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl overflow-hidden border-2 border-teal-200"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <PresentationControls
          speed={1.5}
          global
          zoom={1}
          rotation={[0.13, 0.1, 0]}
        >
          <Float rotationIntensity={0.4} floatIntensity={0.5}>
            {/* Cube representing product */}
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color="#1A8A8A"
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          </Float>
        </PresentationControls>
      </Canvas>

      {/* Close button */}
      <motion.button
        onClick={() => setShow3D(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-4 right-4 bg-white text-teal-700 font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-10"
      >
        ✕
      </motion.button>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
        Drag to rotate • Scroll to zoom
      </div>
    </motion.div>
  )
}

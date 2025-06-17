import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    // 🔧 Fix rotation for specific models
    if (model.name === "Wordpress") {
      scene.scene.rotation.x = 10/-Math.PI; // Stand it upright
    }
      if ( model.name === "JavaScript") {
      scene.scene.rotation.x = -Math.PI/-Math.PI; // Stand it upright
    }


  if (model.name === "TailwindCSS") {
      scene.scene.rotation.x = -Math.PI/-Math.PI/7; // Stand it upright   
  }
  //  // 🎨 Color fix for specific mesh
  //   if (model.name === "CSS") {
  //     scene.scene.rotation.x = -Math.PI/-Math.PI; // Stand it upright
  //     scene.scene.traverse((child) => {
  //       if (child.isMesh && child.name === "Object_5") {
  //         child.material = new THREE.MeshStandardMaterial({ color: "white" });
  //       }
  //     });
  //   }
  }, [scene, model.name]);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation} position={model.position || [0, 0, 0]}>
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;

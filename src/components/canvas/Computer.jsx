import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Computer = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  computer.scene.traverse((child) => {
    if (child.isMesh) {
      if (!child.geometry || !child.geometry.attributes.position) {
        console.warn("Removing broken mesh:", child.name);
        child.parent.remove(child); // remove broken mesh
      }
    }
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;

      setIsMobile(width < 768); // mobile
      setIsTablet(width >= 768 && width < 1024); // tablet
    };

    checkDevice(); // run once on mount

    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  console.log(computer.scene);

  return (
    <group>
      <hemisphereLight intensity={1.8} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : isTablet ? 0.6 : 0.75}
        position={[0, -3.1, -0.8]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputerCanvas = () => {
  const [canvasKey, setCanvasKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setCanvasKey((prev) => prev + 1); // force re-render only if device changes
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Canvas
      key={canvasKey}
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;

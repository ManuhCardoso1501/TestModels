import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { useRef } from "react";
import Caballero from "./Caballero";

const Experiencie = () => {
    const boxRef2 = useRef(null);
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls target={[0, 1.5, 0]} enableZoom={true} enablePan={true} />
      <ambientLight intensity={1} />
      <Caballero />
      <Suspense fallback={null}>
      </Suspense>
    </>
  );
};

export default Experiencie;

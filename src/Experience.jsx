import { OrbitControls, Tube } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { useRef } from "react";
import Caballero from "./elemets/Caballero";
import { WorldLevel4 } from "./elemets/WorldLevel4";
import Envioriments from "./Envioriments";
import Level4Ligths from "./Level4Ligths";
import Golemmonk from "./elemets/Golemmonk";
import Gosth from "./elemets/Gosth";
import { Physics } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

const Experiencie = () => {
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls target={[0, 1.5, 0]} enableZoom={true} enablePan={true} />
      <Level4Ligths/>
      <Physics debug = {true}>
        <WorldLevel4 />
      </Physics>
      <Envioriments />
      <Caballero />
      <Gosth position= {[-4,55,-503]} scale = {[5.4,5.4,5.4]} />
      {/* <Golemmonk position= {[-4,35,-503]} scale = {[5.4,5.4,5.4]}/> */}
      <Suspense fallback={null}></Suspense>
    </>
  );
};

export default Experiencie;

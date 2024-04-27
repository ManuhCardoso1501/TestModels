import "./styles.css";
import {createRoot} from "react-dom/client";
import Experiencie from "./Experience";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";


const root = createRoot(document.getElementById("root"));

root.render(
<>
    <Canvas
        camera={{position:[0, 57, -222],rotation:[0,90,0]}}
        shadows={true}
    >
    <Experiencie/>
    </Canvas>
    <Loader/>
</>
    
)
import "./styles.css";
import {createRoot} from "react-dom/client";
import Experiencie from "./Experience";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";


const root = createRoot(document.getElementById("root"));

root.render(
<>
    <Canvas
        camera={{position:[2, 2, 0],rotation:[0,0,0]}}
        shadows={true}
    >
    <Experiencie/>
    </Canvas>
    <Loader/>
</>
    
)
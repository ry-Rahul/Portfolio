import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";

function Sky({isRotating}) {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_,delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.15*delta;
        }
    }
    );
    return (
        // In mesh we are going to use primitive element because we are not using any 3d model here
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    );
}

export default Sky;

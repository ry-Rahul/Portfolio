import React, { useEffect, useRef } from "react";
import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Bird() {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions["Take 001"].play();
    }, []);

    useFrame(({ clock, camera }) => {
        // update the y position of the bird mesh based on a sine wave
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        // check if the bird is in front of or behind the camera
        if (birdRef.current.position.x > camera.position.x + 10) {
            // change direction of the bird to backward and rotate the bird 180 degree on y axis
            birdRef.current.rotation.y = Math.PI;
        } else if (birdRef.current.position.x < camera.position.x - 10) {
            // change the direction of the bird to forward and rotate the bird 0 degree on y axis
            birdRef.current.rotation.y = 0;
        }

        //update the x and z position of the bird mesh based on the direction of the bird
        if (birdRef.current.rotation.y === 0) {
            // move the bird forward
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            // move the bird backward
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    });

    return (
        <>
            <mesh
                position={[-5, 2, 1]}
                scale={[0.003, 0.003, 0.003]}
                ref={birdRef}
            >
                <primitive object={scene} />
            </mesh>
            ;
        </>
    );
}

export default Bird;

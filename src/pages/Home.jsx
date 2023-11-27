import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

import sakura from "../assets/sakura.mp3";
import { soundon,soundoff } from "../assets/icons";

function Home() {
    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlayingMusic]);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let islandRotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, islandRotation];
    };
    const [islandScale, islandPosition, islandRotation] =
        adjustIslandForScreenSize();

    // set Plane position
    const adjustPlaneForScreenSize = () => {
        let planeScale, planePosition;

        if (window.innerWidth < 768) {
            planeScale = [1.5, 1.5, 1.5];
            planePosition = [0, -1.5, 0];
        } else {
            planeScale = [3, 3, 3];
            planePosition = [0, -4, -4];
        }

        return [planeScale, planePosition];
    };
    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    return (
        <>
            <section className="w-full h-screen relative">
                <div className="absolute top-28 left-0 right-0 z-10 flex  items-center justify-center  border-red-400">
                    {currentStage && <HomeInfo currentStage={currentStage} />}
                </div>

                <Canvas
                    className={`w-full h-screen relative ${
                        isRotating ? "cursor-grabbing" : "cursor-grab"
                    }`}
                    camera={{ near: 0.1, far: 1000 }}
                >
                    <Suspense fallback={<Loader />}>
                        <directionalLight
                            position={[1, 1, 1]}
                            intensity={1.5}
                        />
                        <ambientLight intensity={0.5} />

                        {/* hemisphereLight illuminate the scene with gradient */}
                        <hemisphereLight
                            skyColor="#b1e1ff"
                            groundColor="#000000"
                            intensity={1}
                        />
                        {/* Bird */}
                        <Bird />
                        {/* Sky */}
                        <Sky isRotating={isRotating} />
                        <Island
                            position={islandPosition}
                            scale={islandScale}
                            rotation={islandRotation}
                            isRotating={isRotating}
                            setIsRotating={setIsRotating}
                            setCurrentStage={setCurrentStage}
                        />
                        {/* Plane */}
                        <Plane
                            isRotating={isRotating}
                            position={planePosition}
                            scale={planeScale}
                            rotation={[0, 20, 0]}
                        />
                    </Suspense>
                </Canvas>

                <div className="absolute bottom-2 left-2">
                    <img src={!isPlayingMusic ? soundoff : soundon} alt="sound"
                        className="w-10 h-10 cursor-pointer"
                        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    />
                </div>
            </section>
        </>
    );
}

export default Home;

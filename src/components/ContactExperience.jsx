import React from 'react'
import {Canvas} from "@react-three/fiber";
import {Computer} from "./models/Computer-optimized.jsx";
import {Environment, OrbitControls, SpotLight} from "@react-three/drei";

const ContactExperience = () => {
    return (
        <Canvas camera={{position:[0,3,7],fov:45}} shadows>

            <ambientLight intensity={0.5} color="#fff436" />


            <directionalLight position={[5,5,3]} intensity={2.5} color="#fff436" />
            <directionalLight position={[5,9,1]} intensity={2.5} color="#ffd9b3" castShadow />


            <SpotLight
            position={[-5,5,5]}
            angle={0.15}
            penumbra={1}
            intensity={1}

            />


            <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            />


            <group scale={0.03} position={[0,-1.5,-2]} castShadow>
                <Computer />
            </group>



            <group scale={[1,1,1]}>
                <mesh receiveShadow position={[0,-1.5,0]} rotation={[-Math.PI / 2,0,0]}>
                    <planeGeometry args={[30,30]}/>
                    <meshStandardMaterial color="#ffd9b3" />
                </mesh>
            </group>


        </Canvas>
    )
}
export default ContactExperience

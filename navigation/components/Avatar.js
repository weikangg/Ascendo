import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

function Model(props) {
    const obj = useLoader(
        OBJLoader,
        require("../.././assets/john_doe/model.obj")
    );

    const mesh = useRef();

    useFrame((state, delta) => {
        mesh.current.rotation.y += delta;
    });

    return (
        <mesh ref={mesh} position={[0, -2, 0]}>
            <primitive object={obj} scale={3.1} />
        </mesh>
    );
}

export default function Avatar() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </Canvas>
    );
}

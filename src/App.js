import React from "react";
import "./styles.css";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Stars } from "drei";

function App() {
  return (
    <Canvas camera={{ position: [250, 70, 30] }}>
      <OrbitControls />
      <Stars />
      <pointLight intensity={3} />

      <ambientLight intensity={0.5} />
      <Sun />
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      <Jupiter />
    </Canvas>
  );
}

const Sun = () => {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry attach="geometry" args={[10, 16, 16]} />
        <meshLambertMaterial attach="material" color="#fda600" />
      </mesh>
    </>
  );
};

const Mercury = () => {
  const mercury = React.useRef();
  let angle = 0;

  useFrame(() => {
    angle += (Math.PI / 180) * 2;
    mercury.current.position.x += 0.9 * Math.sin(angle);
    mercury.current.position.z += 0.9 * Math.cos(angle);
  });
  return (
    <>
      <mesh position={[-24, 0, 0]} ref={mercury}>
        <sphereGeometry attach="geometry" args={[0.5, 16, 16]} />
        <meshLambertMaterial attach="material" color="grey" />
      </mesh>
    </>
  );
};

const Venus = () => {
  const venus = React.useRef();
  let angle = 0;

  useFrame(() => {
    angle += (Math.PI / 180) * 2;
    venus.current.position.x += 1.6 * Math.sin(angle);
    venus.current.position.z += 1.6 * Math.cos(angle);
  });
  return (
    <>
      <mesh position={[-44, 0, 0]} ref={venus}>
        <sphereGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#c1440e" />
      </mesh>
    </>
  );
};

const Earth = () => {
  const earth = React.useRef();
  let angle = 0;

  useFrame(() => {
    angle += (Math.PI / 180) * 2;
    earth.current.position.x += 2.4 * Math.sin(angle);
    earth.current.position.z += 2.4 * Math.cos(angle);
  });
  return (
    <>
      <mesh position={[-60, 0, 0]} ref={earth}>
        <sphereGeometry attach="geometry" args={[1.2, 16, 16]} />
        <meshLambertMaterial attach="material" color="blue" />
      </mesh>
    </>
  );
};

const Mars = () => {
  const mars = React.useRef();
  let angle = 0;

  useFrame(() => {
    angle += (Math.PI / 180) * 2;
    mars.current.position.x += 4 * Math.sin(angle);
    mars.current.position.z += 4 * Math.cos(angle);
  });
  return (
    <>
      <mesh position={[-90, 0, 0]} ref={mars} args={[0.8, 16, 16]}>
        <sphereBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="red" />
      </mesh>
    </>
  );
};

const Jupiter = () => {
  const jupiter = React.useRef();
  let angle = 0;

  useFrame(() => {
    angle += (Math.PI / 180) * 2;
    jupiter.current.position.x += 5 * Math.sin(angle);
    jupiter.current.position.z += 5 * Math.cos(angle);
  });
  return (
    <>
      <mesh position={[-110, 0, 0]} ref={jupiter}>
        <sphereBufferGeometry attach="geometry" args={[3, 16, 16]} />
        <meshLambertMaterial attach="material" color="#c1440e" />
      </mesh>
    </>
  );
};

export default App;
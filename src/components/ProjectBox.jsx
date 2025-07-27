import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { resumeData } from "../data/resumeData";

export default function ProjectBox({ position }) {
  const mesh = useRef();

  // Rotate the box slowly
  useFrame(() => (mesh.current.rotation.y -= 0.01));

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[3, 2, 1]} />
      <meshStandardMaterial color="lightgreen" />
      <Html position={[0, 0, 0.6]} center>
        <div className="bg-white p-2 rounded shadow-md text-sm w-60">
          <h2 className="font-bold mb-1">Projects</h2>
          {resumeData.projects.map((proj, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-semibold">{proj.name}</p>
              <p className="text-xs">{proj.duration}</p>
              <p className="text-xs italic">{proj.tech}</p>
              <p className="text-xs">{proj.desc}</p>
            </div>
          ))}
        </div>
      </Html>
    </mesh>
  );
}

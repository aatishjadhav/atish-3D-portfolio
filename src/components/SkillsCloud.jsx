import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { resumeData } from "../data/resumeData";

export default function SkillsCloud({ position }) {
  const mesh = useRef();

  // Slowly rotate the skill sphere
  useFrame(() => (mesh.current.rotation.y += 0.005));

  return (
    <mesh position={position} ref={mesh}>
      <sphereGeometry args={[1.8, 32, 32]} />
      <meshStandardMaterial color="tomato" wireframe />
      <Html position={[0, 0, 1.2]} center>
        <div className="bg-white p-2 rounded shadow-md text-sm w-48">
          <h2 className="font-bold mb-1">Skills</h2>
          <ul className="flex flex-wrap gap-1 text-xs">
            {resumeData.skills.map((skill, idx) => (
              <li key={idx} className="bg-gray-200 px-2 py-1 rounded">{skill}</li>
            ))}
          </ul>
        </div>
      </Html>
    </mesh>
  );
}

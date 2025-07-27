import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { resumeData } from "../data/resumeData";
import { Html } from "@react-three/drei";

export default function ExperienceBox({ position }) {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.01));

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[3, 2, 1]} />
      <meshStandardMaterial color="skyblue" />
      <Html position={[0, 0, 0.6]} center>
        <div className="bg-white p-2 rounded shadow-md text-sm w-60">
          <h2 className="font-bold">{resumeData.experience[0].role}</h2>
          <p>{resumeData.experience[0].company}</p>
          <p className="text-xs">{resumeData.experience[0].duration}</p>
          <ul className="list-disc pl-4">
            {resumeData.experience[0].description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </Html>
    </mesh>
  );
}

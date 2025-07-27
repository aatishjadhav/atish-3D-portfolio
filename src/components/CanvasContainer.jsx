import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ExperienceBox from "./ExperienceBox";
import ProjectBox from "./ProjectBox";
import SkillsCloud from "./SkillsCloud";

export default function CanvasContainer() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <ExperienceBox position={[-4, 0, 0]} />
      <ProjectBox position={[0, 0, 0]} />
      <SkillsCloud position={[4, 0, 0]} />
    </Canvas>
  );
}

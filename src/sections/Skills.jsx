import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";

const skills = [
  { label: "React.js", icon: <SiReact className="text-sky-500" size={28} /> },
  { label: "Next.js", icon: <SiNextdotjs className="text-black" size={28} /> },
  {
    label: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" size={28} />,
  },
  {
    label: "JavaScript (ES6+)",
    icon: <SiJavascript className="text-yellow-400" size={28} />,
  },
  {
    label: "TypeScript",
    icon: <SiTypescript className="text-blue-500" size={28} />,
  },
  {
    label: "Node.js",
    icon: <SiNodedotjs className="text-green-600" size={28} />,
  },
  {
    label: "Express.js",
    icon: <SiExpress className="text-gray-700" size={28} />,
  },
  {
    label: "MongoDB",
    icon: <SiMongodb className="text-green-500" size={28} />,
  },
  {
    label: "Git & GitHub",
    icon: <FaGitAlt className="text-orange-500" size={28} />,
  },
  {
    label: "REST APIs",
    icon: <SiPostman className="text-orange-400" size={28} />,
  },
];

const Skills = () => {
  return (
    <section className="dark:max-w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div
        id="skills"
        className="max-w-6xl mx-auto dark:bg-gray-900 dark:text-gray-100"
      >
        <div className="py-20 px-6 lg:px-20">
          <FadeInSection variant="slideInRight" delay={0.4}>
            <h2 className="text-3xl lg:text-3xl font-semibold text-gray-800 mb-10 dark:text-gray-100">
              &lt; Technical Skills /&gt;
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="bg-white dark:border-gray-200 dark:bg-gray-900 dark:text-gray-100 shadow-md dark:shadow-lg dark:shadow-white/20 rounded-xl px-4 py-6 text-center flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                > 
                  {skill.icon}
                  <span className="mt-3 text-gray-700 dark:text-gray-100 font-medium text-sm">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;

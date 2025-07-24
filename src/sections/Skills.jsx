const skills = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
  "REST APIs",
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto">
      <div className="py-20 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white shadow-md rounded-xl px-4 py-3 text-center font-medium text-gray-700"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

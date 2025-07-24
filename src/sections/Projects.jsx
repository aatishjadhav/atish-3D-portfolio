import { ExternalLink, Github } from "lucide-react";
import projects from "../data/projects";
import FadeInSection from "../components/FadeInSection";

const Projects = () => {
  return (
    <section id="projects" className="">
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-20 bg-gray-100">
        <FadeInSection>
          <h2 className="text-4xl font-semibold text-gray-800 mb-12">
            &lt; Projects /&gt;
          </h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition text-sm"
                      >
                        <ExternalLink size={18} />
                        <span className="hidden sm:inline">Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 hover:text-black transition text-sm"
                      >
                        <Github size={18} />
                        <span className="hidden sm:inline">Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Projects;

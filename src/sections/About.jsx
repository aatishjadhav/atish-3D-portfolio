import FadeInSection from "../components/FadeInSection";

const About = () => {
  return (
    <section id="about" className="">
      <div className="max-w-6xl mx-auto bg-gray-100 py-12 lg:py-4">
        <FadeInSection>
          <div className="py-20 px-6 lg:px-20 text-center md:text-left">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              &lt; About Me /&gt;
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              I’m a results-driven fullstack developer where I specialize in
              crafting seamless, high-performance user interfaces. With a strong
              foundation in full-stack development using the MERN stack, I excel
              at transforming complex business requirements into clean,
              scalable, and user-centric solutions. I’m passionate about
              building modern web applications that deliver real value and
              exceptional user experiences.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;

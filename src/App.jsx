import Hero from "./sections/Hero";

import CanvasContainer from "./components/CanvasContainer";
function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero />

      {/* 3D Resume Section */}
      <section className="w-full h-[80vh] mt-10">
        <CanvasContainer />
      </section>
      </div>
  );
}

export default App;

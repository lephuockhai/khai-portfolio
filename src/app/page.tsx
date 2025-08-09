
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

const Home = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="pt-24">
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
      </div>
    </main>
  );
};

export default Home;

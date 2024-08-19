import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";
import Project from "./Project";
import TechStack from "./TechStack";

const Home = () => {
  return (
    <section className="p-4">
      <Intro />
      <About />
      <TechStack />
      <Project />
      <Contact />
    </section>
  );
};
export default Home;

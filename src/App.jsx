import "./App.css";
import About from "./copmonents/About";
import Banner from "./copmonents/Banner";
import Contact from "./copmonents/Contact";
import MyProjects from "./copmonents/MyProjects";
import Navbar from "./copmonents/Navbar";
import Skills from "./copmonents/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <About/>
      <Skills/>
      <MyProjects/>
      <Contact/>
    </>
  );
}

export default App;

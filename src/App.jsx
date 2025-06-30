import "./App.css";
import About from "./copmonents/About";
import BackToTop from "./copmonents/BackToTop";
import Banner from "./copmonents/Banner";
import Contact from "./copmonents/Contact";
import Footer from "./copmonents/Footer";
import MyProjects from "./copmonents/MyProjects";
import Navbar from "./copmonents/Navbar";
import Skills from "./copmonents/Skills";

function App() {
  return (
    <>
      <BackToTop />
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <MyProjects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

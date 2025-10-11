import { createBrowserRouter } from "react-router";
import App from "../App";
import Main from "../layout/Main";
import About from "../copmonents/About";
import SkillsSection from "../copmonents/Skills";
import Contact from "../copmonents/Contact";
import MyProjects from "../copmonents/MyProjects";
import Service from "../copmonents/Service";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      { path: "/", Component: App },
      { path: "/about", Component: About },
      { path: "/skills", Component: SkillsSection },
      { path: "/projects", Component: MyProjects },
      { path: "/contact", Component: Contact },
      { path: "/service", Component: Service },
    ],
  },
]);
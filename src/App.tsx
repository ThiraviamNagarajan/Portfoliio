// import { useRef } from "react";
// import ContactMe from "./Components/ContactMe/ContactMe";
// import Education from "./Components/Education/Education";
// import Experience from "./Components/Experience/Experience";
// import Footer from "./Components/Footer/Footer";
// import Intro from "./Components/Intro/Intro";
// import Projects from "./Components/Projects/Projects";
// import Skills from "./Components/Skills/Skills";
// import Navbar from "./Components/NavBar/Navbar";

// type Section = "intro" | "skills" | "experience" | "projects" | "education" | "contact";

// const App = () => {
//   const introRef = useRef(null);
//   const skillsRef = useRef(null);
//   const experienceRef = useRef(null);
//   const projectsRef = useRef(null);
//   const educationRef = useRef(null);
//   const contactRef = useRef(null);

//   const sectionRefs: Record<Section, React.RefObject<HTMLElement>> = {
//     intro: introRef,
//     skills: skillsRef,
//     experience: experienceRef,
//     projects: projectsRef,
//     education: educationRef,
//     contact: contactRef,
//   };

//   const scrollToSection = (section: Section) => {
//     sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       <Navbar onSectionSelect={scrollToSection} />
//       <div ref={introRef}><Intro /></div>
//       <div ref={skillsRef}><Skills /></div>
//       <div ref={experienceRef}><Experience /></div>
//       <div ref={projectsRef}><Projects /></div>
//       <div ref={educationRef}><Education /></div>
//       <div ref={contactRef}><ContactMe /></div>
//       <div className="bg-[#1a1923] mt-10">
//         <Footer  onSectionSelect={scrollToSection} />
//       </div>
//     </div>
//   );
// };

// export default App;

import { useRef, useState } from "react";
import ContactMe from "./Components/ContactMe/ContactMe";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Navbar from "./Components/NavBar/Navbar";

type Section = "intro" | "skills" | "experience" | "projects" | "education" | "contact";

const App = () => {
  const [activeSection, setActiveSection] = useState<Section>("intro");

  const introRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs: Record<Section, React.RefObject<HTMLDivElement>> = {
    intro: introRef,
    skills: skillsRef,
    experience: experienceRef,
    projects: projectsRef,
    education: educationRef,
    contact: contactRef,
  };

  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar onSectionSelect={scrollToSection} activeSection={activeSection} />
      <div ref={introRef}><Intro /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={contactRef}><ContactMe /></div>
      <div className="bg-[#1a1923] mt-10">
        <Footer onSectionSelect={scrollToSection} />
      </div>
    </div>
  );
};

export default App;

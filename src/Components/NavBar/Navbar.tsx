// import { useState } from "react";
// import "./index.css"

// type Section =
//   | "intro"
//   | "skills"
//   | "experience"
//   | "projects"
//   | "education"
//   | "contact";

// interface NavbarProps {
//   onSectionSelect: (section: Section) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ onSectionSelect }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSelect = (section: Section) => {
//     setIsOpen(false);
//     onSectionSelect(section);
//   };

//   return (
//     <div className="flex items-center justify-center mx-auto bg-[#191924] sticky top-0 z-50">
//       <div className="container flex justify-between items-center p-4 py-7">
//         {/* Logo */}
//         <div className="font-bold uppercase text-[20px] text-[#ffffff] tracking-wide">
//           | TN |
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex justify-between items-center gap-8 text-[#ffffff] font-[500]">
//           <div className="cursor-pointer" onClick={() => handleSelect("intro")}>
//             About
//           </div>
//           <div
//             className="cursor-pointer"
//             onClick={() => handleSelect("skills")}
//           >
//             Skills
//           </div>
//           <div
//             className="cursor-pointer"
//             onClick={() => handleSelect("experience")}
//           >
//             Experience
//           </div>
//           <div
//             className="cursor-pointer"
//             onClick={() => handleSelect("projects")}
//           >
//             Projects
//           </div>
//           <div
//             className="cursor-pointer"
//             onClick={() => handleSelect("education")}
//           >
//             Education
//           </div>
//           <div
//             className="cursor-pointer"
//             onClick={() => handleSelect("contact")}
//           >
//             Contact
//           </div>
//           <a
//             href="src/assets/Resume/Nagaraj.pdf"
//             download
//             className="bg-[#111827] px-4 py-2 rounded-md text-[#F9FAFB] font-[500] cursor-pointer"
//           >
//             Download CV
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="h-6 w-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="md:hidden absolute top-20 left-0 w-full bg-[#191924] flex flex-col items-center space-y-6 py-6 text-[#ffffff] font-[500] shadow-lg">
//           <div className="cursor-pointer" onClick={() => handleSelect("intro")}>
//             About
//           </div>
//           <div
//             className="cursor-pointer"
//             onClick={() => handleSelect("skills")}
//           >
//             Skills
//           </div>
//           <div
//             className="cursor-pointer"
//             onClick={() => handleSelect("experience")}
//           >
//             Experience
//           </div>
//           <div
//             className="cursor-pointer"
//             onClick={() => handleSelect("projects")}
//           >
//             Projects
//           </div>
//           <div
//             className="cursor-pointer"
//             onClick={() => handleSelect("education")}
//           >
//             Education
//           </div>
//           <div
//             className="cursor-pointer"
//             onClick={() => handleSelect("contact")}
//           >
//             Contact
//           </div>
//           <div className="bg-[#111827] px-4 py-2 rounded-md text-[#F9FAFB] font-[500] cursor-pointer">
//             Download CV
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import "./index.css";

type Section = "intro" | "skills" | "experience" | "projects" | "education" | "contact";

interface NavbarProps {
  onSectionSelect: (section: Section) => void;
  activeSection: Section;
}

const Navbar: React.FC<NavbarProps> = ({ onSectionSelect, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (section: Section) => {
    setIsOpen(false);
    onSectionSelect(section);
  };

  const linkClass = (section: Section) =>
    `cursor-pointer ${activeSection === section ? "text-[#a855f7]" : "text-white"}`;

  return (
    <div className="flex items-center justify-center mx-auto bg-[#191924] sticky top-0 z-50">
      <div className="container flex justify-between items-center p-4 py-7">
        {/* Logo */}
        <div className="font-bold uppercase text-[20px] text-[#ffffff] tracking-wide">
          | TN |
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between items-center gap-8 font-[500]">
          <div className={linkClass("intro")} onClick={() => handleSelect("intro")}>About</div>
          <div className={linkClass("skills")} onClick={() => handleSelect("skills")}>Skills</div>
          <div className={linkClass("experience")} onClick={() => handleSelect("experience")}>Experience</div>
          <div className={linkClass("projects")} onClick={() => handleSelect("projects")}>Projects</div>
          <div className={linkClass("education")} onClick={() => handleSelect("education")}>Education</div>
          <div className={linkClass("contact")} onClick={() => handleSelect("contact")}>Contact</div>
          <a
            href="src/assets/Resume/Nagaraj.pdf"
            download
            className="bg-[#111827] px-4 py-2 rounded-md text-[#F9FAFB] font-[500] cursor-pointer"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#191924] flex flex-col items-center space-y-6 py-6 text-[#ffffff] font-[500] shadow-lg">
          <div className={linkClass("intro")} onClick={() => handleSelect("intro")}>About</div>
          <div className={linkClass("skills")} onClick={() => handleSelect("skills")}>Skills</div>
          <div className={linkClass("experience")} onClick={() => handleSelect("experience")}>Experience</div>
          <div className={linkClass("projects")} onClick={() => handleSelect("projects")}>Projects</div>
          <div className={linkClass("education")} onClick={() => handleSelect("education")}>Education</div>
          <div className={linkClass("contact")} onClick={() => handleSelect("contact")}>Contact</div>
          <div className="bg-[#111827] px-4 py-2 rounded-md text-[#F9FAFB] font-[500] cursor-pointer">
            Download CV
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;


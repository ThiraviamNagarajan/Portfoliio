import  { useState, useEffect,useRef } from "react";
import javaScript from "../../assets/Img/javaScript.png";
import html from "../../assets/Img/html.png";
import css from "../../assets/Img/css.png";
import react from "../../assets/Img/reactjs.png";
import bootstrap from "../../assets/Img/bootstrap.png";
import tailwind from "../../assets/Img/tailwindcss.png";
import materialui from "../../assets/Img/materialui.png";
import reactstrap from "../../assets/Img/reactjs.png"; // Duplicate of reactjs.png
import redux from "../../assets/Img/redux.png";
import git from "../../assets/Img/git.png";
import github from "../../assets/Img/github.png";
import agile from "../../assets/Img/agile.png";
import jira from "../../assets/Img/Jira.png";

// const Skills = () => {
//   interface SkillItem {
//     id: number;
//     category: "Languages" | "Libraries & Frameworks" | "Others";
//     image: any;
//     skillName: string;
//   }

//   const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const allSkills: SkillItem[] = [
//     { id: 1, category: "Languages", image: javaScript, skillName: "Javascript" },
//     { id: 2, category: "Languages", image: html, skillName: "HTML" },
//     { id: 3, category: "Languages", image: css, skillName: "CSS" },

//     { id: 4, category: "Libraries & Frameworks", image: react, skillName: "ReactJS" },
//     { id: 5, category: "Libraries & Frameworks", image: bootstrap, skillName: "BootStrap" },
//     { id: 6, category: "Libraries & Frameworks", image: tailwind, skillName: "TailWind CSS" },
//     { id: 7, category: "Libraries & Frameworks", image: materialui, skillName: "Material UI" },
//     { id: 8, category: "Libraries & Frameworks", image: reactstrap, skillName: "ReactStrap" },
//     { id: 9, category: "Libraries & Frameworks", image: redux, skillName: "Redux" },

//     { id: 10, category: "Others", image: git, skillName: "Git" },
//     { id: 11, category: "Others", image: github, skillName: "Github" },
//     { id: 12, category: "Others", image: agile, skillName: "Agile Methodology" },
//     { id: 13, category: "Others", image: jira, skillName: "Jira" },
//   ];

//   const categories = ["Languages", "Libraries & Frameworks", "Others"];

//   return (
//     <>
//       <div className="text-center pt-5 font-[800] text-[24px] text-[#b1b2b3]" style={{ background: "linear-gradient(to right, #261b30, #1a1f33)" }}>
//         Skills
//       </div>
//       <div className="flex flex-wrap text-[#ffffff]" style={{ background: "linear-gradient(to right, #261b30, #1a1f33)" }}>
//         {categories.map((categoryName) => (
//           <div key={categoryName} className={`${screenWidth < 1000 ? "basis-[100%]" : "basis-[33.33%]"} px-8 py-5`}>
//             <div className="border-[2px] border-[#854ce6] rounded-[12px] bg-[#171721] flex flex-col items-center">
//               <div className="py-2 text-[#b1b2b3]">{categoryName}</div>
//               <div className="p-4 flex gap-3 flex-wrap justify-center items-center">
//                 {allSkills
//                   .filter((skill) => skill.category === categoryName)
//                   .map((skill) => (
//                     <div key={skill.id} className={`flex ${screenWidth < 500 ? "basis-[100%]" : ""} items-center flex-wrap p-2 gap-1 border-[1px] border-[#84858a] rounded-[8px]`}>
//                       <img src={skill.image} height={35} width={35} />
//                       <div className="text-[#84858a]">{skill.skillName}</div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Skills;
const Skills = () => {
  interface SkillItem {
    id: number;
    category: "Languages" | "Libraries & Frameworks" | "Others";
    image: any;
    skillName: string;
  }

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = entry.target.getAttribute("data-category");
            if (category) {
              setVisibleSections((prev) => new Set([...prev, category]));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.keys(sectionsRef.current).forEach((key) => {
      const el = sectionsRef.current[key];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const allSkills: SkillItem[] = [
    { id: 1, category: "Languages", image: javaScript, skillName: "Javascript" },
    { id: 2, category: "Languages", image: html, skillName: "HTML" },
    { id: 3, category: "Languages", image: css, skillName: "CSS" },
    { id: 4, category: "Libraries & Frameworks", image: react, skillName: "ReactJS" },
    { id: 5, category: "Libraries & Frameworks", image: bootstrap, skillName: "BootStrap" },
    { id: 6, category: "Libraries & Frameworks", image: tailwind, skillName: "TailWind CSS" },
    { id: 7, category: "Libraries & Frameworks", image: materialui, skillName: "Material UI" },
    { id: 8, category: "Libraries & Frameworks", image: reactstrap, skillName: "ReactStrap" },
    { id: 9, category: "Libraries & Frameworks", image: redux, skillName: "Redux" },
    { id: 10, category: "Others", image: git, skillName: "Git" },
    { id: 11, category: "Others", image: github, skillName: "Github" },
    { id: 12, category: "Others", image: agile, skillName: "Agile Methodology" },
    { id: 13, category: "Others", image: jira, skillName: "Jira" },
  ];

  const categories = ["Languages", "Libraries & Frameworks", "Others"];

  return (
    <>
      <div className="text-center pt-5 font-[800] text-[24px] text-[#b1b2b3]" style={{ background: "linear-gradient(to right, #261b30, #1a1f33)" }}>
        Skills
      </div>
      <div className="flex flex-wrap text-[#ffffff]" style={{ background: "linear-gradient(to right, #261b30, #1a1f33)" }}>
      {categories.map((categoryName, index) => (
  <div
    key={categoryName}
    data-category={categoryName}
    ref={(el) => (sectionsRef.current[categoryName] = el)}
    className={`
      ${screenWidth < 1000 ? "basis-[100%]" : "basis-[33.33%]"} px-8 py-5
      transform transition-all duration-[1000ms] ease-in-out
      ${visibleSections.has(categoryName) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      delay-[${index * 200}ms]
    `}
  >
    <div className="border-[2px] border-[#854ce6] rounded-[12px] bg-[#171721] flex flex-col items-center">
      <div className="py-2 text-[#b1b2b3]">{categoryName}</div>
      <div className="p-4 flex gap-3 flex-wrap justify-center items-center">
        {allSkills
          .filter((skill) => skill.category === categoryName)
          .map((skill) => (
            <div
              key={skill.id}
              className={`flex ${screenWidth < 500 ? "basis-[100%]" : ""} items-center flex-wrap p-2 gap-1 border-[1px] border-[#84858a] rounded-[8px]`}
            >
              <img src={skill.image} height={35} width={35} />
              <div className="text-[#84858a]">{skill.skillName}</div>
            </div>
          ))}
      </div>
    </div>
  </div>
))}

      </div>
    </>
  );
};

export default Skills;
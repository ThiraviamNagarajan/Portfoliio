
import { useEffect, useRef, useState } from "react";
import leora from "../../assets/Img/Leora.jpeg";
import solverminds from "../../assets/Img/solverminds.png";

const Experience = () => {
  interface ExperienceProps {
    id: any;
    image: any;
    designation: any;
    companyName: any;
    workperiod: any;
    Description: any;
    skills: any;
  }

  const experience: ExperienceProps[] = [
    {
      id: "1",
      image: leora,
      designation: "Front End Developer",
      companyName: "Leora Infotect Private Limited",
      workperiod: "Jan 2024 - Present",
      Description:
        "Developed responsive and user-friendly interfaces for web applications using React.js, Redux.js, Material-UI. Built reusable components and optimized designs for maximum speed and scalability. Collaborated with the design team to ensure UI/UX designs are technically feasible and responsive. Worked closely with the backend team to integrate the Node.js backend API hosted with front-end components. Utilized version control systems like Git to manage and collaborate on projects efficiently. Stayed up-to-date with the latest front-end development trends and troubleshooting techniques.",
      skills: ["HTML", "CSS", "Javascript", "Bootstrap", "React js", "Redux"],
    },
    {
      id: "2",
      image: solverminds,
      designation: "Associate Software Tester",
      companyName: "Solverminds Solutions and Technologies Pvt Limited",
      workperiod: "June 2022 - Dec 2023",
      Description:
        "Developed responsive and user-friendly interfaces for web applications using React.js, Redux.js, Material-UI. Built reusable components and optimized designs for maximum speed and scalability. Collaborated with the design team to ensure UI/UX designs are technically feasible and responsive. Worked closely with the backend team to integrate the Node.js backend API hosted with front-end components. Utilized version control systems like Git to manage and collaborate on projects efficiently. Stayed up-to-date with the latest front-end development trends and troubleshooting techniques.",
      skills: [
        "Functional testing",
        "Regression testing",
        "System Testing",
        "Integration testing",
        "Agile methodology",
        "Jira",
      ],
    },
  ];

//   return (
//     <>
//       <div
//         style={{
//           background: "linear-gradient(to right, #261b30, #1a1f33)",
//         }}
//         className="w-full"
//       >
//         <div className="text-center py-5 font-extrabold text-2xl text-[#b1b2b3]">
//           Experience
//         </div>
//         <div className="flex flex-col justify-center items-center gap-5 relative px-4 sm:px-6 md:px-10">
//           {experience.map((val: any) => (
//             <div key={val.id} className="flex w-full md:w-[80%] lg:w-[60%]">
//               <div className="w-full border-2 border-[#854ce6] p-5 text-[#84858a] bg-[#1c1c27] rounded-2xl shadow-lg">
//                 <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//                   <div className="h-[75px] w-full sm:w-[100px] flex items-center">
//                     <img
//                       src={val.image}
//                       alt="company logo"
//                       className="w-full max-w-[75px] sm:max-w-[100px] h-auto object-cover rounded-md"
//                     />
//                   </div>
//                   <div>
//                     <div className="text-lg font-bold">{val.designation}</div>
//                     <div className="text-sm">{val.companyName}</div>
//                     <div className="text-sm">{val.workperiod}</div>
//                   </div>
//                 </div>
//                 <div className="py-3 text-justify text-sm md:text-base">
//                   {val.Description}
//                 </div>
//                 <div className="flex flex-wrap gap-2 text-sm">
//                   <span className="font-semibold">Skills:</span>
//                   {val.skills.map((el: any, ind: any) => (
//                     <span key={ind}>
//                       {ind !== 0 && <span className="mx-1">|</span>}
//                       {el}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Experience;


const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set());
const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-id");
        if (entry.isIntersecting && id) {
          setVisibleIds((prev) => new Set([...prev, id]));
        }
      });
    },
    { threshold: 0.2 }
  );

  Object.values(cardRefs.current).forEach((el) => el && observer.observe(el));
  return () => observer.disconnect();
}, []);

return (
  <div
    style={{ background: "linear-gradient(to right, #261b30, #1a1f33)" }}
    className="w-full"
  >
    <div className="text-center py-5 font-extrabold text-2xl text-[#b1b2b3]">
      Experience
    </div>
    <div className="flex flex-col justify-center items-center gap-5 relative px-4 sm:px-6 md:px-10">
      {experience.map((val, index) => {
        const isVisible = visibleIds.has(val.id);
        const isEven = index % 2 === 0;

        return (
          <div
            key={val.id}
            ref={(el) => (cardRefs.current[val.id] = el)}
            data-id={val.id}
            className={`
              flex w-full md:w-[80%] lg:w-[60%]
              transition-all duration-[900ms] ease-in-out transform
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0"}
              ${
                isVisible
                  ? ""
                  : isEven
                  ? "translate-x-[-40px] sm:translate-x-[-80px]"
                  : "translate-x-[40px] sm:translate-x-[80px]"
              }
            `}
          >
            <div className="w-full border-2 border-[#854ce6] p-5 text-[#84858a] bg-[#1c1c27] rounded-2xl shadow-lg">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="h-[75px] w-full sm:w-[100px] flex items-center">
                  <img
                    src={val.image}
                    alt="company logo"
                    className="w-full max-w-[75px] sm:max-w-[100px] h-auto object-cover rounded-md"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold">{val.designation}</div>
                  <div className="text-sm">{val.companyName}</div>
                  <div className="text-sm">{val.workperiod}</div>
                </div>
              </div>
              <div className="py-3 text-justify text-sm md:text-base">
                {val.Description}
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="font-semibold">Skills:</span>
                {val.skills.map((el: string, ind: number) => (
                  <span key={ind}>
                    {ind !== 0 && <span className="mx-1">|</span>}
                    {el}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
};

export default Experience;

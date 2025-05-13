// import { useEffect, useRef, useState } from "react";
// import sasmicro from "../../assets/Img/samicro.png";
// import interviewspace from "../../assets/Img/aiinterviewspace.png";
// import ProjectModal from "../Modal/Modal";

// const Projects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState<any>(null);
//   const intervalRef = useRef<any>(null);

//   const projects:any = [
//     {
//       id: "1",
//       image: sasmicro,
//       projectName: "SAS Micro",
//       description:
//         "Professional website for a Food and Safety Consulting company specializing in food inspection consulting and food safety education. The platform features a clean, user-friendly interface that highlights their core services, including expert consultation for food safety compliance and a comprehensive listing of certified food safety courses.",
//       contribution:
//         "Developed the Landing Page for the institute, focusing on user-friendly navigation, responsive design, and visually engaging layout to showcase key food safety training programs. Created the Training Courses Page with dynamic course listings, filter options, and integrated registration forms using React JS, ensuring real-time updates and a seamless user experience.",
//       Skills: ["HTML", "CSS", "React JS", "Material UI", "Bootstrap"],
//     },
//     {
//       id: "2",
//       image: interviewspace,
//       projectName: "AI Interview Space",
//       description:
//         "Built a fully automated AI Interview Platform designed to streamline and modernize the recruitment process. This intelligent system conducts end-to-end conversational interviews without the need for active HR involvement.",
//       contribution:
//         "Developed the AI Interview Platform's Landing Page, ensuring intuitive navigation, responsive design, and an engaging layout. Implemented a static Interview Report page with React Router and static JSON for user clarity.",
//       Skills: ["HTML", "CSS", "React JS", "Bootstrap"],
//     },
//     {
//       id: "3",
//       image: null,
//       projectName: "Non Banking Financial Website",
//       description:
//         "Professional website for a Non-Banking Financial Company (NBFC) showcasing financial services and products. Focused on accessibility, credibility, and user engagement.",
//       contribution:
//         "Built an interactive dashboard using React JS with REST API integration, reusable UI components (tables, cards, filters, Chart.js), and efficient routing/state management using React Router and Redux.",
//       Skills: ["HTML", "CSS", "React JS", "Bootstrap"],
//     },
//   ];

//   const slideCount = projects.length;
//   const fullSlides = [...projects, projects[0]]; // clone first slide

//   const startAutoSlide = () => {
//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prev) => prev + 1);
//     }, 3000);
//   };

//   const stopAutoSlide = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return stopAutoSlide;
//   }, []);

//   const handleTransitionEnd = () => {
//     if (currentIndex === slideCount) {
//       // reached cloned slide
//       setIsTransitioning(false);
//       setCurrentIndex(0);
//     }
//   };

//   useEffect(() => {
//     if (!isTransitioning) {
//       const timeout = setTimeout(() => {
//         setIsTransitioning(true);
//       }, 50); 
//       return () => clearTimeout(timeout);
//     }
//   }, [isTransitioning]);

//   return (
//     <div className="bg-gradient-to-r from-[#261b30] to-[#1a1f33] py-10 text-white">
//       <div className="text-center font-bold text-3xl mb-8 text-[#b1b2b3]">
//         Projects
//       </div>

//       <div className="w-full max-w-4xl mx-auto overflow-hidden px-4 over">
//         <div
//           className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
//           style={{
//             width: `${fullSlides.length * 100}%`,
//             transform: `translateX(-${(100 / fullSlides.length) * currentIndex}%)`,
//           }}
//           onTransitionEnd={handleTransitionEnd}
//         >
//           {fullSlides.map((project:any, index:any) => (
//             <div
//               key={index}
//               className="w-full flex-shrink-0 px-4"
//               style={{ width: `${100 / fullSlides.length}%` }}
//               onMouseEnter={() => {
//                 stopAutoSlide();
//                 setHoveredIndex(index);
//               }}
//               onMouseLeave={() => {
//                 startAutoSlide();
//                 setHoveredIndex(null);
//               }}
//             >
//               <div className="relative bg-[#1c1c27] border-2 border-[#854ce6] rounded-md p-4 h-[500px] flex flex-col gap-2 justify-between text-[#84858a]">
//                 <div className="h-[280px]">
//                   {project.image ? (
//                     <img
//                       src={project.image}
//                       alt={project.projectName}
//                       className="w-full h-full object-cover rounded"
//                     />
//                   ) : (
//                     <div className="bg-gray-700 w-full h-full flex items-center justify-center text-sm text-gray-400 rounded">
//                       No Image Available
//                     </div>
//                   )}
//                 </div>

//                 <div className="text-center font-semibold text-xl">
//                   {project.projectName}
//                 </div>

//                 <div className=" md:text-sm overflow-hidden">
//                   <span className="font-semibold">Description:</span>{" "}
//                   {project.description}
//                 </div>
//                 <div className="md:text-sm overflow-hidden">
//                   <span className="font-semibold">Contribution:</span>{" "}
//                   {project.contribution}
//                 </div>

//                 {hoveredIndex === index && (
//                   <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center rounded-md">
//                     <button
//                       onClick={() => {
//                         setSelectedProject(project);
//                         setShowModal(true);
//                       }}
//                       className="bg-[#854ce6] px-4 py-2 rounded text-white hover:bg-[#6b3fd1]"
//                     >
//                       View More
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center gap-2 mt-4">
//           {projects.map((_:any, idx:any) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               className={`w-3 h-3 rounded-full ${
//                 idx === (currentIndex % slideCount) ? "bg-purple-500" : "bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       <ProjectModal
//         project={selectedProject}
//         visible={showModal}
//         onClose={() => setShowModal(false)}
//       />
//     </div>
//   );
// };

// export default Projects;


import { useEffect, useRef, useState } from "react";
import sasmicro from "../../assets/Img/samicro.png";
import interviewspace from "../../assets/Img/aiinterviewspace.png";
import ProjectModal from "../Modal/Modal";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const intervalRef = useRef<any>(null);

  const projects: any = [
    {
      id: "1",
      image: sasmicro,
      projectName: "SAS Micro",
      description:
        "Professional website for a Food and Safety Consulting company specializing in food inspection consulting and food safety education. The platform features a clean, user-friendly interface that highlights their core services, including expert consultation for food safety compliance and a comprehensive listing of certified food safety courses.",
      contribution:
        "Developed the Landing Page for the institute, focusing on user-friendly navigation, responsive design, and visually engaging layout to showcase key food safety training programs. Created the Training Courses Page with dynamic course listings, filter options, and integrated registration forms using React JS, ensuring real-time updates and a seamless user experience.",
      Skills: ["HTML", "CSS", "React JS", "Material UI", "Bootstrap"],
    },
    {
      id: "2",
      image: interviewspace,
      projectName: "AI Interview Space",
      description:
        "Built a fully automated AI Interview Platform designed to streamline and modernize the recruitment process. This intelligent system conducts end-to-end conversational interviews without the need for active HR involvement.",
      contribution:
        "Developed the AI Interview Platform's Landing Page, ensuring intuitive navigation, responsive design, and an engaging layout. Implemented a static Interview Report page with React Router and static JSON for user clarity.",
      Skills: ["HTML", "CSS", "React JS", "Bootstrap"],
    },
    {
      id: "3",
      image: null,
      projectName: "Non Banking Financial Website",
      description:
        "Professional website for a Non-Banking Financial Company (NBFC) showcasing financial services and products. Focused on accessibility, credibility, and user engagement.",
      contribution:
        "Built an interactive dashboard using React JS with REST API integration, reusable UI components (tables, cards, filters, Chart.js), and efficient routing/state management using React Router and Redux.",
      Skills: ["HTML", "CSS", "React JS", "Bootstrap"],
    },
  ];

  const slideCount = projects.length;
  const fullSlides = [...projects, projects[0]]; // Clone first slide for infinite effect

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  // Handle infinite scroll logic
  const handleTransitionEnd = () => {
    if (currentIndex === slideCount) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // Handle visibility/tab change issues
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoSlide();
      } else {
        // Reset and ensure sync
        setIsTransitioning(false);
        setCurrentIndex((prev) => (prev === slideCount ? 0 : prev));
        setTimeout(() => {
          setIsTransitioning(true);
          startAutoSlide();
        }, 100);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#261b30] to-[#1a1f33] py-10 text-white">
      <div className="text-center font-bold text-3xl mb-8 text-[#b1b2b3]">Projects</div>

      <div className="w-full max-w-4xl mx-auto overflow-hidden px-4">
        <div
          className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{
            width: `${fullSlides.length * 100}%`,
            transform: `translateX(-${(100 / fullSlides.length) * currentIndex}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {fullSlides.map((project: any, index: number) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
              style={{ width: `${100 / fullSlides.length}%` }}
              onMouseEnter={() => {
                stopAutoSlide();
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                startAutoSlide();
                setHoveredIndex(null);
              }}
            >
              <div className="relative bg-[#1c1c27] border-2 border-[#854ce6] rounded-md p-4 h-[500px] flex flex-col gap-2 justify-between text-[#84858a]">
                <div className="h-[280px]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <div className="bg-gray-700 w-full h-full flex items-center justify-center text-sm text-gray-400 rounded">
                      No Image Available
                    </div>
                  )}
                </div>

                <div className="text-center font-semibold text-xl">
                  {project.projectName}
                </div>

                <div className="md:text-sm overflow-hidden">
                  <span className="font-semibold">Description:</span>{" "}
                  {project.description}
                </div>
                <div className="md:text-sm overflow-hidden">
                  <span className="font-semibold">Contribution:</span>{" "}
                  {project.contribution}
                </div>

                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center rounded-md">
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setShowModal(true);
                      }}
                      className="bg-[#854ce6] px-4 py-2 rounded text-white hover:bg-[#6b3fd1]"
                    >
                      View More
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {projects.map((_: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === (currentIndex % slideCount) ? "bg-purple-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Projects;





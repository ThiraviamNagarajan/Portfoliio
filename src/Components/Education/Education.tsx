
// const Education = () => {
//   interface educationProps {
//     id: any;
//     initial: any;
//     instituteName: any;
//     Course: any;
//     department: any;
//     YearOfPassedOut: any;
//     percentage: any;
//   }

//   const education: educationProps[] = [
//     {
//       id: "1",
//       initial: "B.E",
//       instituteName: "Saveetha Engineering College",
//       Course: "Bachelor of Engineering",
//       department: "Mechanical Engineering",
//       YearOfPassedOut: "2015-2019",
//       percentage: "6.92",
//     },
//     {
//       id: "2",
//       initial: "XII",
//       instituteName: "D.V.D Higher Secondary School",
//       Course: "Higher Secondary",
//       department: "Computer science",
//       YearOfPassedOut: "2013-2015",
//       percentage: "82%",
//     },
//     {
//       id: "3",
//       initial: "X",
//       instituteName: "Sri Ramakrishna Matriculation Higher Secondary School",
//       Course: "SSLC",
//       department: "General",
//       YearOfPassedOut: "2012-2012",
//       percentage: "93%",
//     },
//   ];

//   return (
//     <div
//       style={{
//         background: "linear-gradient(to right, #261b30, #1a1f33)",
//       }}
//     >
//       <div className="text-center font-extrabold text-2xl md:text-3xl text-[#b1b2b3] py-12">
//         Education
//       </div>
//       <div className="flex justify-center px-4">
//         <div className="w-full max-w-[1200px]">
//           <div className="flex flex-wrap justify-center gap-6">
//             {education.map((val: any) => (
//               <div
//                 key={val.id}
//                 className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] border-2 border-[#854ce6] p-4 sm:p-5 text-[#84858a] bg-[#1c1c27] rounded-2xl flex items-start gap-4"
//               >
//                 {/* Circle for Initial */}
//                 <div className="flex-shrink-0">
//                   <div className="w-[60px] h-[60px] flex items-center justify-center border-2 border-[#854ce6] rounded-full text-base sm:text-lg font-semibold">
//                     {val.initial}
//                   </div>
//                 </div>

//                 {/* Education Text Block */}
//                 <div className="flex flex-col gap-1 text-sm sm:text-base">
//                   <div className="font-bold leading-snug">
//                     Institute: {val.instituteName}
//                   </div>
//                   <div>Course: {val.Course}</div>
//                   <div>Department: {val.department}</div>
//                   <div>Year: {val.YearOfPassedOut}</div>
//                   <div>Percentage: {val.percentage}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;

import { useEffect, useRef, useState } from "react";

const Education = () => {
  interface educationProps {
    id: any;
    initial: any;
    instituteName: any;
    Course: any;
    department: any;
    YearOfPassedOut: any;
    percentage: any;
  }

  const education: educationProps[] = [
    {
      id: "1",
      initial: "B.E",
      instituteName: "Saveetha Engineering College",
      Course: "Bachelor of Engineering",
      department: "Mechanical Engineering",
      YearOfPassedOut: "2015-2019",
      percentage: "6.92",
    },
    {
      id: "2",
      initial: "XII",
      instituteName: "D.V.D Higher Secondary School",
      Course: "Higher Secondary",
      department: "Computer science",
      YearOfPassedOut: "2013-2015",
      percentage: "82%",
    },
    {
      id: "3",
      initial: "X",
      instituteName: "Sri Ramakrishna Matriculation Higher Secondary School",
      Course: "SSLC",
      department: "General",
      YearOfPassedOut: "2012-2012",
      percentage: "93%",
    },
  ];

  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const cardsRef = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (entry.isIntersecting && id) {
            setVisibleCards((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(cardsRef.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "linear-gradient(to right, #261b30, #1a1f33)" }}>
      <div className="text-center font-extrabold text-2xl md:text-3xl text-[#b1b2b3] py-12">
        Education
      </div>
      <div className="flex justify-center px-4">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-wrap justify-center gap-6">
            {education.map((val, index) => (
              <div
                key={val.id}
                ref={(el) => (cardsRef.current[val.id] = el)}
                data-id={val.id}
                className={`
                  w-full sm:w-[90%] md:w-[45%] lg:w-[30%] border-2 border-[#854ce6] p-4 sm:p-5 
                  text-[#84858a] bg-[#1c1c27] rounded-2xl flex items-start gap-4
                  transition-all duration-[1000ms] ease-in-out transform
                  ${visibleCards.has(val.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                  delay-[${index * 200}ms]
                `}
              >
                {/* Circle for Initial */}
                <div className="flex-shrink-0">
                  <div className="w-[60px] h-[60px] flex items-center justify-center border-2 border-[#854ce6] rounded-full text-base sm:text-lg font-semibold">
                    {val.initial}
                  </div>
                </div>

                {/* Text Info */}
                <div className="flex flex-col gap-1 text-sm sm:text-base">
                  <div className="font-bold leading-snug">
                    Institute: {val.instituteName}
                  </div>
                  <div>Course: {val.Course}</div>
                  <div>Department: {val.department}</div>
                  <div>Year: {val.YearOfPassedOut}</div>
                  <div>Percentage: {val.percentage}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

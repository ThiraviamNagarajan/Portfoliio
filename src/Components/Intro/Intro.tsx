import "./index.css";
import profilePic from "../../assets/Img/profilePic.jpeg";

const Intro = () => {
  return (
    <div
      className="flex items-center justify-center flex-col gap-5 py-8 px-4 sm:px-6"
      style={{ background: "linear-gradient(to right, #261b30, #1a1f33)" }}
    >
      <div className="w-[170px] h-[170px] md:w-[140px] md:h-[140px] sm:w-[120px] sm:h-[120px] flex items-center justify-center border-[5px] border-white rounded-full overflow-hidden">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-[#ffffff] text-[24px] md:text-[20px] sm:text-[18px] font-[900] text-center headername">
        👋 Hello, I'm Thiraviam Nagarajan
      </div>

      <div className="text-[#ffffff] text-[18px] md:text-[16px] sm:text-[14px] font-[500] text-center designation">
        Front-End Developer | Agile Team Player | Background in QA
      </div>

      <div className="w-[70%] md:w-[80%] sm:w-[95%] text-[#ffffff] text-[14px] md:text-[13px] sm:text-[12px] text-center text-container leading-relaxed sm:leading-[1.8rem]">
        I’m Thiraviam Nagarajan, a dedicated front-end developer with 1 year and
        3 months of experience, focused on building responsive, user-friendly
        web interfaces. I started my career in manual testing, spending 1.5 years
        building a solid foundation in software quality and user-focused thinking —
        skills that naturally transitioned into front-end development. I've been working
        in Agile environments from the start, which has helped me stay flexible,
        collaborative, and focused on delivering value in each sprint.
      </div>
    </div>
  );
};

export default Intro;

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

type Section = "intro" | "skills" | "experience" | "projects" | "education" | "contact";

interface FooterProps {
  onSectionSelect: (section: Section) => void;
}

const Footer: React.FC<FooterProps> = ({ onSectionSelect }) => {
  return (
    <footer className="bg-[#1a1923] text-white py-8">
      <div className="container mx-auto px-4 text-center flex flex-col items-center space-y-6">
        <h1 className="text-xl font-bold text-purple-500">Thiraviam Nagarajan</h1>

        <div className="flex flex-wrap justify-center gap-6 text-base">
          <button onClick={() => onSectionSelect("intro")} className="hover:text-purple-400 transition">
            About
          </button>
          <button onClick={() => onSectionSelect("skills")} className="hover:text-purple-400 transition">
            Skills
          </button>
          <button onClick={() => onSectionSelect("experience")} className="hover:text-purple-400 transition">
            Experience
          </button>
          <button onClick={() => onSectionSelect("projects")} className="hover:text-purple-400 transition">
            Projects
          </button>
          <button onClick={() => onSectionSelect("education")} className="hover:text-purple-400 transition">
            Education
          </button>
          <button onClick={() => onSectionSelect("contact")} className="hover:text-purple-400 transition">
            Contact
          </button>
        </div>

        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/ThiraviamNagarajan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/thiraviam-nagarajan-8005531a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/thiraviam_nagarajan?utm_source=qr&igsh=MWZkY2QzbW5nOHlxOQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Thiraviam Nagarajan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

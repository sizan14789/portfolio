"use client";

import { FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import {
  SiCplusplus,
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import SkillCard from "./Skills/SkillCard";
import { getContext } from "@/context/AppContext";

export default function Skills() {
  const { skillsRef } = getContext();

  const skillSet = [
    {
      name: "Next.js",
      category: "Frontend",
      icon: SiNextdotjs,
      color: "text-[#f5f3ff]",
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: SiExpress,
      color: "text-[#f5f3ff]",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      icon: SiPostgresql,
      color: "text-[#67e8f9]",
    },
    {
      name: "TypeScript",
      category: "Language",
      icon: SiTypescript,
      color: "text-[#60a5fa]",
    },
    {
      name: "C++",
      category: "Language",
      icon: SiCplusplus,
      color: "text-[#60a5fa]",
    },
    {
      name: "Python",
      category: "Language",
      icon: FaPython,
      color: "text-[#fbbf24]",
    },
    {
      name: "Git",
      category: "Tools",
      icon: FaGitAlt,
      color: "text-[#f97316]",
    },
    {
      name: "GitHub",
      category: "Tools",
      icon: FaGithub,
      color: "text-[#f5f3ff]",
    },
  ];

  return (
    <section className="wrapper" ref={skillsRef}>
      <div className="mb-8">
        <h2 className="section-title">
          <GrTechnology className="text-(--primary)" />
          Skills & Technologies
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skillSet?.map((elem) => (
          <SkillCard skillDetails={elem} key={elem.name} />
        ))}
      </div>
    </section>
  );
}

"use client";

import { Star } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import projects from "@/data/projects.json";
import ProjectCard from "./Projects/ProjectCard";
import { getContext } from "@/context/AppContext";

export default function Projects() {
  const { projectRef } = getContext();

  return (
    <section className="wrapper" ref={projectRef}>
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <h2 className="section-title">
          <Star className="text-(--primary)" />
          Featured Projects
        </h2>
        <a
          href="https://github.com/sizan14789?tab=repositories"
          className="gap-1 text-sm items-center mt-1 text-(--primary) hidden md:flex group"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repos{" "}
          <FaArrowRight className="text-xs mt-1 group-hover:translate-x-1 duration-200" />
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
        {projects?.map((elem) => {
          return <ProjectCard projectDetail={elem} key={elem.id} />;
        })}
      </div>
    </section>
  );
}

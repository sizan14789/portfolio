"use client";

import { getContext } from "@/context/AppContext";

export default function HeroCta() {
  const { projectRef } = getContext();

  const scrollToProject = () => {
    projectRef?.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-6 flex gap-4 justify-center md:justify-start">
      <button className="button-primary " onClick={scrollToProject}>
        Projects
      </button>
      <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="button-secondary">Resume</button>
      </a>
    </div>
  );
}

import { Star, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { RxArrowTopRight, RxGithubLogo } from "react-icons/rx";
import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="wrapper my-20 mb-40">
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <h2 className="section-title">
          <Star className="text-(--primary)" />
          Featured Projects
        </h2>
        <Link
          href=""
          className="gap-1 text-sm items-center mt-1 text-(--primary) hidden md:flex"
        >
          View All <FaArrowRight className="text-xs" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {projects?.map((elem) => {
          return <ProjectCard projectDetail={elem} />;
        })}
      </div>
    </section>
  );
}

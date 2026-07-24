import { Tag } from "lucide-react";
import Image from "next/image";
import { RxGithubLogo } from "react-icons/rx";

export default function ProjectCard({
  projectDetail,
}: {
  projectDetail: {
    id: number;
    name: string;
    year: number;
    image: string;
    imageAlt: string;
    githubUrl: string;
    liveUrl: string;
    description: string;
    technologies: {
      id: number;
      name: string;
      color: string;
    }[];
  };
}) {
  const {
    name,
    year,
    image,
    imageAlt,
    githubUrl,
    liveUrl,
    description,
    technologies,
  } = projectDetail;

  return (
    <article className="group flex-1 overflow-hidden max-w-140 card-border shadow-(--shadow)">
      <div className="aspect-16/10 overflow-hidden bg-(--surface-hover) p-12 flex justify-center items-center">
        <figure className="relative rounded-2xl overflow-hidden w-full h-full border border-(--white)">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover duration-200 brightness-90 group-hover:brightness-100 group-hover:scale-105 "
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="eager"
          />
        </figure>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-4 ">
          <h3 className="text-xl font-semibold text-(--foreground) font-mono group-hover:text-(--primary) duration-200">
            {name}
          </h3>

          <span className="font-mono text-sm tracking-wide text-(--muted)">
            {year}
          </span>
        </div>

        <p className="mt-3 txt font-semibold line-clamp-3">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          <Tag size={16} className="mt-1" />
          {technologies?.map(({ id, name, color }) => {
            return (
              <span
                className={`rounded-md bg-(--surface-hover) px-2.5 py-1 font-mono text-xs font-bold ${color}`}
                key={id}
              >
                {name}
              </span>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm">
          <a
            href={liveUrl}
            className="flex items-center gap-1.5 text-(--muted) hover:text-(--primary) font-semibold"
          >
            Live Demo
          </a>
          <span className="text-(--border)">|</span>
          <a
            href={githubUrl}
            className="flex items-center gap-1.5 text-(--muted) hover:text-(--foreground)"
          >
            <RxGithubLogo />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

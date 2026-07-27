import { MoveUpRight, Play, Tag } from "lucide-react";
import Image from "next/image";
import { RxArrowTopRight, RxGithubLogo } from "react-icons/rx";

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
      <div className="aspect-16/10 overflow-hidden bg-(--surface-hover) p-8 md:p-12 flex justify-center items-center">
        <figure className="relative rounded-2xl overflow-hidden w-full h-full">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover duration-200 brightness-95 group-hover:brightness-100 group-hover:scale-105 "
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
              <span className={`tech-tag ${color}`} key={id}>
                {name}
              </span>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-3 font-mono">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full text-(--muted) flex gap-1.5 items-center hover:text-(--foreground) group/live"
          >
            Live
            <MoveUpRight
              size={16}
              strokeWidth={3}
              className="mt-px group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 duration-200"
            />
          </a>
          <span className="text-sm text-(--muted)">|</span>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
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

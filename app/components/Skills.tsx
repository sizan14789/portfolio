import { FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skillset = [
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

  //   const skills = {
  //     Languages: ["C++", "Python", "Java", "JavaScript", "TypeScript"],

  //     Frontend: ["React", "Next.js", "Tailwind CSS"],

  //     Backend: ["Node.js", "Express.js"],

  //     Databases: ["PostgreSQL", "MySQL"],

  //     Tools: ["Git", "GitHub"],
  //   };

  return (
    <section className="wrapper my-10 md:my-20">
      <div className="mb-8">
        <h2 className="section-title">Skills</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skillset.map(({ name, category, icon: Icon, color }) => (
          <div
            key={name}
            className="flex items-center gap-3 rounded-xl border border-(--border) bg-(--surface) p-4 transition duration-200 hover:border-(--primary) hover:bg-(--surface-hover) group"
          >
            <Icon className={`text-2xl ${color}`} />

            <div>
              <p className="font-mono text-sm font-semibold tracking-wide text-(--foreground) group-hover:text-(--primary) duration-200">
                {name}
              </p>

              <p className="mt-0.5 text-xs text-(--muted)">{category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, technologies]) => (
          <div
            key={category}
            className="rounded-xl border border-(--border) bg-(--surface) p-6"
          >
            <h3 className="font-mono font-semibold tracking-wide text-(--foreground)">
              {category}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-(--surface-hover) px-3 py-1.5 font-mono text-sm font-semibold text-(--muted)"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}

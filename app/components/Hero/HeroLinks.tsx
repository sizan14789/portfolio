import { FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { github_url, linkedin_url } from "@/data/sizan.json";

export default function HeroLinks() {
  return (
    <div className="flex gap-1.5 mt-6 text-(--muted) justify-center md:justify-start pl-4 md:pl-0 font-mono">
      <a
        href={github_url}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-(--foreground) flex gap-1.5 group items-center"
      >
        <RxGithubLogo className="group-hover:text-(--primary)" />
        <span className="tracking-wide">Github</span>
      </a>
      <span className="text-(--border)">|</span>
      <a
        href={linkedin_url}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-(--foreground) flex items-center gap-1.5 group "
      >
        <FaLinkedin className="group-hover:text-(--primary)" />
        <span className="tracking-wide">LinkedIn</span>
      </a>
    </div>
  );
}

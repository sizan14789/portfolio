import { club } from "@/data/About.json";
import { Expand } from "lucide-react";

export default function Experience({ css }: { css: string }) {
  return (
    <article className={`flex-1 card-border px-6 py-6 group ${css}`}>
      <h2 className="section-title text-lg! mb-2 group-hover:text-(--primary)">
        <Expand size={16} className="text-(--primary)" />
        Experience
      </h2>

      <p className="txt">
        I contributed to my university's official{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={club.url}
          className="highlighted-txt links"
          title="CPCCU"
        >
          Competitive Programming Camp
        </a>{" "}
        website where I designed and built the frontend layout for the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={club.url + "jobpipeline"}
          className="highlighted-txt links"
          title="Job Pipeline, CPCCU"
        >
          Job Pipeline
        </a>{" "}
        page.
      </p>
    </article>
  );
}

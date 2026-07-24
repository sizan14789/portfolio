import { university } from "@/data/About.json";

export default function Education({ css }: { css: string }) {
  return (
    <article className={`flex-1 card-border px-6 py-6 group ${css}`}>
      <h2 className="section-title text-lg! mb-2 group-hover:text-(--primary)">
        Education
      </h2>

      <p className="txt">
        B.Sc. in Computer Science and Engineering. <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={university.url}
          className="highlighted-txt"
        >
          {university.name}
        </a>{" "}
        <br />
        2024 - {new Date().getFullYear() >= 2028 ? 2028 : "Present"}
      </p>
    </article>
  );
}

import { Info } from "lucide-react";

export default function AboutMe({ css }: { css: string }) {
  let age = new Date().getFullYear() - new Date("2005-09-17").getFullYear();
  if (new Date().getMonth() < 9) age--;

  return (
    <article className={`flex-1 card-border px-6 py-6 group ${css}`}>
      <h2 className="section-title text-lg! mb-2 group-hover:text-(--primary)">
        <Info size={16} className="text-(--primary)" />
        About Me
      </h2>
      <p className="txt">
        I'm a {age}-year-old Computer Science student, currently living in{" "}
        <span className="highlighted-txt">Gazipur, Bangladesh</span>. I have a
        good understanding of full-stack development, and a keen eye for problem
        solving. I like learning cool technologies and building stuff.
      </p>
    </article>
  );
}

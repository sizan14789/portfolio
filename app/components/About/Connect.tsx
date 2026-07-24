import { RiFiverrFill } from "react-icons/ri";

export default function Connect({ css }: { css: string }) {
  let age = new Date().getFullYear() - new Date("2005-09-17").getFullYear();
  if (new Date().getMonth() < 9) age--;

  return (
    <article
      className={`flex-1 card-border px-6 py-6 group ${css} flex flex-col`}
    >
      <h2 className="section-title text-lg! mb-2 group-hover:text-(--primary) text-(--primary)">
        Let's Get In Touch
      </h2>
      <p className="txt mb-4">
        I'm open to internships, part time job or freelance work.
      </p>
      <div className="flex mt-auto gap-4 items-center">
        <button className="button-primary rounded-md! flex-1">Mail Me</button>
        <a
          href="https://www.fiverr.com/s/2KXpmeQ"
          target="blank"
          rel="noopener noreferrer"
          className="text-4xl text-(--muted) hover:text-(--primary) duration-200"
        >
          <RiFiverrFill />
        </a>
      </div>
    </article>
  );
}

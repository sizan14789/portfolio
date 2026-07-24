import { university, club } from "@/data/About.json";

export default function About() {
  let age = new Date().getFullYear() - new Date("2005-09-17").getFullYear();
  if (new Date().getMonth() < 9) age--;

  return (
    <section className="wrapper flex gap-6 flex-col-reverse md:flex-col leading-6">
      <div className="flex-1 flex gap-6 flex-col md:flex-row">
        <article className="flex-1 card-border px-6 py-6 group">
          <h2 className="section-title text-lg! mb-2 group-hover:text-(--primary)">
            About Me
          </h2>
          <p className="txt">
            I'm a {age}-year-old Computer Science student, currently living in{" "}
            <span className="highlighted-txt">Gazipur, Bangladesh</span>. I have
            a good understanding of full-stack development, and a keen eye for
            problem solving. I like learning cool technologies and building
            stuff.
          </p>
        </article>

        <article className="flex-1 card-border px-6 py-6 group">
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

        <article className="flex-1 card-border px-6 py-6 group">
          <h2 className="section-title text-lg! mb-2 group-hover:text-(--primary)">
            Experience
          </h2>

          <p className="txt">
            I contributed to my university's official{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={club.url}
              className="highlighted-txt"
            >
              Competitive Programming Club
            </a>{" "}
            website where I designed and built the frontend layout for the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={club.url + "jobpipeline"}
              className="highlighted-txt"
            >
              Job Pipeline
            </a>{" "}
            page.
          </p>
        </article>
      </div>

      <article className="flex-1 card-border px-6 py-6 group">
        <h2 className="section-title text-lg! mb-2 group-hover:text-(--primary)">
          Let's Get In Touch
        </h2>
        <p className="txt">
          I'm a {age}-year-old Computer Science student, currently living in{" "}
          <span className="highlighted-txt">Gazipur, Bangladesh</span>. I have a
          good understanding of full-stack development, and a keen eye for
          problem solving. I like learning cool technologies and building stuff.
        </p>
      </article>
    </section>
  );
}

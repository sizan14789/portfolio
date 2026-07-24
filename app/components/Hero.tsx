import Image from "next/image";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

export default function Hero() {
  const [frappe, setFrappe] = useState<Boolean>(false);

  return (
    <section className="wrapper flex gap-8 items-center flex-col-reverse md:flex-row ">
      <div className={`fixed inset-0 frappe ${frappe ? "flex" : "hidden"}`} />

      <div className="flex flex-col flex-1 md:flex-1/4 text-center md:text-start items-center md:items-start">
        <p className="text-base text-(--muted)">Hello, I&apos;m</p>

        <h1 className="mt-2 text-5xl font-bold text-(--foreground) sm:text-6xl lg:text-7xl">
          Sizan Molla
        </h1>

        <h2 className="mt-2 text-2xl font-semibold text-(--primary) sm:text-3xl">
          Full-Stack Developer
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-(--muted)">
          Based in <span className="highlighted-txt">Gazipur, Bangladesh</span>.
          I specialize in building modern web applications with{" "}
          <span className="font-mono highlighted-txt">Next.js</span> and{" "}
          <span className="font-mono highlighted-txt">Express.js</span>.
        </p>

        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <button
            className="button-primary "
            onClick={() => setFrappe((prev) => !prev)}
          >
            Projects
          </button>
          <a href="/assets/resume.pdf">
            <button className="button-secondary">Resume</button>
          </a>
        </div>

        <div className="flex gap-1.5 mt-6 text-(--muted) justify-center md:justify-start pl-4 md:pl-0 font-mono">
          <a
            href="https://github.com/sizan14789"
            target="_blank"
            className="transition hover:text-(--foreground) flex gap-1.5 group items-center"
          >
            <RxGithubLogo className="group-hover:text-(--primary)" />
            <span className="tracking-wide">Github</span>
          </a>
          <span className="text-(--border)">|</span>
          <a
            href="https://github.com/sizan14789"
            target="_blank"
            className="transition hover:text-(--foreground) flex items-center gap-1.5 group "
          >
            <FaLinkedin className="group-hover:text-(--primary)" />
            <span className="tracking-wide">LinkedIn</span>
          </a>
        </div>
      </div>
      <div className="md:flex-1 flex justify-center items-center">
        <figure className="rounded-full overflow-hidden min-w-44 max-w-52 sm:max-w-56 md:max-w-70 lg:max-w-80 aspect-square border border-(--border) flex justify-center">
          <Image
            src="/assets/hero.jpg"
            height={400}
            width={400}
            alt="Profile pic hero"
            className="object-cover "
            loading="eager"
          />
        </figure>
      </div>
    </section>
  );
}

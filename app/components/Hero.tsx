import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { RxDividerVertical, RxGithubLogo } from "react-icons/rx";

export default function Hero() {
  return (
    <section className="wrapper flex gap-8 items-center flex-col-reverse md:flex-row my-20">
      <div className="flex flex-col flex-1 md:flex-1/4 text-center md:text-start items-center md:items-start">
        <p className="text-base text-(--muted)">Hello, I&apos;m</p>

        <h1 className="mt-2 text-5xl font-bold text-(--foreground) sm:text-6xl lg:text-7xl">
          Sizan Molla
        </h1>

        <h2 className="mt-2 text-2xl font-semibold text-(--primary) sm:text-3xl">
          Full-Stack Developer
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-(--muted)">
          Based in <strong>Dhaka, Bangladesh</strong>. I specialize in building
          modern web applications with{" "}
          <strong className="font-mono text-base hover:bg-(--primary) hover:text-(--background) duration-200 ">
            Next.js
          </strong>{" "}
          and{" "}
          <strong className="font-mono text-base hover:bg-(--primary) hover:text-(--background) duration-200 ">
            Express.js
          </strong>
          .
        </p>

        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <button className="button-primary ">Projects</button>
          <a href="/assets/resume.pdf">
            <button className="button-secondary">Resume</button>
          </a>
        </div>

        <div className="mt-6 flex gap-1 text-sm text-(--muted) justify-center md:justify-start pl-3 md:pl-0 font-mono">
          <a
            href="https://github.com/sizan14789"
            target="_blank"
            className="transition hover:text-(--foreground) flex gap-1.5 group"
          >
            <RxGithubLogo className="text-base mt-0.5 group-hover:text-(--primary)" />
            <span className="tracking-wide">Github</span>
          </a>
          <RxDividerVertical className="text-xl" />
          <a
            href="https://github.com/sizan14789"
            target="_blank"
            className="transition hover:text-(--foreground) flex gap-1 group "
          >
            <FaLinkedin className="text-base mt-0.5 group-hover:text-(--primary)" />
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
          />
        </figure>
      </div>
    </section>
  );
}

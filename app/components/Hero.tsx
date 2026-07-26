import Image from "next/image";
import HeroCta from "./Hero/HeroCta";
import HeroLinks from "./Hero/HeroLinks";

export default function Hero() {
  return (
    <section className="wrapper flex gap-8 items-center flex-col-reverse md:flex-row ">
      <div className="flex flex-col flex-1 md:flex-1/4 text-center md:text-start items-center md:items-start">
        <p className="txt sm:text-base!">Hello, I&apos;m</p>

        <h1 className="mt-1.5 text-5xl font-bold text-(--foreground) sm:text-6xl lg:text-7xl">
          Sizan Molla
        </h1>

        <h2 className="mt-2 text-2xl font-semibold text-(--primary) sm:text-3xl">
          Full-Stack Developer
        </h2>

        <p className="mt-4 max-w-xl leading-7 txt sm:text-base!">
          Based in <span className="highlighted-txt">Gazipur, Bangladesh</span>.
          I specialize in building modern web applications with{" "}
          <span className="font-mono highlighted-txt">Next.js</span> and{" "}
          <span className="font-mono highlighted-txt">Express.js</span>.
        </p>

        <HeroCta />

        <HeroLinks />
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

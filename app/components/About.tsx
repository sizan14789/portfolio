import AboutMe from "./About/AboutMe";
import Connect from "./About/Connect";
import Education from "./About/Education";
import Experience from "./About/Experience";

export default function About() {
  return (
    <section className="wrapper flex gap-6 flex-col leading-6">
      <div className="flex-1 flex gap-6 flex-col sm:flex-row">
        <AboutMe css="" />

        <Education css="" />

        <Connect css="hidden lg:flex" />
      </div>
      <Experience css="" />
      <Connect css="lg:hidden" />
    </section>
  );
}

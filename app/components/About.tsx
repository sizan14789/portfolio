import AboutMe from "./About/AboutMe";
import Connect from "./About/Connect";
import Education from "./About/Education";
import Experience from "./About/Experience";

export default function About() {
  return (
    <section className="wrapper flex gap-6 flex-col md:flex-col leading-6">
      <div className="flex-1 flex gap-6 flex-col md:flex-row">
        <AboutMe css="" />

        <Education css="" />

        <Connect css="" />
      </div>
      <Experience css="" />
    </section>
  );
}

export default function Connect({ css }: { css: string }) {
  let age = new Date().getFullYear() - new Date("2005-09-17").getFullYear();
  if (new Date().getMonth() < 9) age--;

  return (
    <article className={`flex-1 card-border px-6 py-6 group ${css}`}>
      <h2 className="section-title text-lg! mb-2 group-hover:text-(--primary) text-(--primary)">
        Let's Get In Touch
      </h2>
      <p className="txt mb-4">
        I'm open to internships, part time job or freelance work.
      </p>
      <button className="button-primary rounded-md!">Mail Me</button>
    </article>
  );
}

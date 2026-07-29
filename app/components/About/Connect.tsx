import { Signature } from "lucide-react";
import { linkedin_url, mail } from "@/data/sizan.json";
import { LiaLinkedin } from "react-icons/lia";

export default function Connect({ css }: { css: string }) {
  return (
    <div className={`flex-1 card-border px-6 py-6 group ${css} flex flex-col`}>
      <h2 className="section-title text-lg! mb-2 group-hover:text-(--primary) text-(--primary)">
        <Signature size={18} />
        Let's Get In Touch
      </h2>
      <p className="txt mb-4">
        I'm open to internships, part time job and freelance work opportunities.
      </p>
      <div className="flex mt-auto gap-4 items-center">
        <a
          href={`mailto:${mail}?subject=Portfolio%20Inquiry`}
          className="button-primary rounded-md! flex-1"
        >
          Mail Me
        </a>
        <a
          href={linkedin_url}
          target="blank"
          rel="noopener noreferrer"
          className="text-[50px] text-(--muted) hover:text-(--primary-hover) duration-200 "
          title="LinkedIn"
        >
          <LiaLinkedin />
        </a>
      </div>
    </div>
  );
}

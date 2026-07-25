import { AiOutlineFacebook } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { TbBrandFiverr } from "react-icons/tb";

export default function Footer() {
  const socialLinks = [
    {
      id: 1,
      url: "https://github.com/sizan14789",
      icon: FiGithub,
      scale: "scale-90",
    },
    {
      id: 2,
      url: "https://www.linkedin.com/",
      icon: PiLinkedinLogoBold,
      scale: "scale-100",
    },

    {
      id: 3,
      url: "https://www.fiverr.com/s/2KXpmeQ",
      icon: TbBrandFiverr,
      scale: "scale-100",
    },
    {
      id: 4,
      url: "https://www.facebook.com/sizan14789/",
      icon: AiOutlineFacebook,
      scale: "scale-110",
    },
  ];

  return (
    <footer className="mt-auto border-t border-(--divider)">
      <div className="wrapper my-0! py-2 flex flex-col-reverse md:flex-row items-center  justify-center md:justify-between">
        <p className="text-xs text-(--muted)">
          © {new Date().getFullYear()} Sizan Molla. All rights reserved.
        </p>

        <div className="flex text-(--muted) justify-center items-center py-4 font-mono text-2xl">
          {socialLinks?.map(({ id, url, icon: Icon, scale }) => {
            return (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 flex gap-1.5 items-center"
                key={id}
              >
                <Icon className={`hover:text-(--primary) ${scale}`} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

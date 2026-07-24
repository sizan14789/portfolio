import { Key } from "lucide-react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiFiverrFill } from "react-icons/ri";
import { RxGithubLogo } from "react-icons/rx";

export default function Footer() {
  const socialLinks = [
    {
      id: 1,
      url: "https://github.com/sizan14789",
      icon: RxGithubLogo,
    },
    {
      id: 2,
      url: "https://www.linkedin.com/",
      icon: FaLinkedin,
    },

    {
      id: 4,
      url: "https://www.fiverr.com/s/2KXpmeQ",
      icon: RiFiverrFill,
    },
    {
      id: 3,
      url: "https://www.facebook.com/sizan14789/",
      icon: FaFacebookSquare,
    },
  ];

  return (
    <footer className="mt-auto border-t border-(--border)">
      <div className="wrapper my-0! flex gap-4 pt-4 pb-6 text-(--muted) sm:flex-row sm:items-center sm:justify-between">
        <p className="txt">
          © {new Date().getFullYear()} Sizan Molla. All rights reserved.
        </p>

        <div className="flex text-(--muted) justify-center md:justify-start pl-4 md:pl-0 font-mono text-[22px]">
          {socialLinks?.map(({ id, url, icon: Icon }, index) => {
            return (
              <span key={id} className="flex">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition px-1.5 flex gap-1.5 items-center"
                >
                  <Icon
                    className={`hover:text-(--primary) ${id === 4 ? "scale-118" : ""}`}
                  />
                </a>

                {index === socialLinks.length - 1 ? (
                  <></>
                ) : (
                  <span className="text-(--border)">|</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

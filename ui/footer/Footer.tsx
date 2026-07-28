"use client";

import { AiOutlineFacebook } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { TbBrandFiverr } from "react-icons/tb";
import {
  github_url,
  linkedin_url,
  fiverr_url,
  fb_url,
} from "@/data/sizan.json";
import { IconType } from "react-icons";
import SocialCard from "./SocialCards";
import Credits from "./Credits";
import Theme from "./Theme";

export default function Footer() {
  const socialLinks: {
    id: number;
    url: string;
    icon: IconType;
    scale: string;
    title: string;
  }[] = [
    {
      id: 1,
      url: github_url,
      icon: FiGithub,
      scale: "scale-90",
      title: "Github",
    },
    {
      id: 2,
      url: linkedin_url,
      icon: PiLinkedinLogoBold,
      scale: "scale-100",
      title: "LinkedIn",
    },

    {
      id: 3,
      url: fiverr_url,
      icon: TbBrandFiverr,
      scale: "scale-100",
      title: "Fiverr",
    },
    {
      id: 4,
      url: fb_url,
      icon: AiOutlineFacebook,
      scale: "scale-110",
      title: "Facebook",
    },
  ];

  return (
    <footer className="mt-auto border-t border-(--divider) pt-2">
      <div className="wrapper my-0! py-2 flex flex-col items-center justify-center md:flex-row ">
        <Credits css="hidden md:flex" />

        <Theme />

        <div className="flex justify-center items-center py-4 text-2xl gap-4 md:ml-auto">
          {socialLinks?.map((elem) => {
            return <SocialCard socialDetail={elem} key={elem.id} />;
          })}
        </div>

        <Credits css="md:hidden" />
      </div>
    </footer>
  );
}

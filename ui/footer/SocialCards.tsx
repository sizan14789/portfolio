import { IconType } from "react-icons";

export default function SocialCard({
  socialDetail,
}: {
  socialDetail: {
    url: string;
    scale: string;
    icon: IconType;
    title: string;
  };
}) {
  const { url, scale, icon: Icon, title } = socialDetail;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-2 flex gap-1.5 items-center"
      title={title}
    >
      <Icon className={`hover:text-(--primary) ${scale}`} />
    </a>
  );
}

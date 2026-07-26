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
      className="text-(--muted) hover:text-(--foreground)"
      title={title}
    >
      <Icon className={`${scale}`} />
    </a>
  );
}

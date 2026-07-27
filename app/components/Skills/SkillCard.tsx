import { IconType } from "react-icons";

export default function SkillCard({
  skillDetails,
}: {
  skillDetails: {
    name: string;
    color: string;
    icon: IconType;
    category: string;
  };
}) {
  const { name, color, icon: Icon, category } = skillDetails;
  return (
    <div className="flex items-center gap-3 p-4 card-border rounded-xl! hover:bg-(--surface-hover)! group ">
      <Icon className={`text-2xl ${color} mb-1`} />

      <div>
        <h3 className=" font-mono text-sm font-semibold tracking-wide text-(--foreground) group-hover:text-(--primary) duration-200">
          {name}
        </h3>

        <p className="text-xs! txt">{category}</p>
      </div>
    </div>
  );
}

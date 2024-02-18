import cn from "clsx";

type Props = {
  items: { name: string; color: string }[];
};

export function TechStack({ items }: Props) {
  return (
    <div className="flex items-center flex-wrap gap-2 my-3">
      <p className="text-lg font-bold">Tech:</p>
      {items.map((i) => (
        <span
          key={i.name}
          className={cn(
            "py-1 px-2 text-xs leading-3 font-medium rounded-sm text-white",
            i.color
          )}
        >
          {i.name}
        </span>
      ))}
    </div>
  );
}

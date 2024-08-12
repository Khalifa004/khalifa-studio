import { cn } from "@/utils/cn";


const data = [
  {
    name: "Next.js",
 
    image:
      "nextjs.svg",
  },
  {
    name: "TailwindCSS",
    
    image:
      "tail.svg",
  },
  {
    name: "Blender",
    
    image:
      "blend.svg",
  },
  {
    name: "Unity",
   
    image:
      "unity.svg",
  },
  {
    name: "Typescript",

    image:
      "ts.svg",
  },
  {
    name: "React",
    
    image:
      "react.svg",
  },
  {
    name: "Figma",
    
    image:
      "figama.svg",
  },
];

export default function AvatarList({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes: Record<"sm" | "md" | "lg", string> = {
    lg: "m-3 size-6",
    md: "m-2 size-12",
    sm: "m-1 size-8",
  };

  return (
    <div className={cn("flex py-12", className)}>
      {data.map((item) => (
        <div
          key={item.name}
          className="group relative z-0 -ml-4 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110"
        >
          <div className="relative overflow-hidden rounded-full bg-white">
            <div className="bg-size pointer-events-none absolute h-full w-full animate-bg-position from-violet-500 from-30% via-cyan-400 via-50% to-pink-500 to-80% bg-[length:300%_auto] opacity-15 group-hover:bg-gradient-to-r" />
            <div className="z-1 blur-lg" />
            <img
              src={item.image}
              alt={item.name}
              className={cn("rounded-full object-cover", sizes[size] ?? sizes.md)}
            />
          </div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-slate-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
            <div className="text-sm font-semibold">{item.name}</div>
        
          </div>
        </div>
      ))}
    </div>
  );
}

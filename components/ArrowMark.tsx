import type { SVGProps } from "react";

type ArrowMarkProps = SVGProps<SVGSVGElement> & {
  direction?: "right" | "up-right" | "left";
};

/** A compact directional mark used across portfolio links and actions. */
export default function ArrowMark({
  direction = "right",
  className,
  ...props
}: ArrowMarkProps) {
  const rotation = {
    right: "",
    "up-right": "-rotate-45",
    left: "rotate-180",
  }[direction];

  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${rotation} ${className ?? ""}`}
      {...props}
    >
      <path
        d="M2.25 8.75h8.35V3.5l7.15 6.5-7.15 6.5v-5.25H2.25V8.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

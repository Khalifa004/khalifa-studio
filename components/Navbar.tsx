




import Link from "next/link";
import { Dock, DockIcon } from "./ui/dock";






import { cn } from "@/utils/cn";
import { ModeToggle } from "./ui/mode-toggle";
import { buttonVariants } from "./ui/button1";
import { Separator } from "@radix-ui/react-separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { DATA } from "@/data";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
  

      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-opacity-20 bg-black [box-shadow:0_0_0_1px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.12),0_12px_24px_rgba(0,0,0,0.15)] transform-gpu dark:[border:1px_solid_rgba(0,0,0,0.12)] dark:[box-shadow:0_-20px_80px_-20px_rgba(0,0,0,0.12)_inset]">




        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full " />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-full py-2 bg-white" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
      
    </div>
  );
}
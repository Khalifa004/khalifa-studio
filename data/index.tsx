

import { Icons } from "@/components/ui/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
export const companies = [
    {
      id: 1,
      name: "Next.js",
      img: "/next.png",
   
    },
    
 
    {
      id: 2,
      name: "TailwindCSS",
      img: "/tailwinds.svg", 
     
    },
   
    {
      id: 4,
      name: "FramerMotion",
      img: "/framer.svg",
     
    },

    {
      id: 5,
      name: "TypeSript",
      img: "/ts.svg",
     
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      
    },
 
  ];
export const DATA = {

    navbar: [
        { href: "/", icon: HomeIcon, label: "Home"  },
        { href: "#projects", icon: CodeIcon, label: "Projects" },
        { href: "#Services", icon: PencilLine, label: "Services" },
       
      ],
      contact: {
 
        social: {
         
          LinkedIn: {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/khalifa-seck-27a139251/",
            icon: Icons.linkedin,
    
            navbar: true,
          },
          
         
          email: {
            name: "Send Email",
            url: "#",
            icon: Icons.email,
    
            navbar: false,
          },
        },
      },
      
     
         


projects: [
   
    {
      title: "AI ScriptLab",
      href: "https://ai-generator-woad.vercel.app/",
      dates: "June 2024",
      active: true,
      description:
        "Unleash your creativity with AI ScriptLab, the ultimate AI-powered platform for generating code, crafting blog content, optimizing YouTube titles, and enhancing text.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
       
      ],
      links: [
        {
          type: "Live Preview",
          href: "https://ai-generator-woad.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Khalifa004/ai-generator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Scriptlab.mp4",
      
    },
    {
      title: "KhalifaRenders",
      href: "https://k-renders-weld.vercel.app/",
      dates: "October 2023 - March 2024",
      active: true,
      description:
        "Explore this site to view my latest 3D renders and animations. Here, I share my creative process and showcase detailed models that bring my imaginative designs to life.",
      technologies: [
        "Next.js",
        "Typescript",
        "Blender",
        "TailwindCSS",
        "Shadcn UI",
        
      ],
      links: [
        {
          type: "Live Preview",
          href: "https://k-renders-weld.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Khalifa004/Vision-Vault",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Krenders.mp4",
    },
    {
      title: "UX/UI",
      href: "/",
      dates: "August 2024",
      active: true,
      description:
        "Developed a user-friendly expense tracking application with Next.js, incorporating intuitive design and real-time data updates to help users efficiently manage their finances.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        
      ],
      links: [
        {
          type: "Live Preview",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", 
      
      video: "/trackervideo.mp4",
    },
    {
      title: "Portfolio",
      href: "/",
      dates: "May 2024",
      active: true,
      description:
        "Built with Next.js, this portfolio showcases my projects and skills with a focus on performance and user experience. Explore my work and see how I leverage modern web technologies to create innovative solutions.",
      technologies: [
        "Next.js",
        "Typescript",
        
        "TailwindCSS",
        "Shadcn UI",
      
     
      ],
      links: [
        {
          type: "Live Preview",
          href: "https://khalifa.studio",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "portfolio.mp4",
    },
  ],}
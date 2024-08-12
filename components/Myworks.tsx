import React from "react";



 // Import the Card components
import { ProjectCard } from "./ui/projectcard";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import BoxReveal from "./ui/box-reveal";
import { DATA } from "@/data";

const Myworks = () => {
  return (
    <section id="projects" className="pb-3 pt-20">
      <div className="space-y-12 w-full py-12">
        <BoxReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-[#BEF264]">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve had the opportunity to work on a diverse range of
                projects, from straightforward websites to intricate web
                applications.
                <br />
                Here are some of my personal favorites.
              </p>
            </div>
          </div>
        </BoxReveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map((project) => (
            <BoxReveal key={project.title}>
              {/* Wrap each ProjectCard with CardContainer and CardBody */}
              <CardContainer containerClassName="rounded-xl   shadow-lg">
                <CardBody>
                  <CardItem 
                    translateZ="-50"
        
                  >
                    <ProjectCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </BoxReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Myworks;

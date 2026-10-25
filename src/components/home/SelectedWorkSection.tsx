import React from "react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";

export function SelectedWorkSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="selected-work" className="py-24 md:py-36 bg-[#111210] relative">
      <Container>
        {/* Editorial Section Heading */}
        <SectionHeading
          eyebrow="Case Studies & Products"
          title="Selected work"
          description="A selection of digital products, interfaces, and systems shaped through design thinking and engineering."
          layout="split"
        />

        {/* Featured Projects Gallery */}
        <div className="space-y-12 md:space-y-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              layout="split"
            />
          ))}
        </div>

        {/* Link to Archive */}
        <div className="mt-16 md:mt-24 text-center">
          <Button href="/work" variant="secondary" size="lg" icon>
            View all projects & prototypes ({projects.length})
          </Button>
        </div>
      </Container>
    </section>
  );
}

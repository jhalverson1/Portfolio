import { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects: ProjectType[] = [
  {
    id: 1,
    title: "TrivAI",
    description: "An AI-powered trivia game platform that generates unique questions and provides interactive learning experiences.",
    technologies: ["React", "Node.js", "OpenAI", "TailwindCSS"],
    liveUrl: "https://trivai-production-1311.up.railway.app/",
    imageUrl: "/trivai-preview.jpg",
  },
  {
    id: 2,
    title: "CineFiles",
    description: "A movie database application that allows users to discover, search, and explore detailed information about films.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://frontend-production-a118.up.railway.app/",
    imageUrl: "/cinefiles-preview.jpg",
  },
];

const ProjectImage = ({ project }: { project: ProjectType }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div 
        className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4"
        aria-label={`${project.title} placeholder`}
      >
        <h3 className="text-xl font-semibold text-white text-center">
          {project.title}
        </h3>
      </div>
    );
  }

  return (
    <Image
      src={project.imageUrl}
      alt={project.title}
      fill
      className="object-cover"
      onError={() => setImageError(true)}
    />
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <ProjectImage project={project} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                      aria-label={`View ${project.title} source code`}
                    >
                      GitHub
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                      aria-label={`View ${project.title} live demo`}
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
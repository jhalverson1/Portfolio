import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "TrivAI",
    description: "An AI-powered trivia game that generates unique questions across various categories, providing an engaging and educational experience.",
    link: "https://trivai-production-1311.up.railway.app/",
    technologies: ["React", "Node.js", "OpenAI", "TailwindCSS"],
  },
  {
    title: "CineFiles",
    description: "A modern movie discovery platform that helps users explore, track, and get recommendations for films, with a sleek and intuitive interface.",
    link: "https://frontend-production-a118.up.railway.app/",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

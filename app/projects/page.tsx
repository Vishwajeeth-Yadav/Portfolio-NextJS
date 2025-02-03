import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Voix - Blogs ",
    description: "An Blog application ",
    image: "/BlogIMG.jpg",
    technologies: ["React", "Javascript", "Appwrite", "TailwindCSS"],
    github: "https://github.com/Vishwajeeth-Yadav/Voix-Blogs",
    live: "https://blogs-voix.vercel.app",
  },
  {
    title: "Neural Network Core (PLACEHOLDER)",
    description: "Self-learning AI system with advanced pattern recognition capabilities.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    technologies: ["TensorFlow", "PyTorch", "CUDA", "TPU"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Holographic Interface (PLACEHOLDER)",
    description: "3D holographic user interface with gesture recognition.",
    image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=800&q=80",
    technologies: ["WebGL", "Three.js", "React", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 grid-bg"></div>
      <div className="relative max-w-[90rem] mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-12 text-primary glow-text">Work / Projects</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden border border-primary/20 hover:glow transition-all">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary/50 text-primary px-2 py-1 rounded-md text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
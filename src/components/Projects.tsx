import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const projects = [
  {
    title: 'Nunnarivu AI Integration',
    description: 'Experimental AI-driven layer integrating LLM agents with system workflows, automation logic, and external services.',
    details: 'Backend components in Python with custom APIs, leveraging prompt engineering and agent behavior design to improve system responsiveness.',
    tags: ['Python', 'LLM', 'AI Integration', 'Automation', 'APIs'],
    featured: true,
  },
  {
    title: 'VoidVision Automated Video',
    description: 'End-to-end automated pipeline converting text prompts into YouTube-ready videos.',
    details: 'Includes LLM reasoning, script generation, text-to-speech, video rendering, containerized modules, and API-based publishing.',
    tags: ['LLM', 'TTS', 'Video Pipeline', 'Containers', 'Automation'],
    featured: true,
  },
  {
    title: 'DevOps and SecOps Project',
    description: 'Built and deployed a REST API as a Docker container with comprehensive CI/CD integration.',
    details: 'Integrated CI pipeline with pytest, code coverage, and security scanning via Snyk. Deployed to Google Cloud Run with OpenTelemetry tracing.',
    tags: ['DevOps', 'Docker', 'CI/CD', 'Cloud Run', 'Snyk', 'OpenTelemetry'],
    featured: false,
  },
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Designed scalable cloud infrastructure using Terraform (IaC) on Google Cloud Platform.',
    details: 'Orchestrated containerized services using Kubernetes (GKE), automated provisioning, and ensured high availability.',
    tags: ['GCP', 'Terraform', 'Kubernetes', 'IaC'],
    featured: false,
  },
  {
    title: '3D Traffic Simulation',
    description: '3D simulation modeling realistic traffic behavior at intersections using Unity.',
    details: 'Implemented traffic lights, pathfinding, and collision handling to simulate urban flow dynamics.',
    tags: ['Unity', 'Simulation', 'C#', 'Pathfinding'],
    featured: false,
  },
  {
    title: 'UI/UX Design Project',
    description: 'Redesigned a website in Figma focusing on usability and user engagement.',
    details: 'Applied UI/UX principles including typography, color theory, and user flows to create an intuitive experience.',
    tags: ['Figma', 'UI/UX', 'Wireframing'],
    featured: false,
  },
];

export const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 bg-secondary/20 relative" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Portfolio</span>
          <h2 className="section-title mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A selection of technical projects demonstrating my skills in DevOps, AI, and software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`card-glass card-hover p-6 h-full flex flex-col ${
                project.featured ? 'border-primary/30 relative' : ''
              }`}>
                {project.featured && (
                  <div className="absolute -top-3 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
                    <Sparkles size={12} />
                    Featured
                  </div>
                )}

                <h3 className="font-heading font-semibold text-lg mt-2">{project.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{project.description}</p>
                <p className="text-muted-foreground/70 mt-2 text-sm">{project.details}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto pt-6">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const projects = [
  {
    title: 'Nunnarivu AI Integration',
    description: 'Experimental AI-driven layer integrating LLM agents with system workflows and automation logic.',
    details: 'Backend components in Python with custom APIs, leveraging prompt engineering and agent behavior design.',
    tags: ['Python', 'LLM', 'AI', 'APIs'],
    featured: true,
    repo: 'https://github.com/dileepkumarthiruvenkadam-source/nunnarivu.git',
  },
  {
    title: 'YouTube Video Pipeline',
    description: 'End-to-end automated pipeline converting text prompts into YouTube-ready videos.',
    details: 'Includes LLM reasoning, script generation, TTS, video rendering, and containerized modules.',
    tags: ['LLM', 'TTS', 'Containers', 'Automation'],
    featured: true,
    repo: 'https://github.com/dileepkumarthiruvenkadam-source/ai_yotube_automation.git',
  },
  {
    title: 'DevOps & SecOps Project',
    description: 'REST API in Docker with CI/CD, security scanning via Snyk, deployed to Cloud Run.',
    details: 'Integrated pytest, code coverage, and OpenTelemetry tracing to Cloud Operations.',
    tags: ['DevOps', 'Docker', 'CI/CD', 'Cloud Run'],
    featured: false,
    repo: 'https://github.com/dileepkumarthiruvenkadam-source/devsecops-hhn-project.git',
  },
  {
    title: 'Cloud Infrastructure IaC',
    description: 'Scalable cloud infrastructure using Terraform on Google Cloud Platform.',
    details: 'Orchestrated containerized services using Kubernetes (GKE) with automated provisioning.',
    tags: ['GCP', 'Terraform', 'Kubernetes', 'IaC'],
    featured: false,
    repo: 'https://github.com/dileepkumarthiruvenkadam-source/cc-kubernetes-HHN.git',
    repo1: 'https://github.com/dileepkumarthiruvenkadam-source/cc-terraform-backup-HHN.git',
  },
  {
    title: '3D Traffic Simulation',
    description: '3D simulation modeling realistic traffic behavior at intersections using Unity.',
    details: 'Implemented traffic lights, pathfinding, and collision handling for urban flow.',
    tags: ['Unity', 'C#', 'Simulation'],
    featured: false,
    repo: 'https://github.com/dileepkumarthiruvenkadam-source/traffic-simulation.git',
  },
  {
    title: 'UI/UX Design Project',
    description: 'Website redesign in Figma focusing on usability and user engagement.',
    details: 'Applied UI/UX principles including typography, color theory, and user flows.',
    tags: ['Figma', 'UI/UX', 'Design'],
    featured: false,
  },
];

export const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="section-container relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <span className="text-primary text-sm font-bold uppercase tracking-widest">[ Portfolio ]</span>
          <h2 className="section-title mt-2">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ease-out ${
                isInView 
                  ? 'opacity-100 translate-y-0 blur-0' 
                  : 'opacity-0 translate-y-12 blur-sm'
              }`}
              style={{ transitionDelay: isInView ? `${200 + index * 100}ms` : '0ms' }}
            >
              <div className={`card-cyber p-6 h-full flex flex-col group transition-all duration-500 hover:translate-y-[-8px] ${
                project.featured ? 'border-primary/50 animate-cyber-pulse' : ''
              }`}
              style={{ 
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              >
                {project.featured && (
                  <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                    <Sparkles size={14} className="animate-pulse" />
                    Featured
                  </div>
                )}

                <h3 className="font-heading font-semibold text-lg uppercase group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">{project.description}</p>
                <p className="text-muted-foreground/70 mt-2 text-sm">{project.details}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tag} 
                      className={`skill-badge text-xs transition-all duration-300 ${
                        isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                      style={{ transitionDelay: isInView ? `${400 + index * 100 + tagIndex * 50}ms` : '0ms' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-auto pt-6">
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 uppercase tracking-wider"
                    >
                      <Github size={16} className="transition-transform duration-300" />
                      Code
                    </a>
                  ) : null}

                  {project.repo1 ? (
                    <a
                      href={project.repo1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 uppercase tracking-wider"
                    >
                      <Github size={16} className="transition-transform duration-300" />
                      Code (alt)
                    </a>
                  ) : null}

                  {/* Demo link intentionally disabled for now */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
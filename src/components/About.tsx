import { MapPin, Languages, Briefcase, GraduationCap } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const highlights = [
  { icon: Briefcase, label: 'DevOps & AI Engineer' },
  { icon: MapPin, label: 'Heilbronn, Germany' },
  { icon: GraduationCap, label: "Master's Student" },
  { icon: Languages, label: 'EN / Tamil / DE' },
];

export const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 hex-pattern opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual Element */}
          <div className={`relative transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Tech Stack Visual */}
              <div className="card-cyber p-8">
                <div className="grid grid-cols-2 gap-4">
                  {['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Python', 'CI/CD'].map((tech, index) => (
                    <div
                      key={tech}
                      className="p-4 bg-secondary/50 border border-primary/20 text-center transition-all duration-300 hover:border-primary hover:bg-primary/5 clip-corner-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="font-heading font-semibold text-foreground uppercase tracking-wide">{tech}</span>
                    </div>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-primary/20">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary text-glow font-heading">2+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary text-glow font-heading">6+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary text-glow font-heading">4</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Certs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">[ About Me ]</span>
            <h2 className="section-title mt-2">
              Building{' '}
              <span className="text-primary text-glow">robust systems</span>
            </h2>

            <div className="space-y-4 text-muted-foreground mt-6">
              <p>
                I'm a DevOps and AI Engineer experienced in designing and deploying scalable 
                applications on the cloud. My expertise spans CI/CD pipeline development, 
                infrastructure as code, container orchestration, and integrating AI/LLM 
                capabilities into software workflows.
              </p>
              <p>
                Currently pursuing a <strong className="text-foreground">Master of Science in Software Engineering 
                and Management</strong> at Hochschule Heilbronn, Germany. Passionate about 
                building robust systems, automation, and AI-driven developer workflows.
              </p>
            </div>

            {/* Highlight Badges */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 bg-secondary/50 border border-primary/20 clip-corner-sm"
                >
                  <div className="p-2 bg-primary/10 border border-primary/30 clip-corner-sm">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium uppercase tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

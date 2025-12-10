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
          <div 
            className={`relative transition-all duration-1000 ease-out ${
              isInView 
                ? 'opacity-100 translate-x-0 blur-0' 
                : 'opacity-0 -translate-x-16 blur-sm'
            }`}
          >
            <div className="relative">
              {/* Tech Stack Visual */}
              <div className="card-cyber p-8 hover-glow">
                <div className="grid grid-cols-2 gap-4">
                  {['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Python', 'CI/CD'].map((tech, index) => (
                    <div
                      key={tech}
                      className={`p-4 bg-secondary/50 border border-primary/20 text-center transition-all duration-500 hover:border-primary hover:bg-primary/10 clip-corner-sm cursor-default ${
                        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ 
                        transitionDelay: isInView ? `${300 + index * 100}ms` : '0ms'
                      }}
                    >
                      <span className="font-heading font-semibold text-foreground uppercase tracking-wide">{tech}</span>
                    </div>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-primary/20">
                  {[
                    { value: '2+', label: 'Years' },
                    { value: '6+', label: 'Projects' },
                    { value: '4', label: 'Certs' },
                  ].map((stat, index) => (
                    <div 
                      key={stat.label}
                      className={`text-center transition-all duration-700 ${
                        isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                      style={{ transitionDelay: isInView ? `${800 + index * 150}ms` : '0ms' }}
                    >
                      <p className="text-3xl font-bold text-primary text-glow font-heading">{stat.value}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isInView 
                ? 'opacity-100 translate-x-0 blur-0' 
                : 'opacity-0 translate-x-16 blur-sm'
            }`}
            style={{ transitionDelay: isInView ? '200ms' : '0ms' }}
          >
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
              {highlights.map(({ icon: Icon, label }, index) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 p-3 bg-secondary/50 border border-primary/20 clip-corner-sm transition-all duration-500 hover:border-primary hover:bg-primary/5 group ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: isInView ? `${600 + index * 100}ms` : '0ms' }}
                >
                  <div className="p-2 bg-primary/10 border border-primary/30 clip-corner-sm transition-all duration-300 group-hover:bg-primary/20">
                    <Icon size={18} className="text-primary transition-transform duration-300 group-hover:scale-110" />
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
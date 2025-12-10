import { ArrowDown, Download, FolderOpen } from 'lucide-react';

export const Hero = () => {
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines scanline-overlay"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 hex-pattern" />
      <div className="gradient-orb gradient-orb-primary w-[600px] h-[600px] -top-64 -right-64 animate-pulse-glow" />
      <div className="gradient-orb gradient-orb-secondary w-[500px] h-[500px] -bottom-48 -left-48 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="opacity-0 animate-blur-in">
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/50 text-primary text-sm font-bold uppercase tracking-widest mb-6 clip-corner-sm animate-cyber-pulse">
                DevOps & AI Engineer
              </span>
            </div>

            <h1 className="opacity-0 animate-fade-up animation-delay-150 text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 uppercase">
              <span className="inline-block overflow-hidden">
                <span className="inline-block">Building</span>
              </span>{' '}
              <span className="text-primary text-glow animate-text-flicker inline-block">scalable, automated</span>{' '}
              <span className="inline-block overflow-hidden">
                <span className="inline-block">cloud solutions</span>
              </span>
            </h1>

            <p className="opacity-0 animate-fade-up animation-delay-300 text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              I design and deploy cloud infrastructure, CI/CD pipelines, and AI-enhanced 
              automation using AWS, Kubernetes, Docker, Terraform, and Python. 
              2+ years of experience driving operational efficiency.
            </p>

            <div className="opacity-0 animate-fade-up animation-delay-500 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleScrollToProjects} 
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                <FolderOpen size={18} className="transition-transform group-hover:rotate-12" />
                View Projects
              </button>
              <a 
                href="#" 
                className="btn-secondary flex items-center justify-center gap-2 group"
              >
                <Download size={18} className="transition-transform group-hover:translate-y-1" />
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-scale-in animation-delay-200">
            <div className="relative">
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse-glow" 
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} 
              />
              
              {/* Hexagon Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
                <div 
                  className="absolute inset-0 bg-card border-2 border-primary/50 flex items-center justify-center animated-border transition-all duration-500 hover:border-primary"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="text-center">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold text-primary text-glow flicker">
                      DK
                    </span>
                    <p className="text-muted-foreground text-sm mt-2 uppercase tracking-widest">Dileep Kumar</p>
                  </div>
                </div>

                {/* Decorative corners with animation */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary opacity-0 animate-fade-up animation-delay-400" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-primary opacity-0 animate-fade-up animation-delay-500" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-primary opacity-0 animate-fade-up animation-delay-600" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary opacity-0 animate-fade-up animation-delay-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-700">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} className="animate-bounce group-hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};
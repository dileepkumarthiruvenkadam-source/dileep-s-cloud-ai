import { ArrowDown, Download, FolderOpen } from 'lucide-react';

export const Hero = () => {
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="gradient-orb gradient-orb-primary w-96 h-96 -top-48 -right-48 animate-pulse-glow" />
      <div className="gradient-orb gradient-orb-secondary w-72 h-72 -bottom-36 -left-36 animate-pulse-glow animation-delay-500" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                DevOps & AI Engineer
              </span>
            </div>

            <h1 className="animate-fade-up animation-delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Building{' '}
              <span className="text-gradient">scalable, automated</span>{' '}
              cloud solutions
            </h1>

            <p className="animate-fade-up animation-delay-200 text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              I design and deploy cloud infrastructure, CI/CD pipelines, and AI-enhanced 
              automation using AWS, Kubernetes, Docker, Terraform, and Python. 
              2+ years of experience driving operational efficiency and innovation.
            </p>

            <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={handleScrollToProjects} className="btn-primary flex items-center justify-center gap-2">
                <FolderOpen size={18} />
                View My Projects
              </button>
              <a href="#" className="btn-secondary flex items-center justify-center gap-2">
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/30 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold text-gradient">
                      DK
                    </span>
                    <p className="text-muted-foreground text-sm mt-2">Dileep Kumar</p>
                  </div>
                </div>
              </div>

              {/* Decorative Ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin-slow" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up animation-delay-500">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

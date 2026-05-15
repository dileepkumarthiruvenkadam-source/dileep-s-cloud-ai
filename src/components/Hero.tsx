import { ArrowDown, Download, FolderOpen } from 'lucide-react';

export const Hero = () => {
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Toggle to show/hide the resume download button. Set to false to hide temporarily.
  const showResume = true;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-black" />
      <div className="absolute inset-0 stars-bg opacity-60" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="gradient-orb gradient-orb-primary w-[400px] h-[400px] -top-32 -right-32 animate-pulse-glow" />
      <div className="gradient-orb gradient-orb-secondary w-[300px] h-[300px] -bottom-24 -left-24 animate-pulse-glow" style={{ animationDelay: '2s' }} />

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
              {showResume && (
                <a
                  href="/DILEEP_KUMAR_THIRUVENKADAMV3.pdf"
                  download="DILEEP_KUMAR_THIRUVENKADAM_CV.pdf"
                  className="btn-secondary flex items-center justify-center gap-2 group"
                >
                  <Download size={18} className="transition-transform group-hover:translate-y-1" />
                  Download CV
                </a>
              )}
            </div>
          </div>

          {/* Profile HUD */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-scale-in animation-delay-200">
            <div className="relative w-72 sm:w-80 lg:w-[400px]">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/10 blur-[60px] animate-pulse-glow" />
              
              {/* Main HUD Container */}
              <div className="relative animate-float">
                <div className="relative border border-primary/30 bg-card/40 backdrop-blur-md rounded-lg overflow-hidden">
                  <img 
                    src="/Dileep.jpg" 
                    alt="Dileep Kumar" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-700">
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
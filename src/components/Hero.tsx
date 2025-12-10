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
              <a 
                href="#" 
                className="btn-secondary flex items-center justify-center gap-2 group"
              >
                <Download size={18} className="transition-transform group-hover:translate-y-1" />
                Download CV
              </a>
            </div>
          </div>

          {/* Profile HUD */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-scale-in animation-delay-200">
            <div className="relative w-72 sm:w-80 lg:w-[400px]">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/15 blur-[80px] animate-pulse-glow" />
              
              {/* Main HUD Container */}
              <div className="relative animate-float">
                {/* Top status bar */}
                <div className="flex justify-between items-start mb-2 text-[10px] uppercase tracking-wider">
                  <div className="text-primary font-mono">
                    <span className="opacity-60">SYS:</span> ONLINE
                  </div>
                  <div className="flex gap-1">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className={`w-1 h-3 ${i < 6 ? 'bg-primary' : 'bg-primary/30'}`} />
                    ))}
                  </div>
                  <div className="text-muted-foreground font-mono">
                    <span className="opacity-60">ID:</span> DK-001
                  </div>
                </div>

                {/* HUD Frame */}
                <div className="relative border border-primary/30 bg-card/40 backdrop-blur-md p-8">
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary" />
                  
                  {/* Tracking label */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3 py-0.5 border border-primary/50">
                    <span className="text-[10px] text-primary font-mono uppercase tracking-widest">OBJ. 001 • TRACKING</span>
                  </div>

                  {/* Center content */}
                  <div className="flex flex-col items-center py-6">
                    {/* Crosshair */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 pointer-events-none opacity-30">
                      <div className="absolute top-0 left-1/2 w-px h-4 bg-primary -translate-x-1/2" />
                      <div className="absolute bottom-0 left-1/2 w-px h-4 bg-primary -translate-x-1/2" />
                      <div className="absolute left-0 top-1/2 w-4 h-px bg-primary -translate-y-1/2" />
                      <div className="absolute right-0 top-1/2 w-4 h-px bg-primary -translate-y-1/2" />
                    </div>

                    <span className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold text-primary text-glow relative z-10">
                      DK
                    </span>
                    
                    {/* Name with decorative lines */}
                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
                      <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] font-mono">Dileep Kumar</p>
                      <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
                    </div>
                  </div>

                  {/* Bottom status */}
                  <div className="absolute -bottom-3 right-4 bg-background px-2 py-0.5">
                    <span className="text-[10px] text-primary/70 font-mono">LOCKED</span>
                  </div>
                </div>

                {/* Bottom info bar */}
                <div className="flex justify-between items-center mt-2 text-[10px] font-mono uppercase tracking-wider">
                  <div className="text-muted-foreground">
                    <span className="text-primary">◉</span> SIGNAL: NORMAL
                  </div>
                  <div className="text-muted-foreground">
                    ACCESS: <span className="text-primary">GRANTED</span>
                  </div>
                </div>
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
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/dileep-kumar-thiruvenkadam-81253a1b7', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:dileepkumarthiruvenkadam@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-primary/20 relative">
      <div className="absolute inset-0 hex-pattern opacity-30" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="font-heading font-bold text-xl inline-block">
              <span className="text-primary text-glow-active">Dileep Kumar Thiruvenkadam</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 bg-secondary border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary transition-all clip-corner-sm"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1 uppercase tracking-wider">
            Made with <Heart size={14} className="text-primary" /> in Germany
          </p>
        </div>
      </div>
    </footer>
  );
};

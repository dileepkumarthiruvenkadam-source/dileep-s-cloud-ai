import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:dileepkumarthiruvenkadam@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-heading font-bold text-xl inline-block">
              DK<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              © {currentYear} Dileep Kumar Thiruvenkadam. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-primary" /> in Germany
          </p>
        </div>
      </div>
    </footer>
  );
};

import { useEffect } from 'react';
import { Linkedin, Mail, Heart } from 'lucide-react';
import { getVisitorLocation } from '@/lib/getVisitorLocation';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/dileep-kumar-thiruvenkadam-81253a1b7', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:dileepkumarthiruvenkadam@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  // Client-side toggle (default: disabled). Set VITE_COLLECT_LOCATION_ENABLED=true to re-enable.
  const COLLECT_ENABLED = (import.meta as any).env?.VITE_COLLECT_LOCATION_ENABLED === 'true';

  useEffect(() => {
    if (!COLLECT_ENABLED) return; // collection disabled by default
    let mounted = true;

    const sendAndPost = async () => {
      try {
        const loc = await getVisitorLocation();
        if (!mounted) return;
        console.debug('Visitor location (approx):', loc);
        try {
          await fetch('/.netlify/functions/collect-location', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ location: loc, page: window.location.pathname, ua: navigator.userAgent }),
          });
        } catch (e) {
          console.debug('collect-location post error', e);
        }
      } catch (e) {
        // ignore lookup errors
      }
    };

    // send on initial mount
    sendAndPost();

    // Listen for SPA navigation changes (pushState/replaceState/popstate)
    const onLocationChange = () => {
      sendAndPost();
    };

    // Monkey-patch history methods to emit a custom event
    const _wr = (type) => {
      const orig = history[type];
      return function () {
        const res = orig.apply(this, arguments);
        const ev = new Event('locationchange');
        window.dispatchEvent(ev);
        return res;
      };
    };
    history.pushState = _wr('pushState');
    history.replaceState = _wr('replaceState');

    window.addEventListener('popstate', onLocationChange);
    window.addEventListener('locationchange', onLocationChange);

    return () => {
      mounted = false;
      window.removeEventListener('popstate', onLocationChange);
      window.removeEventListener('locationchange', onLocationChange);
    };
  }, []);

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
          <div className="flex items-center justify-center gap-4">
            <p className="text-muted-foreground text-sm">
              <small>
                Made with <Heart size={14} className="text-primary" /> in Germany
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

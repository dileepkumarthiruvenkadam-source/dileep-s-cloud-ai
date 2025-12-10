import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { getVisitorLocation, VisitorLocation } from '@/lib/getVisitorLocation';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/dileep-kumar-thiruvenkadam-81253a1b7', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:dileepkumarthiruvenkadam@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [collectLocation, setCollectLocation] = useState<boolean>(() => {
    try {
      const v = localStorage.getItem('collect_location');
      return v === null ? false : v === 'true';
    } catch {
      return false;
    }
  });
  const [lastLocation, setLastLocation] = useState<VisitorLocation | null>(null);

  useEffect(() => {
    if (!collectLocation) return;
    let mounted = true;
    (async () => {
      const loc = await getVisitorLocation();
      if (mounted) {
        setLastLocation(loc);
        // For now, log locally
        console.log('Visitor location (approx):', loc);

        // Send to Netlify Function to persist (best-effort)
        try {
          fetch('/.netlify/functions/collect-location', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ location: loc, page: window.location.pathname, ua: navigator.userAgent }),
          }).catch((e) => console.debug('collect-location request failed', e));
        } catch (e) {
          console.debug('collect-location post error', e);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [collectLocation]);

  const toggleCollect = (v?: boolean) => {
    const next = typeof v === 'boolean' ? v : !collectLocation;
    setCollectLocation(next);
    try {
      localStorage.setItem('collect_location', next ? 'true' : 'false');
    } catch {}
  };

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
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              <span className="text-xs uppercase">Location</span>
              <button
                onClick={() => toggleCollect()}
                className={`ml-2 inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-all ${collectLocation ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}
                aria-pressed={collectLocation}
              >
                {collectLocation ? 'Enabled' : 'Disabled'}
              </button>
            </p>

            <p className="text-muted-foreground text-sm">
              <small>
                We may collect anonymized approximate location (city/country) for analytics. <button onClick={() => toggleCollect(false)} className="underline">Disable</button>
              </small>
            </p>
          </div>

          <p className="text-muted-foreground text-sm mt-4">
            Made with <Heart size={14} className="text-primary" /> in Germany
          </p>

          {lastLocation && (
            <p className="text-muted-foreground text-xs mt-2">
              Last lookup: {lastLocation.city ?? '—'}, {lastLocation.region ?? ''} {lastLocation.country ?? ''}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

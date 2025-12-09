import { Award } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const certifications = [
  { title: 'AWS Academy Cloud Developing', issuer: 'Amazon Web Services', icon: '☁️' },
  { title: 'Cloud Computing & Distributed Systems', issuer: 'NPTEL', icon: '🌐' },
  { title: 'DSA Using Python', issuer: 'NPTEL', icon: '🐍' },
  { title: 'Problem Solving in Python', issuer: 'NPTEL', icon: '💻' },
];

export const Certifications = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">[ Credentials ]</span>
          <h2 className="section-title mt-2">
            <span className="text-primary text-glow">Certifications</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card-cyber card-hover p-6 h-full text-center">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <div className="p-2 bg-primary/10 border border-primary/30 w-fit mx-auto mb-4 clip-corner-sm">
                  <Award size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-sm leading-tight uppercase">{cert.title}</h3>
                <p className="text-muted-foreground text-xs mt-2">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

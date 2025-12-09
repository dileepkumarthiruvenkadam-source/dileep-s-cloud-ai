import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const education = [
  {
    degree: 'Master of Science',
    field: 'Software Engineering & Management',
    institution: 'Hochschule Heilbronn',
    location: 'Heilbronn, Germany',
    period: 'Sep 2024 – Present',
    description: 'Focus on software engineering practices, management, and modern software systems.',
    current: true,
  },
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    period: 'Jun 2018 – May 2022',
    description: 'Strong foundation in CS fundamentals, programming, and software development.',
    gpa: '1.9 (German Scale)',
    current: false,
  },
];

export const Education = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 hex-pattern opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">[ Academic ]</span>
          <h2 className="section-title mt-2">
            <span className="text-primary text-glow">Education</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.degree + edu.institution}
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`card-cyber card-hover p-8 h-full relative ${edu.current ? 'border-primary/50' : ''}`}>
                {edu.current && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider clip-corner-sm">
                    Current
                  </span>
                )}

                <div className="p-3 bg-primary/10 border border-primary/30 w-fit mb-6 clip-corner-sm">
                  <GraduationCap size={24} className="text-primary" />
                </div>

                <h3 className="font-heading font-bold text-xl uppercase">{edu.degree}</h3>
                <p className="text-primary font-bold mt-1">{edu.field}</p>
                <p className="text-foreground font-medium mt-3">{edu.institution}</p>

                <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" />
                    {edu.period}
                  </div>
                </div>

                <p className="text-muted-foreground mt-4 text-sm">{edu.description}</p>

                {edu.gpa && (
                  <div className="mt-4 pt-4 border-t border-primary/20">
                    <span className="text-sm text-muted-foreground">GPA: </span>
                    <span className="text-sm font-bold text-primary">{edu.gpa}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const education = [
  {
    degree: 'Master of Science',
    field: 'Software Engineering and Management',
    institution: 'Hochschule Heilbronn',
    location: 'Heilbronn, Germany',
    period: 'September 2024 – Present',
    description: 'Focus on software engineering practices, management, and modern software systems.',
    current: true,
  },
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    institution: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    period: 'June 2018 – May 2022',
    description: 'Strong foundation in computer science fundamentals, programming, and software development.',
    gpa: '1.9 (German Scale)',
    current: false,
  },
];

export const Education = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Academic Background</span>
          <h2 className="section-title mt-2">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Building a strong foundation in software engineering and computer science
          </p>
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
              <div className={`card-glass card-hover p-8 h-full relative ${edu.current ? 'border-primary/30' : ''}`}>
                {edu.current && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    Current
                  </span>
                )}

                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-6">
                  <GraduationCap size={24} className="text-primary" />
                </div>

                <h3 className="font-heading font-bold text-xl">{edu.degree}</h3>
                <p className="text-primary font-medium mt-1">{edu.field}</p>
                <p className="text-foreground font-medium mt-3">{edu.institution}</p>

                <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                </div>

                <p className="text-muted-foreground mt-4 text-sm">{edu.description}</p>

                {edu.gpa && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">GPA: </span>
                    <span className="text-sm font-medium text-foreground">{edu.gpa}</span>
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

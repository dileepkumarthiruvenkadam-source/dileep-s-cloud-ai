import { Briefcase, Calendar } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const experiences = [
  {
    title: 'Associate Software Developer',
    company: 'Quaking Aspen Private Limited',
    period: 'Jan 2022 – Jan 2024',
    description: 'Started as an intern and transitioned to full-time, taking ownership of complete product modules.',
    points: [
      'Took ownership of a complete product module from development to production deployment',
      'Developed and maintained automation scripts to optimize workflows and enhance operational efficiency',
      'Worked with AWS cloud services for deployment and monitoring of applications',
      'Collaborated with cross-functional teams on bug fixes, code reviews, and feature enhancements',
      'Demonstrated resilience during company restructuring while meeting project deadlines',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'Zoho Corporation',
    period: 'Jan 2021',
    description: 'Developed responsive web pages and contributed to UI improvements for internal tools.',
    points: [
      'Developed responsive web pages using HTML, CSS, JavaScript, and ReactJS',
      'Contributed to UI improvements for internal tools and a live product',
      'Gained experience with Git and Agile development practices',
    ],
  },
  {
    title: 'Machine Learning Intern',
    company: 'Freshworks',
    period: 'Jan 2020',
    description: 'Learned ML fundamentals and applied techniques using Scikit-learn and TensorFlow.',
    points: [
      'Learned fundamentals of machine learning, AI, and deep learning',
      'Applied supervised and unsupervised learning techniques',
      'Worked on real-time prediction and classification use cases',
    ],
  },
  {
    title: 'Data Science Workshop',
    company: 'Guvi Geek Networks',
    period: 'Jan 2020',
    description: 'Training on Python for Data Science, data collection, preprocessing, and analysis.',
    points: [
      'Trained in Python for Data Science applications',
      'Practiced data collection, preprocessing, and visualization techniques',
    ],
  },
];

export const Experience = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-24 bg-secondary/20 relative" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Career Path</span>
          <h2 className="section-title mt-2">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            From internships to full-time roles, building expertise in development and DevOps
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`relative transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background" />

                  {/* Card */}
                  <div className="ml-8 md:ml-0 card-glass card-hover p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                        <Briefcase size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-lg">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <p className="text-muted-foreground mt-3 text-sm">{exp.description}</p>
                        <ul className="mt-4 space-y-2">
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

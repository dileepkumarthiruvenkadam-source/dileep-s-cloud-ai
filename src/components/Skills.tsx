import { useInView } from '@/hooks/useInView';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'C', 'SQL', 'JavaScript', 'Bash'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'CI/CD', 'OpenTelemetry'],
  },
  {
    title: 'Web & Frontend',
    skills: ['HTML', 'CSS', 'Angular', 'ReactJS', 'UI/UX', 'Wireframing'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'RESTful APIs', 'Postman', 'Python APIs'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'JIRA', 'Agile/Scrum', 'MIRO', 'Data Visualization', 'BPMN'],
  },
  {
    title: 'Soft Skills',
    skills: ['Leadership', 'Communication', 'Team Collaboration', 'Analytical Thinking', 'Problem Solving'],
  },
];

export const Skills = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Expertise</span>
          <h2 className="section-title mt-2">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card-glass card-hover p-6 h-full">
                <h3 className="font-heading font-semibold text-lg mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

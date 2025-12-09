import { useInView } from '@/hooks/useInView';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'C', 'SQL', 'JavaScript', 'Bash'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'CI/CD'],
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'Angular', 'ReactJS', 'UI/UX'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'REST APIs', 'Postman', 'Python APIs'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'JIRA', 'Agile', 'MIRO', 'BPMN'],
  },
];

export const Skills = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 hex-pattern opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">[ Expertise ]</span>
          <h2 className="section-title mt-2">
            Tech <span className="text-primary text-glow">Stack</span>
          </h2>
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
              <div className="card-cyber card-hover p-6 h-full">
                <h3 className="font-heading font-semibold text-lg mb-4 uppercase text-primary">
                  {category.title}
                </h3>
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

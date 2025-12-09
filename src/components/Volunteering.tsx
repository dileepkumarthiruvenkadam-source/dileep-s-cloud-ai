import { Heart, Users, Leaf, BookOpen } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const activities = [
  {
    icon: Heart,
    title: 'Food Distribution',
    description: 'Distributing food to the homeless and underprivileged communities',
  },
  {
    icon: Users,
    title: 'Blood Donation Camps',
    description: 'Coordinating and participating in blood donation drives',
  },
  {
    icon: Leaf,
    title: 'Environmental Drives',
    description: 'Organizing cleanliness and environmental awareness campaigns',
  },
  {
    icon: BookOpen,
    title: 'Education Support',
    description: 'Supporting educational programs for underprivileged children',
  },
];

export const Volunteering = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Softer Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Community</span>
          <h2 className="section-title mt-2">
            <span className="text-gradient">Volunteering</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Dedicated to community welfare and collaborative impact through NGO-led initiatives across India
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.title}
                className={`transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="card-glass card-hover p-6 h-full text-center">
                  <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold">{activity.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{activity.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

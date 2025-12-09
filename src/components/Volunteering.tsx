import { Heart, Users, Leaf, BookOpen } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const activities = [
  { icon: Heart, title: 'Food Distribution', description: 'Distributing food to homeless communities' },
  { icon: Users, title: 'Blood Donation', description: 'Coordinating blood donation drives' },
  { icon: Leaf, title: 'Environment', description: 'Cleanliness and awareness campaigns' },
  { icon: BookOpen, title: 'Education', description: 'Supporting underprivileged children' },
];

export const Volunteering = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 hex-pattern opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">[ Community ]</span>
          <h2 className="section-title mt-2">
            <span className="text-primary text-glow">Volunteering</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Dedicated to community welfare through NGO-led initiatives across India
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
                <div className="card-cyber card-hover p-6 h-full text-center">
                  <div className="p-3 bg-primary/10 border border-primary/30 w-fit mx-auto mb-4 clip-corner-sm">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold uppercase">{activity.title}</h3>
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

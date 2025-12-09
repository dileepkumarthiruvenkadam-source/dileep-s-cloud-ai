import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { toast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'dileepkumarthiruvenkadam@gmail.com', href: 'mailto:dileepkumarthiruvenkadam@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+49 15560729644', href: 'tel:+4915560729644' },
  { icon: MapPin, label: 'Location', value: 'Heilbronn, Germany', href: null },
];

export const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Message sent!', description: "Thank you for reaching out. I'll get back to you soon." });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">[ Get In Touch ]</span>
          <h2 className="section-title mt-2">
            Let's <span className="text-primary text-glow">Connect</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 border border-primary/30 shrink-0 clip-corner-sm">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="font-medium hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 mt-6">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="card-cyber p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold mb-2 uppercase tracking-wider text-primary">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-primary/30 focus:border-primary outline-none transition-all clip-corner-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold mb-2 uppercase tracking-wider text-primary">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-primary/30 focus:border-primary outline-none transition-all clip-corner-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold mb-2 uppercase tracking-wider text-primary">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-primary/30 focus:border-primary outline-none transition-all resize-none clip-corner-sm"
                    placeholder="Your message..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

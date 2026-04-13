import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'CEO',
      company: 'TechFlow Solutions',
      content: "Elev8 Consulting's strategic approach was refreshing. They didn't just give us a report; they stayed until the results were visible in our bottom line.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Mark Thompson',
      role: 'Head of Operations',
      company: 'Logistics Pro',
      content: "Working with Elev8 was a turning point for our logistics department. The 30% reduction in lead time was something we couldn't achieve alone for years.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'James Wu',
      role: 'Founder',
      company: 'HealthSphere',
      content: "Their expertise in digital transformation is unparalleled. They helped us navigate a complex cloud migration without any downtime or data loss.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Managing Director',
      company: 'EcoVibe Australia',
      content: "The market entry strategy Elev8 developed for us was flawless. We were profitable in the new territory six months ahead of schedule.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Robert Carter',
      role: 'Director of Finance',
      company: 'Summit Capital',
      content: "Data-driven insights from Elev8 allowed us to identify risks that were previously invisible. Their analysis is both deep and actionable.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Michelle Lee',
      role: 'Human Resources Lead',
      company: 'Innovate Corp',
      content: "The organizational redesign managed by Elev8 improved employee morale and productivity significantly. Highly recommended.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-slate-50 rounded-bl-[10rem] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            subtitle="Client Trust"
            title="Voices of Success"
            description="We are proud to have partnered with world-class organizations. Here's what they have to say about our collaborative journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 relative group"
              >
                <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote size={80} className="text-primary-900" />
                </div>
                
                <div className="flex space-x-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
                
                <p className="text-slate-600 text-lg italic leading-relaxed mb-8 relative z-10">
                  "{item.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-2xl object-cover ring-2 ring-slate-50"
                  />
                  <div>
                    <h5 className="font-bold text-primary-900">{item.name}</h5>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.role}, {item.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.4em] mb-12">Trusted by Businesses Worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Mock SVGs for logos */}
             {['GLOBAL', 'STRATEGY', 'VENTURE', 'HORIZON', 'SUMMIT'].map((logo) => (
               <div key={logo} className="text-2xl font-black text-slate-900 tracking-tighter">
                 {logo}<span className="text-accent-gold">.</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-950 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/5 blur-[100px] rounded-full translate-y-1/2 translate-x-1/2" />
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Commitment to Your Evolution.</h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-10">
                    We don't settle for "good enough." Our partnership continues until we've achieved the measurable targets defined at the start of our engagement.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      'Measurable Results',
                      'Executive Support',
                      'Cultural Alignment',
                      'Sustainable Scaling'
                    ].map((item) => (
                      <div key={item} className="flex items-center space-x-3">
                        <CheckCircle2 className="text-accent-gold w-6 h-6" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center text-center p-12">
                    <div>
                      <div className="text-7xl font-bold text-accent-gold mb-4">98%</div>
                      <div className="text-xl font-bold uppercase tracking-widest text-slate-400">Client Retention</div>
                      <p className="mt-6 text-sm text-slate-500 max-w-xs mx-auto">Our clients return to us for their second, third, and fourth phases of growth.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, Building2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'GM Assurance',
      role: 'Process Transformation',
      company: 'Telecom',
      content: "We engaged Elev8 to support process transformation across Assurance, and the impact was immediate. They brought structure, aligned stakeholders, and helped land clear end-to-end processes without overcomplicating things.",
      rating: 5
    },
    {
      name: 'Director',
      role: 'PMO & Asset Management',
      company: 'Renewable Energy',
      content: "At a key growth stage, we needed to set up our PMO and asset management properly. The team worked closely with us to put practical processes and governance in place, giving us a strong foundation to scale.",
      rating: 5
    },
    {
      name: 'Director Strategy',
      role: 'Observability & Process',
      company: 'AEMO',
      content: "In a complex environment, having clarity is critical. The team helped align processes and bring everyone onto the same page, particularly around the operating model and telemetry approach.",
      rating: 5
    },
    {
      name: 'Head of Capability',
      role: 'Lean Six Sigma Training',
      company: 'Safe Work Australia',
      content: "The training was engaging and easy to apply. Real-world examples made it relevant, and we’ve seen teams start using the tools almost immediately.",
      rating: 5
    },
    {
      name: 'Director, Data & Intelligence',
      role: 'Process Maturity',
      company: 'DOE (NSW Gov)',
      content: "We were looking to bring more consistency to how we manage processes. A clear and practical framework was introduced, improving both visibility and alignment across teams.",
      rating: 5
    },
    {
      name: 'Director, Performance',
      role: 'Business Process Transformation',
      company: 'DPIE (NSW Gov)',
      content: "There was a strong focus on getting the fundamentals right—clear processes, aligned reporting, and governance that works. It’s helped drive meaningful improvements across the business.",
      rating: 5
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
            description="We are proud to have partnered with forward-thinking organizations. Here's what they have to say about our collaborative journey."
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
                className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 relative group flex flex-col h-full"
              >
                <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote size={80} className="text-primary-900" />
                </div>
                
                <div className="flex space-x-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
                
                <p className="text-slate-600 text-lg italic leading-relaxed mb-8 relative z-10 flex-grow">
                  "{item.content}"
                </p>
                
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl border-2 border-slate-50 flex-shrink-0">
                      <Building2 size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary-900 leading-snug">{item.name}</h5>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.company}</p>
                    <p className="text-xs text-slate-500 mt-1">{item.role}</p>
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
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.4em] mb-12">Trusted By Businesses Across Australia</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             {['NSW Government', 'SafeWork Australia', 'AEMO', 'Apple Pay', 'Telstra', 'NBN Australia'].map((logo) => (
               <div key={logo} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">
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
                       <div className="inline-flex w-24 h-24 bg-white/10 rounded-full items-center justify-center mb-6">
                         <Star className="w-12 h-12 fill-accent-gold text-accent-gold" />
                       </div>
                       <div className="text-2xl font-bold uppercase tracking-widest text-slate-300">Trusted Partners</div>
                       <p className="mt-4 text-sm text-slate-400 max-w-xs mx-auto">
                         Delivering impact, clarity, and sustainable methodology across public and private sectors.
                       </p>
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

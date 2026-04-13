import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Users, Globe, Lightbulb } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We adhere to the highest ethical standards, ensuring transparency and trust in every partnership.',
      icon: ShieldCheck,
    },
    {
      title: 'Innovation',
      description: 'We constantly challenge the status quo, bringing fresh perspectives and creative solutions to the table.',
      icon: Lightbulb,
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of partnership, working closely with your team to achieve shared goals.',
      icon: Users,
    },
    {
      title: 'Global Impact',
      description: 'Our strategies are designed to resonate on a global scale while remaining locally relevant.',
      icon: Globe,
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-24 premium-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-accent-gold rounded-full blur-[150px]" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-blue rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent-gold font-bold uppercase tracking-[0.4em] text-xs mb-6">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Empowering Growth <br />Since 2010</h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed">
              Elev8 Consulting Group was founded with a single mission: to provide organizations with the strategic clarity needed to thrive in a complex world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History/Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary-900 mb-8 leading-tight">Driven by Excellence, Rooted in Partnership.</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Over the past 15 years, we have grown from a boutique firm in Sydney to a globally recognized consulting powerhouse. Our journey has been defined by the success of our clients.
                </p>
                <p>
                  We don't just provide advice; we integrate with your team, understand your unique culture, and co-create solutions that are both practical and transformative.
                </p>
              </div>
              
              <div className="mt-12 p-8 bg-slate-50 rounded-2xl border-l-4 border-accent-gold italic text-xl text-primary-800 font-medium">
                "Our approach is simple: we listen, we analyze, and we elevate. Every business has a story, and we're here to help you write the most successful chapter yet."
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Leadership" 
                className="rounded-[2.5rem] shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-slate-100 rounded-[2.5rem] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-50 flex items-center justify-center rounded-2xl mb-8">
                <Target className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary-900 mb-6 font-display">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To transform organizations by providing world-class strategic consulting that bridges the gap between current reality and future potential. We aim to be the catalyst for sustainable, long-term growth for every partner we serve.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-primary-900 p-12 rounded-[3rem] shadow-xl text-white"
            >
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-2xl mb-8 text-accent-gold">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-6 font-display">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To become the most trusted global partner for organizational excellence, known for our integrity, innovation, and ability to unlock infinite possibilities for businesses of all scales and industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            subtitle="Philosophy"
            title="The Values That Guide Us"
            description="Our culture is built on a foundation of principles that ensure we deliver exceptional value to our clients every day."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 text-primary-900 rounded-full mb-8">
                  <value.icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-primary-900">{value.title}</h4>
                <p className="text-slate-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

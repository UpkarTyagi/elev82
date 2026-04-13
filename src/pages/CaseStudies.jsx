import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const CaseStudies = () => {
  const cases = [
    {
      company: 'Omni Retail Group',
      industry: 'Retail & E-commerce',
      title: 'Digital Supply Chain Transformation',
      challenge: 'Fragmented supply chain across 12 countries leading to 15% inventory waste.',
      solution: 'Implemented AI-driven demand forecasting and centralized inventory management system.',
      result: '22% reduction in operational costs and 100% inventory visibility.',
      metrics: [
        { label: 'Cost Savings', value: '$4.2M', icon: DollarSign },
        { label: 'Efficiency', value: '+35%', icon: TrendingUp },
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
    },
    {
      company: 'Horizon Health',
      industry: 'Healthcare Technology',
      title: 'Customer Experience Re-imagined',
      challenge: 'Low patient engagement and high turnover in digital platform users.',
      solution: 'Redesigned patient journey using behavioral science and personalized AI touchpoints.',
      result: 'NPS grew from +24 to +68 in 14 months. Retention increased by 45%.',
      metrics: [
        { label: 'NPS Growth', value: '+44pts', icon: Users },
        { label: 'Retention', value: '45%', icon: Clock },
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800'
    },
    {
      company: 'EcoPower Solutions',
      industry: 'Energy & Utilities',
      title: 'Strategic Market Entry - APAC',
      challenge: 'Difficulty penetrating the APAC market due to regulatory hurdles and local competition.',
      solution: 'Comprehensive market entry strategy focused on strategic localization and government relations.',
      result: 'Successful launch in 4 territories within 18 months, exceeding revenue targets by 30%.',
      metrics: [
        { label: 'Revenue ROI', value: '3.5x', icon: DollarSign },
        { label: 'Market Share', value: '12%', icon: TrendingUp },
      ],
      image: 'https://images.unsplash.com/photo-1473341304170-96f2a28b9912?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            subtitle="Our Impact"
            title="Success Stories that Inspire"
            description="We measure our success by the tangible results we deliver for our clients. Explore how we've helped diverse organizations achieve their most ambitious goals."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {cases.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-2/5 min-h-[300px] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.company} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary-900/20" />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-primary-900 uppercase tracking-widest shadow-lg">
                        {project.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col">
                    <div className="mb-6">
                      <h4 className="text-accent-gold font-bold text-sm uppercase tracking-widest mb-2">{project.company}</h4>
                      <h3 className="text-2xl font-bold text-primary-900 leading-tight mb-4">{project.title}</h3>
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-400 mb-1">The Challenge</p>
                        <p className="text-slate-600 text-sm line-clamp-2">{project.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-400 mb-1">Our Result</p>
                        <p className="text-primary-900 font-medium text-sm">{project.result}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-50">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-primary-900">
                             <metric.icon size={20} />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400">{metric.label}</p>
                            <p className="text-lg font-bold text-primary-900 leading-none">{metric.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-gold/10 rounded-full mb-10 text-accent-gold">
            <Users size={40} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-10 leading-tight">"Strategic excellence is not an act, but a habit. We've made it our habit to excel."</h2>
          <p className="text-slate-500 font-bold uppercase tracking-[0.4em]">- Elev8 Consulting Leadership Team</p>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

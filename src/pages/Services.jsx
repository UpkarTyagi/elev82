import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  LineChart, 
  Settings, 
  Smile, 
  Database, 
  RefreshCcw, 
  UserPlus, 
  Cpu,
  ArrowRight,
  ChevronRight,
  CircleDot
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/UI/Button';

const Services = () => {
  const services = [
    {
      id: 'strategic-planning',
      title: 'Strategic Planning',
      description: 'Align your business goals with actionable roadmaps designed for long-term scalability and market dominance.',
      icon: LineChart,
      benefits: ['Market positioning analysis', 'Goal setting and KPI tracking', 'Competitor benchmarking'],
      bulletPoints: ['Annual Strategy Workshops', 'Growth Opportunity Assessment', 'Governance Models'],
      color: 'blue'
    },
    {
      id: 'operational-optimization',
      title: 'Operational Optimization',
      description: 'Eliminate bottlenecks and streamline workflows to improve margins and increase organizational efficiency.',
      icon: Settings,
      benefits: ['Reduced operational costs', 'Enhanced productivity', 'Standardized procedures'],
      bulletPoints: ['Workflow Redesign', 'Supply Chain Management', 'Resource Allocation'],
      color: 'amber'
    },
    {
      id: 'customer-experience',
      title: 'Customer Experience Enhancement',
      description: 'Build lasting relationships by designing seamless, high-value journeys for your clients across all touchpoints.',
      icon: Smile,
      benefits: ['Improved NPS scores', 'Higher client retention', 'Brand loyalty growth'],
      bulletPoints: ['CX Journey Mapping', 'Voice of Customer Programs', 'Service Design'],
      color: 'emerald'
    },
    {
      id: 'data-analytics',
      title: 'Data Analysis & Visualization',
      description: 'Turn your raw data into strategic assets with advanced analytics and intuitive reporting dashboards.',
      icon: Database,
      benefits: ['Evidence-based decisions', 'Real-time performance monitoring', 'Trend forecasting'],
      bulletPoints: ['Business Intelligence Setup', 'Predictive Modeling', 'Data Architecture'],
      color: 'indigo'
    },
    {
      id: 'process-improvement',
      title: 'Process Improvement',
      description: 'Apply Lean and Six Sigma methodologies to continuously refine your operations and reduce waste.',
      icon: RefreshCcw,
      benefits: ['Zero-defect focused culture', 'Shorter cycle times', 'Higher quality outputs'],
      bulletPoints: ['Root Cause Analysis', 'Lean Implementation', 'Quality Management Systems'],
      color: 'rose'
    },
    {
      id: 'outsourcing',
      title: 'Outsourcing Solutions',
      description: 'Strategic partnership models that help you focus on your core competencies while we manage the rest.',
      icon: UserPlus,
      benefits: ['Access to global talent', 'Focused leadership energy', 'Cost-effective scaling'],
      bulletPoints: ['BPO Strategy', 'Vendor Management', 'Offshore Center Setup'],
      color: 'cyan'
    },
    {
      id: 'tech-integration',
      title: 'Technology Integration',
      description: 'Modernize your tech stack with seamless software implementation and digital ecosystem design.',
      icon: Cpu,
      benefits: ['Future-proof infrastructure', 'Automated manual tasks', 'Cross-platform synergy'],
      bulletPoints: ['ERP/CRM implementation', 'Cloud Migration Strategy', 'API Ecosystem Design'],
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const sets = {
      blue: 'bg-blue-50 text-blue-600 border-blue-100',
      amber: 'bg-amber-50 text-amber-600 border-amber-100',
      emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      rose: 'bg-rose-50 text-rose-600 border-rose-100',
      indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      cyan: 'bg-cyan-50 text-cyan-600 border-cyan-100',
      purple: 'bg-purple-50 text-purple-600 border-purple-100',
    };
    return sets[color] || sets.blue;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent-gold font-bold uppercase tracking-widest text-sm mb-4 inline-block"
            >
              Our Expertise
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-primary-900 mb-8 leading-tight"
            >
              Tailored Solutions for <br />
              <span className="text-gradient">Infinite Progress.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed mb-10"
            >
              We provide a comprehensive suite of consulting services designed to address the unique challenges and opportunities facing modern organizations.
            </motion.p>
            <Button variant="primary" size="lg" onClick={() => document.getElementById('services-grid').scrollIntoView({ behavior: 'smooth' })}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Detailed Grid */}
      <section id="services-grid" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            subtitle="Deep Dive"
            title="Comprehensive Consulting Services"
            description="Explore how we can help you transform your business through our specialized domains."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-transform duration-500 group-hover:scale-110 ${getColorClasses(service.color)}`}>
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-primary-900 mb-4 group-hover:text-accent-gold transition-colors">{service.title}</h3>
                <p className="text-slate-500 mb-8 flex-grow">{service.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-slate-800 mb-3 ml-1">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600">
                          <CircleDot className="w-3 h-3 text-accent-gold mt-1 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-50">
                    <ul className="space-y-2">
                      {service.bulletPoints.map((point, i) => (
                        <li key={i} className="flex items-center text-xs font-bold text-primary-800 uppercase tracking-wider">
                          <ChevronRight className="w-4 h-4 text-accent-gold mr-1" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 pt-6">
                  <Link to="/contact" className="flex items-center text-primary-900 font-bold text-sm hover:gap-2 transition-all">
                    Request Consultation <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-primary-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-accent-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 inline-block">Our Approach</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">A Proven Framework for Sustainable Success.</h2>
              <div className="space-y-8">
                {[
                  { n: '01', title: 'Discovery & Audit', d: 'We start by deeply understanding your current operations and identifying hidden inefficiencies.' },
                  { n: '02', title: 'Strategy Design', d: 'We develop a custom blueprint tailored to your specific organizational goals and market context.' },
                  { n: '03', title: 'Agile Execution', d: 'We implement solutions in iterations, ensuring immediate value and continuous refinement.' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-5xl font-bold text-slate-800 italic">{step.n}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-accent-gold">{step.title}</h4>
                      <p className="text-slate-400">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="h-64 bg-slate-900 rounded-3xl border border-slate-800 p-8 flex items-end">
                   <h5 className="font-bold text-2xl">Adaptability</h5>
                </div>
                <div className="h-48 bg-accent-gold rounded-3xl p-8 flex items-end text-primary-950">
                   <h5 className="font-bold text-2xl">Growth</h5>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-white/10 backdrop-blur rounded-3xl p-8 flex items-end border border-white/10">
                   <h5 className="font-bold text-2xl text-white">Innovation</h5>
                </div>
                <div className="h-64 bg-slate-800 rounded-3xl p-8 flex items-end">
                   <h5 className="font-bold text-2xl">Integrity</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Help Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Not sure which service is right for you?</h2>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
              Schedule a diagnostic discovery call with one of our senior consultants to identify the highest-impact areas for your business.
            </p>
            <Button variant="primary" size="lg" onClick={() => window.location.href='/contact'}>
              Book Diagnostic Session
            </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;

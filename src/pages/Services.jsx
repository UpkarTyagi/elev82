import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  LineChart, 
  Settings, 
  Smile, 
  Database, 
  Cpu,
  Target,
  ArrowRight,
  ChevronRight,
  CircleDot,
  CheckCircle2,
  Activity,
  Zap,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/UI/Button';

const Services = () => {
  const services = [
    {
      id: 'business-transformation',
      title: 'Business Transformation & Operating Model Design',
      tagline: 'Build a business that runs with clarity, structure, and purpose.',
      description: 'We design and implement operating models that align your strategy to execution—ensuring your people, processes, and systems work seamlessly together.',
      icon: LineChart,
      deliverables: [
        'Strategy-to-execution roadmaps',
        'Operating model design (people, process, technology)',
        'Process optimisation (Lean Six Sigma)',
        'Governance and performance frameworks'
      ],
      outcome: 'A structured, scalable business with clear accountability and efficient ways of working.',
      color: 'blue'
    },
    {
      id: 'ai-automation',
      title: 'AI & Intelligent Automation',
      tagline: 'Work smarter by embedding AI into your day-to-day operations.',
      description: 'We help you identify where AI and automation can deliver real impact—reducing manual effort, improving speed, and enabling better decision-making.',
      icon: Cpu,
      deliverables: [
        'AI opportunity assessment tailored to your business',
        'Workflow and process automation (low-code / no-code)',
        'AI-powered assistants (customer support, reporting, operations)',
        'Document and data automation'
      ],
      outcome: 'Reduced manual work, faster operations, and a future-ready business model.',
      color: 'purple'
    },
    {
      id: 'data-insights',
      title: 'Data, Insights & Performance Intelligence',
      tagline: 'Make confident decisions with the right data at your fingertips.',
      description: 'We transform fragmented or underutilised data into clear, actionable insights that drive performance and accountability.',
      icon: Database,
      deliverables: [
        'KPI framework design aligned to business outcomes',
        'Real-time dashboards and reporting',
        'Data structuring and quality uplift',
        'Predictive insights and trend analysis'
      ],
      outcome: 'Full visibility of business performance, enabling faster and better decisions.',
      color: 'indigo'
    },
    {
      id: 'customer-experience',
      title: 'Customer Experience & Growth Enablement',
      tagline: 'Design experiences that drive loyalty, retention, and growth.',
      description: 'We help you understand and optimise your customer journey—ensuring every interaction delivers value and strengthens your brand.',
      icon: Smile,
      deliverables: [
        'End-to-end customer journey mapping',
        'Customer feedback and insights analysis',
        'Service design and experience optimisation',
        'Retention and conversion improvement strategies'
      ],
      outcome: 'Stronger customer relationships and measurable growth in revenue and retention.',
      color: 'emerald'
    },
    {
      id: 'digital-systems',
      title: 'Digital & Systems Enablement',
      tagline: 'Ensure your systems support how your business actually operates.',
      description: 'We bridge the gap between business processes and technology—so your systems enable efficiency, not complexity.',
      icon: Settings,
      deliverables: [
        'CRM / ERP selection and implementation',
        'Workflow and system integration',
        'Process-to-system alignment',
        'Technology and vendor advisory'
      ],
      outcome: 'Streamlined systems that support your operations and scale with your business.',
      color: 'amber'
    },
    {
      id: 'pmo-governance',
      title: 'PMO, Governance & Delivery Excellence',
      tagline: 'Deliver initiatives with structure, discipline, and measurable outcomes.',
      description: 'We establish the frameworks and governance needed to execute projects effectively and realise value.',
      icon: Target,
      deliverables: [
        'PMO setup and uplift',
        'Project and portfolio governance',
        'Agile and hybrid delivery frameworks',
        'Benefits realisation and performance tracking'
      ],
      outcome: 'Improved delivery confidence, visibility, and return on investment.',
      color: 'rose'
    }
  ];

  const packages = [
    {
      title: 'Business Health Check (2-3 Weeks)',
      description: 'A fast, focused assessment of how your business is operating today.',
      icon: Activity,
      points: [
        'Process and workflow review',
        'Data and reporting maturity assessment',
        'Identification of quick wins and improvement opportunities'
      ],
      outcome: 'A clear, actionable roadmap to improve performance.'
    },
    {
      title: '90-Day Transformation Sprint',
      description: 'Rapid improvement across your most critical business areas.',
      icon: Zap,
      points: [
        'Optimise 1–2 core processes',
        'Implement performance dashboards',
        'Introduce automation where it matters most'
      ],
      outcome: 'Immediate operational improvements and measurable efficiency gains.'
    },
    {
      title: 'Scale Ready Program',
      description: 'Prepare your business for sustainable growth.',
      icon: TrendingUp,
      points: [
        'Operating model design',
        'Systems and process alignment',
        'KPI frameworks and governance setup'
      ],
      outcome: 'A business that is structured, scalable, and ready for the next stage of growth.'
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
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent-gold font-bold uppercase tracking-widest text-sm mb-4 inline-block"
            >
              Services
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-primary-900 mb-8 leading-tight tracking-tighter"
            >
              Transform How Your Business<br />
              <span className="text-gradient">Operates, Scales, and Performs</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed mb-6 font-medium"
            >
              At Elev8 Consulting Group, we help small and growing businesses operate with the clarity, structure, and capability of high-performing organisations.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-600 leading-relaxed mb-10"
            >
              We combine process excellence, data intelligence, and AI-enabled solutions to simplify operations, unlock capacity, and enable sustainable growth.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" onClick={() => document.getElementById('our-services').scrollIntoView({ behavior: 'smooth' })}>
                Explore Our Services
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href='/contact'}>
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Banner */}
      <section className="py-12 bg-primary-950 text-white border-y border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-slate-400">
              <span className="hover:text-accent-gold transition-colors cursor-pointer">Business Transformation</span>
              <span className="hover:text-accent-gold transition-colors cursor-pointer">Customer Experience Enhancement</span>
              <span className="hover:text-accent-gold transition-colors cursor-pointer">Data Analysis & Insights</span>
              <span className="hover:text-accent-gold transition-colors cursor-pointer">Technology Integration</span>
           </div>
        </div>
      </section>

      {/* Services Detailed Grid */}
      <section id="our-services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            subtitle="Our Capabilities"
            title="Our Services"
            description="Specialised domains built to deliver sustainable impact."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border transition-transform duration-500 group-hover:scale-110 ${getColorClasses(service.color)}`}>
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-primary-900 mb-2 leading-tight">{service.title}</h3>
                <h4 className="text-sm font-bold text-slate-700 italic mb-4">{service.tagline}</h4>
                <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">{service.description}</p>
                
                <div className="space-y-4 mt-auto">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-800 mb-3 ml-1 border-b border-slate-100 pb-2">What We Deliver</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start text-xs font-medium text-slate-600 leading-relaxed">
                          <CircleDot className="w-3 h-3 text-accent-gold mt-1 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-50 bg-slate-50 -mx-8 -mb-8 px-8 py-5 rounded-b-[2rem]">
                    <div className="flex gap-3 items-start">
                       <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                       <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Outcome</p>
                          <p className="text-sm font-bold text-primary-900 leading-snug">{service.outcome}</p>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Packages */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-gold opacity-5 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            subtitle="Transformation Packages"
            title="Designed for Small Businesses Ready to Scale"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-primary-950 text-white p-10 rounded-[2.5rem] border border-slate-800 relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                  <pkg.icon size={28} className="text-accent-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display leading-tight">{pkg.title}</h3>
                <p className="text-slate-400 mb-10 flex-grow">{pkg.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {pkg.points.map((point, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-300">
                      <ChevronRight className="w-4 h-4 text-accent-gold mt-1 mr-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-slate-800">
                   <p className="text-xs uppercase font-bold text-slate-500 mb-2">Outcome</p>
                   <p className="text-sm font-bold text-white">{pkg.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 inline-block">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900 leading-tight mb-6">A practical, outcome-focused approach.</h2>
            <p className="text-lg text-slate-600">
              Cutting through complexity and focusing on what truly drives value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { i: '01', text: 'Understand your business, challenges, and goals' },
               { i: '02', text: 'Design fit-for-purpose solutions' },
               { i: '03', text: 'Implement with your team, not in isolation' },
               { i: '04', text: 'Embed sustainable ways of working' }
             ].map((step, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center"
               >
                 <span className="block text-4xl font-bold text-accent-gold mb-4 italic">{step.i}</span>
                 <p className="font-bold text-primary-900 leading-snug">{step.text}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-primary-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-gold via-transparent to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MessageSquare className="w-16 h-16 text-accent-gold mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let’s build a smarter, more efficient, and future-ready organisation—together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="secondary" size="lg" onClick={() => window.location.href='/contact'}>
              Get In Touch
            </Button>
            <Button variant="white" size="lg" className="bg-transparent text-white border-2 border-white/20 hover:bg-white/10" onClick={() => window.location.href='/contact'}>
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;

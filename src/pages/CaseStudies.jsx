import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  DollarSign, 
  Clock, 
  ArrowRight, 
  Zap, 
  Search, 
  ShieldCheck, 
  BarChart2, 
  CheckCircle2,
  RefreshCcw,
  Settings,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

import cs1 from '../assets/img/austin-distel-_S7-KX8geL0-unsplash.jpg';
import cs2 from '../assets/img/austin-distel-jpHw8ndwJ_Q-unsplash.jpg';
import cs3 from '../assets/img/austin-distel-wD1LRb9OeEo-unsplash.jpg';
import cs4 from '../assets/img/evangeline-shaw-VLkoOabAxqw-unsplash.jpg';
import cs5 from '../assets/img/linkedin-sales-solutions-46bom4lObsA-unsplash.jpg';
import cs6 from '../assets/img/pexels-mizunokozuki-12902907.jpg';
import cs7 from '../assets/img/pexels-mizunokozuki-12903148.jpg';
import cs8 from '../assets/img/sebastian-herrmann-O2o1hzDA7iE-unsplash.jpg';

const CaseStudies = () => {
  const cases = [
    {
      industry: 'Telecommunications',
      title: 'Assurance Process Transformation',
      challenge: 'Fragmented processes and inconsistent execution across Assurance functions.',
      result: 'Standardised end-to-end processes using BPMN 2.0 mapping, Lean Six Sigma (DMAIC), and operating model design to align stakeholders and improve consistency.',
      metrics: [
        { label: 'Variation Drop', value: '-40%', icon: Zap },
        { label: 'Efficiency', value: '+30%', icon: BarChart2 },
      ],
      image: cs1
    },
    {
      industry: 'Renewable Energy',
      title: 'PMO & Governance Establishment',
      challenge: 'Lack of structured governance impacting delivery and visibility.',
      result: 'Established a scalable PMO leveraging Agile delivery frameworks, stage-gate governance, and portfolio reporting dashboards (Power BI).',
      metrics: [
        { label: 'Visibility', value: '100%', icon: TrendingUp },
        { label: 'Speed Delivery', value: '+25%', icon: Clock },
      ],
      image: cs2
    },
    {
      industry: 'Energy Markets',
      title: 'Observability & Resilience Transformation',
      challenge: 'Limited system visibility and fragmented monitoring capabilities.',
      result: 'Enabled unified observability using MELT framework (Metrics, Events, Logs, Traces), integrating Dynatrace and ELK, and aligning value chain processes.',
      metrics: [
        { label: 'Faster Detection', value: '50%', icon: Search },
        { label: 'Resilience', value: '+35%', icon: ShieldCheck },
      ],
      image: cs3
    },
    {
      industry: 'Government / Regulatory',
      title: 'Enterprise Process Standardisation',
      challenge: 'Inconsistent processes and lack of governance impacting compliance.',
      result: 'Standardised processes using BPMN 2.0, implemented ISO 9001-aligned governance, and established RACI-based ownership models.',
      metrics: [
        { label: 'Process Maturity', value: '+60%', icon: BarChart2 },
        { label: 'Audit Alignment', value: '100%', icon: CheckCircle2 },
      ],
      image: cs4
    },
    {
      industry: 'Energy (Enterprise)',
      title: 'Process Architecture & Signavio Implementation',
      challenge: 'Disparate and ungoverned process documentation.',
      result: 'Implemented SAP Signavio, standardised BPMN frameworks, and introduced a process maturity scorecard.',
      metrics: [
        { label: 'Maturity Score', value: '3.6/4', icon: TrendingUp },
        { label: 'Duplication', value: '-70%', icon: RefreshCcw },
      ],
      image: cs5
    },
    {
      industry: 'Energy Portfolio',
      title: 'Data Integration & Reporting Automation',
      challenge: 'Manual data handling and unreliable reporting.',
      result: 'Delivered data integration using ETL pipelines, unified data models, and built dashboards in Microsoft Power BI for automated reporting.',
      metrics: [
        { label: 'Manual Handling', value: '-80%', icon: TrendingDown },
        { label: 'Sites Integrated', value: '200+', icon: BarChart2 },
      ],
      image: cs6
    },
    {
      industry: 'Renewable Infrastructure',
      title: 'Asset Management Function Design',
      challenge: 'No structured asset management capability.',
      result: 'Established asset management frameworks aligned to ISO 55001 principles, supported by maintenance planning models and lifecycle optimisation.',
      metrics: [
        { label: 'Asset Visibility', value: '90%', icon: Settings },
        { label: 'Reduced Costs', value: '-45%', icon: DollarSign },
      ],
      image: cs7
    },
    {
      industry: 'Public Sector',
      title: 'Outcome-Based Performance Reporting',
      challenge: 'Disconnected and manual reporting processes.',
      result: 'Aligned processes and reporting using KPI frameworks, data governance models, and outcome-based performance design.',
      metrics: [
        { label: 'Reporting', value: 'Auditable', icon: BarChart2 },
        { label: 'Decisions', value: 'Faster', icon: Activity },
      ],
      image: cs8
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
                transition={{ delay: (idx % 2) * 0.1 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-2/5 min-h-[250px] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.industry} 
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary-900/20" />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-primary-900 uppercase tracking-widest shadow-lg">
                        Case Study
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col">
                    <div className="mb-6">
                      <h4 className="text-accent-gold font-bold text-sm uppercase tracking-widest mb-2">{project.industry}</h4>
                      <h3 className="text-2xl font-bold text-primary-900 leading-tight mb-4">{project.title}</h3>
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-400 mb-1">The Challenge</p>
                        <p className="text-slate-600 text-sm line-clamp-3">{project.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-400 mb-1">Our Result</p>
                        <p className="text-primary-900 font-medium text-sm line-clamp-4">{project.result}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-50">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-900 rounded-xl flex items-center justify-center text-accent-gold flex-shrink-0 shadow-sm">
                             <metric.icon size={20} />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400">{metric.label}</p>
                            <p className="text-lg font-bold text-primary-900 leading-none">{metric.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-50">
                      <Link to="/contact" className="inline-flex items-center text-primary-900 font-bold text-sm hover:text-accent-gold transition-colors group/cta">
                        Read the Full Story <ArrowRight className="ml-2 w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                      </Link>
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-900 rounded-full mb-10 text-accent-gold shadow-lg">
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

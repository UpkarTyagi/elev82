import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users, Zap, Award, CheckCircle2, Star, Lightbulb, Activity, MonitorSmartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import SectionHeader from '../components/SectionHeader';

const Home = () => {
  const services = [
    {
      title: 'Business Transformation & Strategy',
      description: 'Design and execute future-ready strategies that align your vision, operations, and growth ambitions.',
      icon: BarChart3,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Operational Excellence',
      description: 'Streamline processes, eliminate inefficiencies, and unlock capacity using proven Lean Six Sigma principles.',
      icon: Zap,
      color: 'bg-amber-100 text-amber-600',
    },
    {
      title: 'AI & Intelligent Automation',
      description: 'Embed AI and automation into your workflows to reduce manual effort, improve speed, and scale smarter.',
      icon: Lightbulb,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Data & Performance Intelligence',
      description: 'Transform your data into real-time insights, enabling confident decisions and measurable business performance.',
      icon: Activity,
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      title: 'Customer Experience & Growth',
      description: 'Optimise customer journeys, improve retention, and drive growth through insight-led experience design.',
      icon: Users,
      color: 'bg-pink-100 text-pink-600',
    },
    {
      title: 'Digital & Systems Enablement',
      description: 'Align your systems with how your business operates—ensuring technology drives efficiency, not complexity.',
      icon: MonitorSmartphone,
      color: 'bg-cyan-100 text-cyan-600',
    },
  ];

  const stats = [
    { label: 'Growth Delivered', value: '150%', suffix: '+' },
    { label: 'Client Satisfaction', value: '98', suffix: '%' },
    { label: 'Years Experience', value: '15', suffix: 'Y' },
    { label: 'Global Clients', value: '200', suffix: '+' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                <span className="flex h-2 w-2 rounded-full bg-accent-gold animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Welcome to Elev8 Consulting Group</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 text-primary-900">
                Unlocking Potential. <br/><span className="text-gradient">Driving Infinite Growth.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-xl">
                At Elev8, we partner with ambitious leaders to turn challenges into competitive advantages. In a world of constant change, we deliver tailored strategies that streamline operations, harness cutting-edge technology, and create exceptional customer experiences—so your business doesn’t just survive, it thrives.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                Whether you’re a growing startup or an established enterprise, our experts work side-by-side with you to drive measurable results and sustainable success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="md" onClick={() => window.location.href='/contact'}>
                  Start Your Transformation Journey <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="outline" size="md" onClick={() => window.location.href='/services'}>
                  Explore Our Services
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Business Meeting" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/10" />
              </div>
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-2xl z-20 flex items-center space-x-4 max-w-xs border border-slate-100"
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 className="text-green-600 w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-900">Project Complete</h4>
                  <p className="text-sm text-slate-500">100% Client Satisfaction</p>
                </div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-10 -right-10 bg-primary-900 text-white p-6 rounded-xl shadow-2xl z-20 flex items-center space-x-4 max-w-xs"
              >
                <div className="bg-accent-gold p-3 rounded-full text-primary-900">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold">Expert Team</h4>
                  <p className="text-sm text-slate-300">50+ Senior Consultants</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-2xl shadow-lg mt-8 h-64 object-cover" 
                  alt="Collaboration"
                />
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-2xl shadow-lg h-64 object-cover" 
                  alt="Results"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-gold text-primary-900 p-8 rounded-2xl shadow-2xl border-4 border-white text-center">
                <span className="block text-4xl font-bold mb-1">15+</span>
                <span className="text-sm font-bold uppercase tracking-widest">Years of Excellence</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-accent-gold font-bold uppercase tracking-[0.3em] text-sm">Who We Are</span>
              <h2 className="text-4xl font-bold mt-4 mb-8 text-primary-900 leading-tight">We build robust foundations for your endless possibilities.</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Elev8 Consulting Group was founded on the principle that every business has the potential for infinite growth. We partner with visionary leaders to navigate complexity and achieve meaningful impact.
              </p>
              <ul className="space-y-4 mb-10">
                {['Strategic Roadmap Development', 'Data-Driven Insights', 'Agile Implementation Frameworks'].map((item) => (
                  <li key={item} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="text-accent-gold w-5 h-5 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="outline">Learn More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            subtitle="Expertise"
            title="Core Solutions for Modern Challenges"
            description="Our specialized consulting services are designed to help you stay ahead in an ever-evolving market landscape."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary-900">{service.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{service.description}</p>
                <Link to="/services" className="text-primary-900 font-bold flex items-center hover:text-accent-gold transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 premium-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-accent-gold mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-slate-400 font-medium uppercase tracking-widest text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-gold/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            subtitle="Success Stories"
            title="Trusted by Forward-Thinking Leaders"
          />
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-slate-50 p-12 lg:p-16 rounded-[40px] shadow-sm border border-slate-100 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex justify-center space-x-1 mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} className="fill-accent-gold text-accent-gold w-6 h-6" />)}
              </div>
              <blockquote className="text-2xl lg:text-3xl font-medium text-primary-900 mb-10 italic leading-snug">
                "Elev8 Consulting completely transformed our approach to operational efficiency. Their strategic roadmap resulted in a 40% reduction in overhead costs within the first year."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" 
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-white"
                  alt="Client"
                />
                <div className="text-left">
                  <h5 className="font-bold text-lg text-primary-900">David Henderson</h5>
                  <p className="text-slate-500">COO, Global Logistics Corp</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-primary-900 rounded-[3rem] overflow-hidden px-10 py-20 lg:p-24 shadow-2xl">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to elevate?</h2>
              <p className="text-slate-300 text-xl mb-12">
                Let’s discuss how we can unlock your organisation’s full potential.
              </p>
              <div className="flex justify-center">
                <Button variant="secondary" size="lg" onClick={() => window.location.href='/contact'}>
                  Book a Free Strategy Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

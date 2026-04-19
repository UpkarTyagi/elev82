import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users, Zap, Award, CheckCircle2, Star, Lightbulb, Activity, MonitorSmartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import SectionHeader from '../components/SectionHeader';

import heroImg from '../assets/img/business-people-meeting-office.jpg';
import collabImg from '../assets/img/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork.jpg';
import resultsImg from '../assets/img/campaign-creators-gMsnXqILjp4-unsplash.jpg';
import clientImg from '../assets/img/pexels-edmond-dantes-4344860.jpg';

const Home = () => {
  const services = [
    {
      title: 'Business Transformation & Strategy',
      description: 'Design and execute future-ready strategies that align your vision, operations, and growth ambitions.',
      icon: BarChart3,
      color: 'bg-primary-900 text-accent-gold',
    },
    {
      title: 'Operational Excellence',
      description: 'Streamline processes, eliminate inefficiencies, and unlock capacity using proven Lean Six Sigma principles.',
      icon: Zap,
      color: 'bg-primary-900 text-accent-gold',
    },
    {
      title: 'AI & Intelligent Automation',
      description: 'Embed AI and automation into your workflows to reduce manual effort, improve speed, and scale smarter.',
      icon: Lightbulb,
      color: 'bg-primary-900 text-accent-gold',
    },
    {
      title: 'Data & Performance Intelligence',
      description: 'Transform your data into real-time insights, enabling confident decisions and measurable business performance.',
      icon: Activity,
      color: 'bg-primary-900 text-accent-gold',
    },
    {
      title: 'Customer Experience & Growth',
      description: 'Optimise customer journeys, improve retention, and drive growth through insight-led experience design.',
      icon: Users,
      color: 'bg-primary-900 text-accent-gold',
    },
    {
      title: 'Digital & Systems Enablement',
      description: 'Align your systems with how your business operates—ensuring technology drives efficiency, not complexity.',
      icon: MonitorSmartphone,
      color: 'bg-primary-900 text-accent-gold',
    },
  ];

  const stats = [
    { label: 'Growth Delivered', value: '150', suffix: '%' },
    { label: 'Client Satisfaction', value: '98', suffix: '%' },
    { label: 'On-Time Delivery', value: '95', suffix: '%' },
    { label: 'Productivity Increase', value: '2', suffix: 'x' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-slate-50 -z-30" />
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
            className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-accent-gold/10 rounded-full blur-[100px]" 
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-primary-900/5 backdrop-blur-sm border border-primary-900/10 px-4 py-2 rounded-full mb-8 shadow-sm"
              >
                <span className="flex h-2 w-2 rounded-full bg-accent-gold animate-pulse" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-primary-900/70">Transformation Partners</span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[1.05] mb-8 text-primary-900 tracking-tighter">
                Unlocking <br/>
                <span className="relative">
                  <span className="relative z-10">Potential.</span>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-2 left-0 h-3 md:h-5 bg-accent-gold/30 -z-10"
                  />
                </span>
                <br/>
                <span className="text-gradient">Infinite Growth.</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
                We partner with ambitious leaders to turn complexity into <span className="text-primary-900 font-bold border-b-2 border-accent-gold">clarity</span>. Elev8 Consulting delivers enterprise-level strategy and AI-driven transformation for businesses ready to scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-xl shadow-primary-900/20">
                      Start Transformation <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/services">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Our Expertise
                    </Button>
                  </motion.div>
                </Link>
              </div>

              {/* Trust Badge */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 flex items-center space-x-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-primary-900/50 block">Strategic Excellence in</span>
                <div className="flex space-x-4">
                  <Zap size={20} className="text-primary-900" />
                  <Award size={20} className="text-primary-900" />
                  <Users size={20} className="text-primary-900" />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative lg:-mt-12"
            >
              {/* Main Image Composition */}
              <div className="relative z-10 p-4">
                <div className="relative bg-white p-3 rounded-[2.5rem] shadow-2xl overflow-hidden group">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-[2rem] overflow-hidden"
                  >
                    <img 
                      src={heroImg} 
                      alt="Elev8 Business Leadership" 
                      className="w-full aspect-[4/5] lg:aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                
                {/* Floating Metric Card 1 */}
                <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 lg:-right-12 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/50 z-20 flex items-center space-x-4 max-w-[200px]"
                >
                  <div className="h-10 w-10 flex items-center justify-center bg-accent-gold text-primary-900 rounded-lg shadow-inner">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-primary-900/40 uppercase tracking-tighter">Growth Rate</div>
                    <div className="text-xl font-black text-primary-900">+150%</div>
                  </div>
                </motion.div>

                {/* Floating Metric Card 2 */}
                <motion.div 
                  animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 left-0 lg:-left-8 bg-white p-5 rounded-2xl shadow-2xl z-20 border border-slate-100 flex items-center space-x-4 min-w-[220px]"
                >
                  <div className="bg-primary-900 p-3 rounded-xl shadow-inner">
                    <CheckCircle2 className="text-accent-gold w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-primary-900 mb-0.5">Project Complete</div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">98% Client Satisfaction</div>
                  </div>
                </motion.div>
              </div>
              
              {/* Backglow for the image composition */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary-900/5 to-transparent rounded-full blur-[100px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={collabImg} 
                  className="rounded-2xl shadow-lg h-64 object-cover" 
                  loading="lazy"
                  alt="Collaboration"
                />
                <img 
                  src={resultsImg} 
                  className="rounded-2xl shadow-lg h-64 object-cover" 
                  loading="lazy"
                  alt="Results"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-gold text-primary-900 px-3 py-1.5 rounded-xl shadow-lg border-2 border-white text-center z-20 scale-90 md:scale-100 min-w-[140px]">
                <span className="block text-[10px] md:text-[11px] font-bold leading-tight uppercase tracking-tight">Decades of combined consulting</span>
                <span className="block text-[9px] font-black uppercase tracking-[0.2em] opacity-90">expertise</span>
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
                  src={clientImg} 
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-white"
                  loading="lazy"
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
                <Link to="/contact">
                  <Button variant="secondary" size="lg">
                    Book a Free Strategy Session
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

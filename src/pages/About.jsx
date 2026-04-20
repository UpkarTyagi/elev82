import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Users, Globe, Lightbulb, Star, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import aboutStoryImg from '../assets/img/two-male-colleagues-office-standing-with-laptop.jpg';
import foundersTeamImg from '../assets/img/elev8-team-leadership.png';

const About = () => {
  const values = [
    { title: 'Integrity', description: 'We do what is right—always. Trust is the foundation of everything we deliver.', icon: ShieldCheck },
    { title: 'Excellence', description: 'We set a high bar and deliver with precision, discipline, and quality.', icon: Star },
    { title: 'Client Impact', description: 'We focus on outcomes that matter—measurable, meaningful, and lasting.', icon: Target },
    { title: 'Collaboration', description: 'We work as one team with our clients to solve complex challenges.', icon: Users },
    { title: 'Continuous Improvement', description: 'We challenge the status quo and constantly seek better ways of working.', icon: TrendingUp },
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
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Transforming How Businesses<br />Operate, Grow, and Scale</h1>

            <div className=" mx-auto text-lg md:text-xl text-slate-100/90 leading-relaxed font-medium space-y-6">
              <p>
                Elev8 Consulting Group is a Sydney-based transformation partner committed to helping organisations achieve extraordinary results through strategic insight, operational excellence, and human-centred innovation.
              </p>
              <p>
                Our diverse team of experts brings deep experience in strategic planning, technology integration, customer experience, and process optimisation. We don’t just advise – we collaborate hand-in-hand to deliver tailored solutions that drive real, measurable growth.
              </p>
              <p>
                Rooted in integrity, curiosity, and a relentless focus on client success, we empower businesses of all sizes to navigate complexity, embrace change, and build sustainable competitive advantage.
              </p>
            </div>
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
              <span className="inline-block text-accent-gold font-bold uppercase tracking-[0.4em] text-xs mb-4">The Journey</span>
              <h2 className="text-4xl font-bold text-primary-900 mb-8 leading-tight font-display">Founder's Story</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>Elev8 Consulting Group was founded on a simple belief: businesses don’t struggle because of a lack of ambition—they struggle because of how they operate.</p>
                <p>After years of leading transformation initiatives across industries, our founder saw a recurring challenge—organisations held back by inefficient processes, disconnected systems, and limited visibility of performance.</p>
                <p>At the same time, many small and growing businesses lacked access to the structured thinking and transformation capability typically available to large enterprises.</p>
                <p className="font-bold text-primary-800">Elev8 was created to change that.</p>
                <p>To bring enterprise-level transformation expertise into a practical, accessible, and results-driven approach—designed specifically for businesses that want to grow, scale, and operate with confidence.</p>
                <p>Today, Elev8 partners with organisations to cut through complexity, align how they work, and deliver meaningful, measurable outcomes—without unnecessary complexity.</p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="space-y-4">
                  <img
                    src={aboutStoryImg}
                    alt="Founder's Vision"
                    loading="lazy"
                    className="rounded-3xl shadow-xl w-full h-64 object-cover"
                  />
                  <div className="bg-accent-gold p-1 rounded-3xl" />
                </div>
                <div className="pt-8">
                  <img
                    src={foundersTeamImg}
                    alt="Collaborative Teamwork"
                    loading="lazy"
                    className="rounded-3xl shadow-xl w-full h-80 object-cover"
                  />
                </div>

                {/* Visual accent for the photos */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-gold/20 rounded-full blur-3xl -z-10" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-slate-100 rounded-[2.5rem] -z-10 transform scale-110" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do & How We're Different Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100"
            >
              <h3 className="text-3xl font-bold text-primary-900 mb-6 font-display">What We Do</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We work closely with leadership teams to turn strategy into execution—designing practical, fit-for-purpose solutions that deliver real outcomes.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                From optimising core processes to implementing intelligent automation and building data-driven capabilities, our focus is simple:<br />
                <span className="text-accent-gold font-bold">helping businesses run better, every day.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100"
            >
              <h3 className="text-3xl font-bold text-primary-900 mb-6 font-display">How We’re Different</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We don’t believe in generic frameworks or over-engineered solutions. Our approach is:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="text-accent-gold w-6 h-6 mr-3 flex-shrink-0" />
                  <span><strong>Practical</strong> – focused on what works in the real world</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="text-accent-gold w-6 h-6 mr-3 flex-shrink-0" />
                  <span><strong>Collaborative</strong> – working alongside your team</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="text-accent-gold w-6 h-6 mr-3 flex-shrink-0" />
                  <span><strong>Outcome-driven</strong> – delivering measurable impact, not just recommendations</span>
                </li>
              </ul>
              <p className="text-slate-600 text-lg leading-relaxed">
                By integrating process, data, and technology, we ensure every solution is aligned, scalable, and built for long-term success.
              </p>
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
              <div className="w-16 h-16 bg-primary-900 flex items-center justify-center rounded-2xl mb-8 shadow-sm">
                <Target className="text-accent-gold w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary-900 mb-6 font-display">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                "At Elev8 Consulting Group, our mission is to unlock the full potential of every organisation we partner with. Through bold strategic guidance, innovative solutions, and unwavering expertise, we foster collaboration, integrity, and excellence – helping clients achieve sustainable growth and lasting impact in their industries and communities."
              </p>
              <p className="text-slate-600 text-lg leading-relaxed italic">
                To empower businesses to reach their full potential by aligning strategy, process, data, and technology—delivering practical solutions that drive measurable performance and sustainable growth.
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
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                "Our vision is to be the trusted catalyst for transformation – recognised as the go-to partner for forward-thinking leaders who want to thrive in a dynamic world. By pushing boundaries, embracing emerging technologies, and delivering inspired results, we help businesses of every size realise their boldest ambitions."
              </p>
              <p className="text-slate-300 text-lg leading-relaxed italic">
                To be the trusted transformation partner for small and growing businesses—enabling them to operate with the capability, clarity, and confidence of high-performing organisations.
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

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-900 text-accent-gold rounded-full mb-6 shadow-sm">
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-primary-900">{value.title}</h4>
                <p className="text-sm text-slate-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Ahead Section */}
      <section className="py-24 bg-primary-950 text-white text-center rounded-t-[4rem] relative overflow-hidden mt-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold opacity-10 blur-[200px] rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-flex w-16 h-16 bg-white/10 items-center justify-center rounded-full mb-8">
            <Globe className="text-accent-gold w-8 h-8" />
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">Looking Ahead</h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-6 font-medium">
            As technology and AI continue to reshape how businesses operate, our focus remains on helping organisations adapt, evolve, and stay ahead.
          </p>
          <p className="text-2xl text-accent-gold leading-relaxed font-bold">
            Elev8 Consulting Group is your partner in building a smarter, more efficient, and future-ready business.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

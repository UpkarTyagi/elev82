import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Globe } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/UI/Button';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out. A consultant will contact you shortly.');
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            subtitle="Get In Touch"
            title="Let's Start Your Evolution"
            description="Whether you have a specific project in mind or just want to explore possibilities, we're here to help you scale."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <h3 className="text-2xl font-bold text-primary-900 mb-8">Contact Information</h3>
                <div className="space-y-8">
                  {[
                    { icon: Mail, label: 'Email Us', value: 'together@letselev8.com.au', link: 'mailto:together@letselev8.com.au' },
                    { icon: Phone, label: 'Call Us', value: '+61 2 9000 0000', link: 'tel:+61290000000' },
                    { icon: MapPin, label: 'Visit Us', value: 'Level 42, 100 Barangaroo Ave, Sydney NSW 2000', link: 'https://maps.google.com' },
                    { icon: Globe, label: 'Regional Focus', value: 'Australia, APAC & Global', link: '#' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="w-14 h-14 bg-slate-50 text-primary-900 rounded-2xl flex items-center justify-center group-hover:bg-accent-gold group-hover:text-primary-900 transition-all duration-300 shadow-sm border border-slate-100">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                        <a href={item.link} className="text-lg font-bold text-primary-900 hover:text-accent-gold transition-colors">{item.value}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 bg-primary-900 rounded-[2.5rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Clock size={120} />
                </div>
                <h4 className="text-xl font-bold mb-4 relative z-10">Business Hours</h4>
                <ul className="space-y-3 text-slate-300 relative z-10">
                  <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-accent-gold font-bold">9:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span> <span>By Appointment Only</span></li>
                  <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-slate-50 p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Company</label>
                      <input 
                        type="text" 
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all"
                        placeholder="Organization Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Service of Interest</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all appearance-none">
                        <option>Strategic Planning</option>
                        <option>Operational Excellence</option>
                        <option>Digital Transformation</option>
                        <option>Data Analytics</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                    <textarea 
                      rows="5"
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all resize-none"
                      placeholder="How can we help you elevate your business?"
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full lg:w-auto">
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section or Office Visual */}
      <section className="h-[400px] bg-slate-200">
         <div className="w-full h-full relative">
            <img 
               src="https://images.unsplash.com/photo-1449156001437-37c645d978b3?auto=format&fit=crop&q=80&w=1600"
               className="w-full h-full object-cover"
               alt="Sydney Office"
            />
            <div className="absolute inset-0 bg-primary-900/10 flex items-center justify-center">
               <div className="bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-primary-900">
                     <MapPin size={24} />
                  </div>
                  <div>
                     <h5 className="font-bold text-primary-900">Elev8 HQ</h5>
                     <p className="text-sm text-slate-500">Sydney, Australia</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;

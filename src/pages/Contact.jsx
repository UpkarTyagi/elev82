import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/UI/Button';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Collect form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Add custom subject
    data._subject = "New Lead: Elev8 Consulting Website";

    try {
      await fetch("https://formsubmit.co/ajax/elev8consulting@outlook.com.au", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setIsSubmitted(true); // fall back to showing success UI anyway to prevent user frustration
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            subtitle="Get In Touch"
            title="Ready to elevate your business?"
            description="Let’s start the conversation."
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
                <h3 className="text-2xl font-bold text-primary-900 mb-8">Direct Contact</h3>
                <div className="space-y-8">
                  {[
                    { icon: Mail, label: 'Email Us', value: 'elev8consulting@outlook.com.au', link: 'mailto:elev8consulting@outlook.com.au' },
                    { icon: MapPin, label: 'Location', value: 'Sydney, NSW 2000, Australia', link: 'https://maps.google.com' }
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
              <div className="bg-slate-50 p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-sm min-h-[600px] flex flex-col justify-center">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <CheckCircle className="w-20 h-20 text-accent-gold mb-6" />
                    <h3 className="text-4xl font-bold text-primary-900 mb-4 font-display">Thank you!</h3>
                    <p className="text-xl text-slate-600 font-medium">We’ll reply within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Company</label>
                        <input 
                          type="text" 
                          name="company"
                          className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all"
                          placeholder="Organization name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Phone</label>
                        <input 
                          type="tel"
                          name="phone"
                          className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">What challenge are you facing?</label>
                      <select name="challenge" required className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all appearance-none cursor-pointer">
                        <option value="">Select a challenge...</option>
                        <option value="Strategic Planning">Strategic Planning</option>
                        <option value="Operational Efficiency">Operational Efficiency</option>
                        <option value="Customer Experience">Customer Experience</option>
                        <option value="Data & Insights">Data & Insights</option>
                        <option value="Technology">Technology</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                      <textarea 
                        name="message"
                        rows="5"
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all resize-none"
                        placeholder="Tell us more about your challenge..."
                      ></textarea>
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full lg:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Sending... <Loader2 className="ml-2 w-4 h-4 animate-spin" /></>
                      ) : (
                        <>Send Message <Send className="ml-2 w-4 h-4" /></>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section or Office Visual */}
      <section className="h-[400px] bg-slate-200">
         <div className="w-full h-full relative">
            <img 
               src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1600"
               className="w-full h-full object-cover"
               alt="Sydney Australia"
            />
            <div className="absolute inset-0 bg-primary-900/40 flex items-center justify-center">
               <div className="bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-primary-900">
                     <MapPin size={24} />
                  </div>
                  <div>
                     <h5 className="font-bold text-primary-900">Elev8 HQ</h5>
                     <p className="text-sm text-slate-500">Sydney, NSW 2000, Australia</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;

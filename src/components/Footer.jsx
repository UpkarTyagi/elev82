import { Link } from 'react-router-dom';
import { Rocket, Mail, MapPin, Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Rocket className="w-8 h-8 text-accent-gold" />
              <span className="text-3xl font-bold font-display tracking-tighter">
                Elev<span className="text-accent-gold">8.</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Unlocking Potential. Driving Infinite Growth.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-accent-gold hover:border-accent-gold transition-all group"
                >
                  <Icon className="w-5 h-5 group-hover:text-primary-900 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 font-display">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/services" className="hover:text-accent-gold transition-colors flex items-center group">Strategic Planning <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/services" className="hover:text-accent-gold transition-colors flex items-center group">Operational Optimization <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/services" className="hover:text-accent-gold transition-colors flex items-center group">Data Analytics <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link to="/services" className="hover:text-accent-gold transition-colors flex items-center group">Technology Integration <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-8 font-display">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-accent-gold transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-accent-gold transition-colors">Success Stories</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent-gold transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-accent-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-8 font-display">Contact Details</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex items-start space-x-3">
                <div className="p-2 rounded bg-slate-900">
                  <Mail className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Email Us</p>
                  <a href="mailto:elev8consulting@outlook.com.au" className="text-white hover:text-accent-gold transition-colors">elev8consulting@outlook.com.au</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="p-2 rounded bg-slate-900">
                  <MapPin className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Our Location</p>
                  <p className="text-white">Sydney, NSW 2000 Australia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © 2026 Elev8 Consulting Group. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-sm text-slate-500">
            <Link to="#" className="hover:text-white transition-colors">Social Media Links</Link>
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="text-sm text-slate-500 text-right">
            Sydney, NSW 2000, Australia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

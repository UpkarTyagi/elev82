import { motion } from 'framer-motion';

const SectionHeader = ({ subtitle, title, description, dark = false, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-block text-xs font-bold uppercase tracking-[0.3em] mb-4 ${
          dark ? 'text-accent-gold' : 'text-accent-gold'
        }`}
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl font-bold mb-6 ${
          dark ? 'text-white' : 'text-primary-900'
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`max-w-2xl mx-auto text-lg leading-relaxed ${
            dark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {description}
        </motion.p>
      )}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`h-1 mx-auto mt-8 bg-accent-gold rounded-full ${centered ? '' : 'ml-0'}`}
      />
    </div>
  );
};

export default SectionHeader;

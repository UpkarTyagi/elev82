import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Button = ({ children, className, variant = 'primary', size = 'md', ...props }) => {
  const variants = {
    primary: 'bg-primary-900 text-white hover:bg-primary-800 shadow-lg shadow-primary-900/20',
    secondary: 'bg-accent-gold text-primary-900 hover:bg-opacity-90 shadow-lg shadow-accent-gold/20',
    outline: 'border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white',
    ghost: 'text-primary-900 hover:bg-slate-100',
    white: 'bg-white text-primary-900 hover:bg-slate-50 shadow-xl',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg font-bold',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className={cn(
        'btn-premium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

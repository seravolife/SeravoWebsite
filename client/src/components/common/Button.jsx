import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-hover shadow-sm',
  secondary:
    'bg-white text-primary border border-primary hover:bg-medical-light',
  medical:
    'bg-medical text-white hover:bg-primary shadow-sm',
  success:
    'bg-success text-white hover:bg-green-hover shadow-sm',
  danger:
    'bg-danger text-white hover:bg-red-700 shadow-sm',
  outline:
    'bg-transparent text-text hover:text-primary border border-border hover:border-primary',
  ghost:
    'bg-transparent text-text hover:text-primary hover:bg-light-bg',
  white:
    'bg-white text-primary hover:bg-light-bg shadow-sm border border-border-light',
  'outline-white':
    'bg-transparent text-white border border-white/40 hover:bg-white hover:text-primary',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
  xl: 'px-10 py-4 text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 
    font-semibold rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]} ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={baseClasses} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          {...props}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;

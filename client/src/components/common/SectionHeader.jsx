import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations/variants';

const SectionHeader = ({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}
    >
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-wide uppercase ${
            light
              ? 'bg-white/15 text-white'
              : 'bg-medical-light text-primary border border-border-light'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-text-heading'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-gray-200' : 'text-text'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;

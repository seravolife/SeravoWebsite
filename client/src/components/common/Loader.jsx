import { motion } from 'framer-motion';

const Loader = ({ fullScreen = false, size = 'md', text = 'Loading...' }) => {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-14 h-14 border-4',
  };

  const spinner = (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        className={`${sizes[size]} border-light-gray border-t-primary rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      {text && <p className="text-sm text-text-muted font-medium">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-light-bg/80 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-20">{spinner}</div>
  );
};

export default Loader;

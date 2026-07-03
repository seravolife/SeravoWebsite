import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiPlay } from 'react-icons/hi';
import { COMPANY, STATS } from '@/constants';
import Button from '@/components/common/Button';
import { fadeInUp, fadeInRight, staggerContainer, staggerItem } from '@/animations/variants';
import orthoPlusBottle from '@/assets/images/ortho-plus-bottle.png';
import weightPlusBottle from '@/assets/images/weight-plus-bottle.png';
import heyMomBottle from '@/assets/images/hey-mom-bottle.png';

const heroImages = [orthoPlusBottle, weightPlusBottle, heyMomBottle];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-medical-light/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-border-light" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-border-light" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-border-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-light) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-light text-primary text-sm font-medium mb-6 border border-border-light">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Trusted by 10,000+ Healthcare Professionals
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading leading-[1.15] mb-6"
            >
              Where Science{' '}
              <span className="text-primary">Meets</span>{' '}
              <br />
              Integrity
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg text-text leading-relaxed max-w-xl mb-8"
            >
              Advancing healthcare through research-driven nutraceuticals, clinical nutrition,
              and pharmaceutical solutions. Built on a foundation of scientific excellence
              and uncompromising quality.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mb-12">
              <Button to="/products" variant="primary" size="lg" icon={HiArrowRight} iconPosition="right">
                Explore Products
              </Button>
              <Button to="/about" variant="secondary" size="lg" icon={HiPlay}>
                Our Story
              </Button>
            </motion.div>


          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Background glow circle */}
              <div className="absolute w-[460px] h-[460px] rounded-full bg-gradient-to-br from-primary/10 via-medical-light/40 to-primary/5 blur-sm" />
              
              {/* Decorative rings */}
              <div className="absolute w-[480px] h-[480px] rounded-full border border-primary/10 animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-primary/15" />

              {/* Product image */}
              <div className="relative z-10 w-[480px] h-[560px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={heroImages[currentImageIndex]} 
                    alt="Seravo Featured Product" 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute max-w-[420px] h-[460px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </AnimatePresence>
              </div>

              {/* Floating badge - Doctor Recommended */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 -right-2 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-2 border border-border-light z-20"
              >
                <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                  <span className="text-success text-lg">✓</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-text-heading">Doctor Recommended</div>
                  <div className="text-[10px] text-text-muted">Clinically Tested</div>
                </div>
              </motion.div>


            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40L60 35C120 30 240 20 360 25C480 30 600 50 720 55C840 60 960 50 1080 40C1200 30 1320 20 1380 15L1440 10V80H0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

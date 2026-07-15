import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { COMPANY } from '@/constants';
import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/common/Button';
import { fadeInLeft, staggerContainer, staggerItem } from '@/animations/variants';
import facilityImage from '@/assets/images/facility.webp';



const AboutPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border">
              {/* Facility Image */}
              <div className="aspect-[4/3] bg-light-bg rounded-3xl overflow-hidden group">
                <img src={facilityImage} alt="Seravo Manufacturing Facility" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
              </div>

              {/* Quality badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 bg-primary text-white rounded-2xl shadow-elevated px-6 py-4 flex flex-col items-center justify-center text-center"
              >
                <div className="text-2xl font-bold mb-1">
                  Premium
                </div>
                <div className="text-xs text-white/90 font-medium">Quality Assured</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={staggerItem}>
              <SectionHeader
                badge="About Seravo"
                title="Advancing Healthcare Through Scientific Innovation"
                subtitle="Seravo Life Sciences is an emerging leader in nutraceuticals, clinical nutrition, and pharmaceuticals — driven by research, powered by integrity."
                centered={false}
              />
            </motion.div>

            {/* Content */}
            <motion.div variants={staggerItem} className="space-y-4 mb-8">
              <p className="text-text leading-relaxed">
                At Seravo, we are committed to revolutionizing healthcare through cutting-edge research and unyielding quality standards. Our formulations are crafted with precision, ensuring that every product meets the highest global benchmarks.
              </p>
              <p className="text-text leading-relaxed">
                By blending science and innovation, we strive to empower healthcare professionals and improve patient outcomes across the globe.
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Button to="/about" variant="primary" size="lg" icon={HiArrowRight} iconPosition="right">
                Read Our Full Story
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

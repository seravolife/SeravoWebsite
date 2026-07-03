import { motion } from 'framer-motion';
import {
  HiShieldCheck,
  HiAcademicCap,
  HiUserGroup,
  HiSparkles,
  HiGlobe,
  HiSupport,
} from 'react-icons/hi';
import { WHY_CHOOSE } from '@/constants';
import SectionHeader from '@/components/common/SectionHeader';
import { staggerContainer, staggerItem } from '@/animations/variants';

const icons = [HiShieldCheck, HiAcademicCap, HiUserGroup, HiSparkles, HiGlobe, HiSupport];

const WhyChoose = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          badge="Why Seravo"
          title="Built on Trust. Driven by Science."
          subtitle="What sets Seravo apart is our unwavering commitment to quality, research, and the healthcare professionals we serve."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_CHOOSE.map((item, index) => {
            const Icon = icons[index] || HiSparkles;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group bg-white rounded-2xl p-6 shadow-card hover:bg-light-bg hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center mb-5 group-hover:bg-success group-hover:text-white transition-all duration-300 text-success border border-border-light group-hover:border-success">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;

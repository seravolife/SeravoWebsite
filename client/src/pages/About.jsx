import { motion } from 'framer-motion';
import { 
  HiOutlineLightBulb, 
  HiOutlineShieldCheck, 
  HiOutlineHeart, 
  HiOutlineGlobe, 
  HiOutlineBeaker, 
  HiOutlineBadgeCheck 
} from 'react-icons/hi';
import SEO from '@/components/common/SEO';
import SectionHeader from '@/components/common/SectionHeader';
import { CORE_VALUES, COMPANY } from '@/constants';
import { fadeInUp, staggerContainer, staggerItem } from '@/animations/variants';
import facilityImage from '@/assets/images/modern_lab.webp';

const iconMap = {
  microscope: HiOutlineBeaker,
  shield: HiOutlineShieldCheck,
  heart: HiOutlineHeart,
  lightbulb: HiOutlineLightBulb,
  award: HiOutlineBadgeCheck,
  globe: HiOutlineGlobe,
};

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-light-bg">
      <SEO
        title="About Us"
        canonical="/about"
        description="Learn about Seravo Life Sciences — our story, mission, core values, and commitment to advancing healthcare through evidence-based nutraceuticals and clinical nutrition since 2018."
        keywords="about Seravo Life Sciences, pharmaceutical company India, nutraceutical manufacturer, WHO-GMP certified, clinical nutrition company Pune"
      />
      
      {/* Header Section */}
      <div className="container-custom pt-8">
        <SectionHeader
          badge="About Seravo"
          title="Our Story & Vision"
          subtitle="Learn more about our journey, mission, and the core values that drive Seravo Life Sciences forward."
        />
      </div>

      {/* Story & Mission Section */}
      <section className="section-padding bg-white mt-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="relative rounded-3xl overflow-hidden shadow-elevated"
            >
              <div className="aspect-[4/3] bg-light-bg">
                <img 
                  src={facilityImage} 
                  alt="Seravo Life Sciences Facility" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={staggerItem}>
                <h2 className="text-3xl font-bold font-heading text-text-heading mb-4">
                  Pioneering Better Healthcare
                </h2>
                <p className="text-text leading-relaxed">
                  {COMPANY.description} Since our inception in {COMPANY.founded}, we have relentlessly pursued perfection in every formulation, ensuring that our products meet the highest global standards.
                </p>
              </motion.div>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <motion.div variants={staggerItem} className="bg-light-bg p-6 rounded-2xl border border-border-light">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-4">
                    <HiOutlineGlobe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-text-heading mb-2">Our Mission</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    To develop and deliver high-quality, research-backed nutritional and pharmaceutical products that significantly improve patient outcomes and quality of life.
                  </p>
                </motion.div>

                <motion.div variants={staggerItem} className="bg-light-bg p-6 rounded-2xl border border-border-light">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-medical mb-4">
                    <HiOutlineLightBulb className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-text-heading mb-2">Our Vision</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    To be the most trusted global leader in clinical nutrition and orthopedics, setting the benchmark for scientific integrity and uncompromising quality.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-light-bg">
        <div className="container-custom">
          <SectionHeader
            badge="Our DNA"
            title="Core Values"
            subtitle="The fundamental principles that guide every decision, formulation, and partnership at Seravo Life Sciences."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {CORE_VALUES.map((value, index) => {
              const Icon = iconMap[value.icon] || HiOutlineBadgeCheck;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-white p-8 rounded-3xl border border-border-light shadow-sm hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-medical-light text-primary flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-text-heading mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default About;

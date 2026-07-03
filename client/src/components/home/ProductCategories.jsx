import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '@/constants';
import SectionHeader from '@/components/common/SectionHeader';
import { staggerContainer, staggerItem, hoverElevate } from '@/animations/variants';

const categoryIcons = {
  nutraceuticals: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none"><rect x="8" y="4" width="16" height="24" rx="8" stroke="currentColor" strokeWidth="2"/><path d="M8 16h16" stroke="currentColor" strokeWidth="2"/><circle cx="14" cy="11" r="1.5" fill="currentColor"/><circle cx="18" cy="11" r="1.5" fill="currentColor"/></svg>
  ),
  'clinical-nutrition': (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="M16 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><rect x="6" y="20" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2"/></svg>
  ),
  orthopedic: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="M16 4v24M10 8c0 4 6 4 6 8s-6 4-6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M22 8c0 4-6 4-6 8s6 4 6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  gastro: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="M10 6c-2 4-4 10-2 16 1 3 4 6 8 6s7-3 8-6c2-6 0-12-2-16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M14 14c2 2 4 2 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  cardiac: (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="M16 28S4 20 4 13c0-4 3-7 6.5-7C13 6 15 7.5 16 9c1-1.5 3-3 5.5-3C25 6 28 9 28 13c0 7-12 15-12 15z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M8 16h4l2-4 4 8 2-4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  'general-wellness': (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2"/><path d="M16 10v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 4l1 2M20 4l-1 2M4 12l2 1M4 20l2-1M28 12l-2 1M28 20l-2-1M12 28l1-2M20 28l-1-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ),
};

import orthopedicCare from '@/assets/images/orthopedic_care.png';
import manufacturingPills from '@/assets/images/manufacturing_pills.png';
import clinicalIv from '@/assets/images/clinical_nutrition_iv.png';
import gastroCare from '@/assets/images/gastro_care_new.png';
import cardiacCare from '@/assets/images/cardiac_care_new.png';
import seniorHealth from '@/assets/images/senior_health.png';

const categoryImages = {
  nutraceuticals: manufacturingPills,
  'clinical-nutrition': clinicalIv,
  orthopedic: orthopedicCare,
  gastro: gastroCare,
  cardiac: cardiacCare,
  'general-wellness': seniorHealth,
};

const ProductCategories = () => {
  return (
    <section className="section-padding bg-light-bg">
      <div className="container-custom">
        <SectionHeader
          badge="Our Expertise"
          title="Therapeutic Categories"
          subtitle="Comprehensive healthcare solutions across multiple therapeutic segments, backed by clinical research and manufactured to the highest quality standards."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {PRODUCT_CATEGORIES.map((category) => {
            return (
              <motion.div key={category.id} variants={staggerItem}>
                <Link to={`/products?category=${category.id}`}>
                  <motion.div
                    whileHover={hoverElevate}
                    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/50 flex flex-col h-full"
                  >
                    {/* Image Header */}
                    <div className="h-48 overflow-hidden relative bg-gray-100">
                      <img 
                        src={categoryImages[category.id]} 
                        alt={category.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-medical-light text-primary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
                          {categoryIcons[category.id] || <span className="text-sm">{category.icon}</span>}
                        </div>
                        <h3 className="text-xl font-bold text-navy group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                        {category.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;

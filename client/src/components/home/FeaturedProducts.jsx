import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { FEATURED_PRODUCTS } from '@/constants';
import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/common/Button';
import { staggerContainer, staggerItem, hoverElevate } from '@/animations/variants';

const MotionLink = motion.create(Link);

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-light-bg">
      <div className="container-custom">
        <SectionHeader
          badge="Featured Products"
          title="Our Flagship Formulations"
          subtitle="Explore our most recommended products — trusted by healthcare professionals and backed by clinical evidence."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURED_PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={staggerItem}>
              <MotionLink
                to={`/products/${product.slug}`}
                whileHover={hoverElevate}
                className="group bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:border-primary transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer block"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-border-light">
                  <div className="absolute inset-0 flex items-center justify-center p-0">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-20 h-20 rounded-2xl bg-light-bg flex items-center justify-center shadow-sm border border-border-light">
                        <span className="text-3xl text-medical">💊</span>
                      </div>
                    )}
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-medical text-white text-xs font-medium shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-semibold text-text-heading mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-text leading-relaxed mb-4 flex-1">
                    {product.shortDescription}
                  </p>

                  <span className="inline-flex items-center justify-center gap-2 w-full mt-auto font-semibold rounded-xl px-4 py-2 text-sm bg-primary text-white group-hover:bg-primary-hover transition-all duration-300">
                    View Details
                  </span>
                </div>
              </MotionLink>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Button to="/products" variant="outline" size="lg" icon={HiArrowRight} iconPosition="right">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

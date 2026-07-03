import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import { FEATURED_PRODUCTS } from '@/constants';
import { fadeInUp, staggerContainer, staggerItem, hoverElevate } from '@/animations/variants';

const MotionLink = motion.create(Link);

const Products = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO
        title="Products"
        description="Explore Seravo Life Sciences' range of scientifically formulated nutraceuticals, clinical nutrition, and healthcare products."
      />

      {/* Hero Banner */}
      <section className="relative bg-navy overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-medical/15 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={staggerItem}
              className="inline-block bg-white/10 text-white/90 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10 backdrop-blur-sm"
            >
              Our Products
            </motion.span>

            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight mb-6 leading-[1.1]"
            >
              Science-Backed{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical to-[#7DD3FC]">
                Nutrition
              </span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              Explore our range of clinically formulated products — trusted by
              healthcare professionals and backed by rigorous research.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-light-bg">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {FEATURED_PRODUCTS.map((product) => (
              <motion.div key={product.id} variants={staggerItem}>
                <MotionLink
                  to={`/products/${product.slug}`}
                  whileHover={hoverElevate}
                  className="group bg-white rounded-3xl border border-border-light shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-500 overflow-hidden h-full flex flex-col cursor-pointer block"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                          style={{ filter: 'brightness(1.02) contrast(1.05)' }}
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-3xl bg-light-bg flex items-center justify-center shadow-sm border border-border-light">
                          <span className="text-4xl text-medical">💊</span>
                        </div>
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-navy/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>

                    {/* Flavor Badge */}
                    {product.flavor && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-block px-3 py-1.5 rounded-full bg-white/90 text-text-muted text-xs font-semibold backdrop-blur-sm border border-border-light">
                          {product.flavor}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-text-heading mb-2 group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-5 flex-1">
                      {product.shortDescription}
                    </p>

                    {/* Benefits Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.benefits.slice(0, 3).map((benefit, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-medical-light text-primary text-xs font-semibold"
                        >
                          <HiCheckCircle className="w-3.5 h-3.5" />
                          {benefit}
                        </span>
                      ))}
                    </div>

                    {/* Net Weight + CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border-light">
                      {product.netWeight && (
                        <span className="text-sm font-bold text-text-muted">
                          Net Wt: {product.netWeight}
                        </span>
                      )}
                      <span className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-4 py-2 text-sm bg-primary text-white group-hover:bg-primary-hover transition-all duration-300">
                        View Details
                        <HiArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </MotionLink>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-border-light">
        <div className="container-custom text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-heading mb-4">
              To purchase the product contact us
            </h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Connect with us for product inquiries, bulk orders, or to become
              an authorized distributor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;

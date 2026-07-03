import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle, HiArrowLeft } from 'react-icons/hi';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  fadeInLeft,
  fadeInRight,
} from '@/animations/variants';
import { PRODUCT_DETAILS } from '@/constants/products';

const ProductDetail = () => {
  const { slug } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);

  const product = PRODUCT_DETAILS[slug];

  // Redirect to products page if product not found
  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO
        title={`${product.name} | Products`}
        description={product.description}
      />

      {/* Back Link */}
      <div className="container-custom pt-6">
        <Button to="/products" variant="ghost" size="sm" icon={HiArrowLeft}>
          All Products
        </Button>
      </div>

      {/* 1. Hero Section */}
      <section className="relative bg-white overflow-hidden py-12 md:py-20 border-b border-border-light">
        {/* Background Accents */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-medical/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left text-navy order-2 lg:order-1"
            >
              <motion.div
                variants={staggerItem}
                className="inline-flex items-center gap-3 mb-6 flex-wrap"
              >
                <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  {product.badge}
                </span>
                <span className="bg-light-bg text-text-muted px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-border-light">
                  {product.flavor} Flavor
                </span>
              </motion.div>

              <motion.h1
                variants={staggerItem}
                className="text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight mb-6 leading-[1.1]"
              >
                {product.name.split(' ').slice(0, 1)}{' '}
                <br className="hidden md:block" />
                <span
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${product.gradientFrom} ${product.gradientTo}`}
                >
                  {product.name.split(' ').slice(1).join(' ')}
                </span>
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="text-lg md:text-xl font-medium text-text-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                {product.tagline}. {product.description}
              </motion.p>

              <motion.div
                variants={staggerItem}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button to="/contact" variant="primary" size="lg">
                  Inquire Now
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image Carousel */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="relative flex flex-col items-center justify-center order-1 lg:order-2"
            >
              {/* Main HD Image Container */}
              <div className="relative w-full max-w-[550px] bg-white rounded-[3rem] p-6 md:p-10 shadow-sm border border-border-light flex items-center justify-center aspect-square md:aspect-auto md:h-[500px]">
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-6 -right-4 md:top-4 md:-right-8 bg-white text-navy p-3 md:p-4 rounded-2xl shadow-elevated z-20 flex flex-col items-center border border-border-light"
                >
                  <span className="font-black text-lg md:text-xl text-primary leading-none">
                    {product.netWeight}
                  </span>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider mt-1">
                    Net Wt.
                  </span>
                </motion.div>

                {/* Main Carousel Image */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={product.carouselImages[activeIndex].src}
                    alt={product.carouselImages[activeIndex].alt}
                    className="w-full h-full max-h-[450px] object-contain relative z-10"
                    style={{ filter: 'brightness(1.02) contrast(1.05)' }}
                  />
                </AnimatePresence>
              </div>

              {/* Thumbnails (only if more than 1 image) */}
              {product.carouselImages.length > 1 && (
                <div className="flex gap-4 mt-6">
                  {product.carouselImages.map((image, idx) => (
                    <button
                      key={image.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-white ${
                        activeIndex === idx
                          ? 'border-primary shadow-md scale-110'
                          : 'border-border-light hover:border-medical/50 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-contain p-2"
                        style={{ filter: 'brightness(1.02) contrast(1.05)' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Composition Section */}
      <section className="py-20 bg-light-bg">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-heading mb-4">
              Scientifically Driven Composition
            </h2>
            <p className="text-text-muted text-lg">
              Every scoop is clinically designed with premium ingredients to
              maximize absorption and effectiveness.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-3 gap-8"
          >
            {product.composition.map((item, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="bg-white p-8 rounded-3xl shadow-sm border border-border-light text-center"
              >
                <div className="w-16 h-16 mx-auto bg-medical-light text-primary rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">{item.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Key Benefits Section */}
      <section className="py-20 bg-white border-t border-border-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-heading mb-6">
                Why Choose{' '}
                <span className="text-primary">{product.whyTitle}?</span>
              </h2>
              <p className="text-lg text-text-muted mb-10 leading-relaxed">
                {product.whyDescription}
              </p>

              <div className="space-y-6">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-medical-light text-primary flex items-center justify-center">
                      <benefit.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-navy mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-text-muted">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-navy rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-elevated"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[80px]" />

              <h3 className="text-2xl font-bold font-heading mb-8 relative z-10">
                Special Features
              </h3>

              <div className="space-y-6 relative z-10">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm"
                  >
                    <HiCheckCircle className="w-6 h-6 text-medical flex-shrink-0" />
                    <span className="font-bold text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/20 relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">
                    Serving Size
                  </p>
                  <p className="text-2xl font-bold">{product.servingSize}</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">
                    Net Weight
                  </p>
                  <p className="text-2xl font-bold">{product.netWeight}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

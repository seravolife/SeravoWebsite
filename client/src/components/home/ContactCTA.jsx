import { motion } from 'framer-motion';
import { HiOutlineMail, HiArrowRight } from 'react-icons/hi';
import Button from '@/components/common/Button';
import { fadeInUp } from '@/animations/variants';

const ContactCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-section-bg">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-medical/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-primary via-navy to-navy rounded-[3rem] p-10 md:p-16 text-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] relative overflow-hidden group border border-white/10"
        >
          {/* Glassmorphic overlay for a sleek look */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl pointer-events-none" />
          
          {/* Animated decorative bloobs */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-medical/30 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-1000 ease-in-out delay-150" />

          {/* Grid pattern subtle overlay */}
          <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay" style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />

          <div className="relative z-10">
            <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 mx-auto flex items-center justify-center mb-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] group-hover:-translate-y-2 transition-transform duration-500">
              <HiOutlineMail className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Partner With <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-light to-white">
                Seravo Life Sciences
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Whether you are a healthcare professional or looking for high-quality pharmaceutical products, our team is ready to assist you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button to="/contact" variant="white" size="xl" icon={HiArrowRight} iconPosition="right" className="shadow-xl hover:shadow-2xl w-full sm:w-auto hover:-translate-y-1">
                Contact Us Today
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;

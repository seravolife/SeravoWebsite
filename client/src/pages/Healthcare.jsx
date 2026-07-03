import { motion } from 'framer-motion';
import { HiOutlineDocumentText, HiOutlineAcademicCap, HiArrowRight } from 'react-icons/hi';
import SEO from '@/components/common/SEO';
import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/common/Button';
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight } from '@/animations/variants';
import healthcareMeetingImage from '@/assets/images/healthcare_meeting.png';
import clinicalDataImg from '@/assets/images/clinical_data.png';
import medicalEduImg from '@/assets/images/medical_education.png';

const resources = [
  {
    title: 'Clinical Trial Data',
    desc: 'Access comprehensive whitepapers and double-blind study results for all our flagship formulations. Our dedication to evidence-based medicine means you get complete transparency into patient outcomes, bioavailability metrics, and safety profiles.',
    icon: HiOutlineDocumentText,
    image: clinicalDataImg
  },
  {
    title: 'CME & Education',
    desc: 'Participate in Continuing Medical Education seminars hosted by leading orthopedic and cardiac specialists. We regularly sponsor workshops, webinars, and symposiums to keep our network updated on the latest therapeutic advancements.',
    icon: HiOutlineAcademicCap,
    image: medicalEduImg
  }
];

const Healthcare = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-light-bg">
      <SEO title="Healthcare Professionals | Seravo" />
      
      {/* Hero Section */}
      <section className="container-custom mb-20">
        <div className="bg-navy rounded-[3rem] overflow-hidden flex flex-col lg:flex-row relative shadow-elevated">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />

          <motion.div 
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10"
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Dedicated to Practitioners</span>
            <h1 className="text-4xl md:text-5xl font-black font-heading text-white leading-tight mb-6">
              Empowering Your Clinical Practice.
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              We collaborate with healthcare professionals to deliver evidence-based, highly bioavailable therapies that drive real patient outcomes. Join our network of over 10,000 trusted practitioners.
            </p>

          </motion.div>

          <motion.div 
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 relative min-h-[400px] lg:min-h-full"
          >
            <img 
              src={healthcareMeetingImage} 
              alt="Doctors Discussing Clinical Data" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/50 to-transparent lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent lg:hidden block" />
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="container-custom">
        <SectionHeader
          badge="HCP Resources"
          title="Clinical Support Tools"
          subtitle="Everything you need to make informed prescribing decisions and support patient recovery."
          centered={true}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-12"
        >
          {resources.map((resource, idx) => (
            <motion.div key={idx} variants={staggerItem} className="bg-white rounded-[2rem] overflow-hidden border border-border-light shadow-sm hover:shadow-card-hover hover:border-primary/50 transition-all group flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img src={resource.image} alt={resource.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm text-primary rounded-xl flex items-center justify-center shadow-sm">
                  <resource.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-navy mb-4">{resource.title}</h3>
                <p className="text-text-muted leading-relaxed flex-1">{resource.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Healthcare;

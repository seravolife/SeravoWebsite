import { motion } from 'framer-motion';
import {
  HiOutlineBeaker,
  HiOutlineShieldCheck,
  HiOutlineClipboardCheck,
  HiOutlineSearchCircle,
  HiCheckCircle,
  HiArrowRight,
} from 'react-icons/hi';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  fadeInLeft,
  fadeInRight,
} from '@/animations/variants';
import microscopeLab from '@/assets/images/microscope-lab.webp';
import facilityImage from '@/assets/images/facility.webp';
import researchScientist from '@/assets/images/research_scientist.webp';

const pillars = [
  {
    title: 'Evidence-Based Formulation',
    desc: 'Every product begins with rigorous scientific literature review and clinical data analysis to ensure maximum efficacy.',
    icon: HiOutlineSearchCircle,
    accent: 'from-primary to-medical',
  },
  {
    title: 'Stringent Raw Material Sourcing',
    desc: 'We partner exclusively with certified global suppliers, testing all raw materials for purity, potency, and safety.',
    icon: HiOutlineBeaker,
    accent: 'from-medical to-[#7DD3FC]',
  },
  {
    title: 'Advanced Quality Control',
    desc: 'State-of-the-art laboratories conduct multiple rounds of testing during and after the manufacturing process.',
    icon: HiOutlineShieldCheck,
    accent: 'from-[#34D399] to-[#06B6D4]',
  },
  {
    title: 'Global Compliance',
    desc: 'WHO-GMP certified facilities, adhering strictly to ISO 9001:2015 and FSSAI standards across every batch.',
    icon: HiOutlineClipboardCheck,
    accent: 'from-[#A78BFA] to-primary',
  },
];

const processes = [
  {
    step: '01',
    title: 'Clinical Research',
    desc: 'Identifying nutritional gaps and researching optimal active ingredients through published clinical evidence.',
  },
  {
    step: '02',
    title: 'Prototype Development',
    desc: 'Creating trial formulations focusing on bioavailability, absorption rates, and ingredient synergy.',
  },
  {
    step: '03',
    title: 'Stability Testing',
    desc: 'Subjecting formulations to accelerated environmental stress tests to guarantee shelf-life and safety.',
  },
  {
    step: '04',
    title: 'Commercial Production',
    desc: 'Scaling up in highly controlled, automated clean-room environments with batch-level traceability.',
  },
];

const certifications = [
  { name: 'WHO-GMP', desc: 'World Health Organization — Good Manufacturing Practices' },
  { name: 'ISO 9001:2015', desc: 'International Quality Management Standard' },
  { name: 'FSSAI', desc: 'Food Safety and Standards Authority of India' },
  { name: 'GLP', desc: 'Good Laboratory Practices Compliant' },
  { name: 'NABL', desc: 'National Accreditation Board for Testing' },
];

const facilityFeatures = [
  'Class 100,000 Clean Room Environments',
  'Fully Automated Production Lines',
  'In-house Microbiological Testing Lab',
  'HVAC & Environmental Monitoring Systems',
  'Multi-stage Quality Check Points',
  'Batch-level Traceability & Documentation',
];

const Research = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO
        title="Research & Quality"
        canonical="/research"
        description="Discover Seravo Life Sciences' evidence-based R&D, WHO-GMP certified manufacturing, and multi-stage quality control. ISO 9001:2015, FSSAI & NABL compliant."
        keywords="pharmaceutical research India, WHO-GMP manufacturing, nutraceutical R&D, FSSAI certified, ISO 9001 pharma, clinical research Pune, GMP nutraceuticals"
      />

      {/* ── Hero Banner ── */}
      <section className="relative bg-navy overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-medical/15 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                variants={staggerItem}
                className="inline-block bg-white/10 text-white/90 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10 backdrop-blur-sm"
              >
                Scientific Excellence
              </motion.span>

              <motion.h1
                variants={staggerItem}
                className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight mb-6 leading-[1.1]"
              >
                Research &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical to-[#7DD3FC]">
                  Quality
                </span>
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-8"
              >
                Discover our unwavering commitment to evidence-based medicine,
                innovative formulations, and the most stringent manufacturing
                standards in the industry.
              </motion.p>

              <motion.div
                variants={staggerItem}
                className="flex flex-wrap gap-3"
              >
                {['WHO-GMP', 'ISO 9001:2015', 'FSSAI', 'GLP', 'NABL'].map(
                  (cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 text-white/90 text-xs font-semibold border border-white/10 backdrop-blur-sm"
                    >
                      <HiCheckCircle className="w-3.5 h-3.5 text-medical" />
                      {cert}
                    </span>
                  )
                )}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="hidden lg:block"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-elevated">
                <div className="aspect-[4/3] relative">
                  <img
                    src={researchScientist}
                    alt="Seravo Life Sciences Research"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Four Pillars of Quality ── */}
      <section className="py-12 md:py-16 bg-light-bg">
        <div className="container-custom">
          {/* Section Header — full width, centered */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-medical-light text-primary px-4 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-wide uppercase border border-border-light">
              Quality Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-heading mb-4">
              The Four Pillars of Quality
            </h2>
            <p className="text-text-muted leading-relaxed max-w-2xl mx-auto">
              At Seravo Life Sciences, quality is not a department—it is our
              culture. We have established a comprehensive Quality Management
              System (QMS) that dictates every action from conception to
              delivery.
            </p>
          </motion.div>

          {/* Content — Image + Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {/* Left Image */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-elevated h-full"
            >
              <div className="bg-navy relative h-full min-h-[400px]">
                <img
                  src={microscopeLab}
                  alt="High-tech Pharmaceutical Research"
                  className="w-full h-full object-cover mix-blend-lighten opacity-90 hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white text-2xl font-bold font-heading mb-2">
                    Uncompromising Standards
                  </h3>
                  <p className="text-white/80 text-sm">
                    Our laboratories are equipped with cutting-edge analytical
                    instruments to guarantee absolute precision.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right — 2x2 Pillar Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-5 h-full content-center"
            >
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="group bg-white p-6 rounded-2xl border border-border-light hover:border-primary/30 hover:shadow-card transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${pillar.accent} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <pillar.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-navy mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Innovation Pipeline ── */}
      <section className="py-12 md:py-16 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-medical/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/3 pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* Section Header — manually done for light theme */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-white/10 text-white/90 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10 backdrop-blur-sm">
              Innovation Pipeline
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-4">
              From Lab to Life
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              A transparent look into the rigorous multi-stage process that
              transforms scientific theory into clinical reality.
            </p>
          </motion.div>

          {/* Pipeline Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5"
          >
            {processes.map((process, idx) => (
              <motion.div key={idx} variants={staggerItem} className="relative">
                {/* Connector Line */}
                {idx !== processes.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-medical/50 to-transparent z-0" />
                )}

                <div className="group bg-white/[0.07] border border-white/[0.12] rounded-3xl p-8 relative z-10 backdrop-blur-sm hover:bg-white/[0.12] transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-medical to-[#7DD3FC] mb-5 leading-none">
                    {process.step}
                  </div>

                  {/* Arrow indicator */}
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-medical/20 transition-colors">
                    <HiArrowRight className="w-5 h-5 text-medical" />
                  </div>

                  <h4 className="text-xl font-bold font-heading text-white mb-3">
                    {process.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {process.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Certifications Strip ── */}
      <section className="py-10 bg-white border-y border-border-light">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="text-center p-5 rounded-2xl bg-light-bg border border-border-light hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center mb-3 border border-border-light">
                  <HiOutlineShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-navy text-sm mb-1">
                  {cert.name}
                </h4>
                <p className="text-xs text-text-muted leading-snug">
                  {cert.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Manufacturing Facility ── */}
      <section className="py-12 md:py-16 bg-light-bg">
        <div className="container-custom">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-8 md:p-14 shadow-card border border-border-light"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <span className="inline-block bg-medical-light text-primary px-4 py-1.5 rounded-full text-xs font-semibold mb-5 tracking-wide uppercase border border-border-light">
                  Our Facility
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-4">
                  World-Class Manufacturing
                </h2>
                <p className="text-text-muted leading-relaxed mb-8">
                  Our products are brought to life in state-of-the-art
                  facilities that adhere to the highest global standards. The
                  environment is heavily controlled to ensure zero contamination
                  and absolute consistency across every batch we produce.
                </p>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                  {facilityFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <HiCheckCircle className="w-5 h-5 text-medical flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-sm text-text">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button to="/contact" variant="primary" size="lg">
                    Request Facility Tour
                  </Button>
                </div>
              </div>

              {/* Facility Image */}
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden aspect-[4/3] relative">
                <img
                  src={facilityImage}
                  alt="Seravo Manufacturing Facility"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Research;

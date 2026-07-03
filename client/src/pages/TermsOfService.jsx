import { motion } from 'framer-motion';
import { COMPANY } from '@/constants';
import SectionHeader from '@/components/common/SectionHeader';
import { staggerContainer, fadeInUp } from '@/animations/variants';

const TermsOfService = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-bg-light">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          badge="Legal"
          title="Terms of Service"
          align="left"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-12 space-y-8 text-text bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border-light"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
              In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, {COMPANY.name} and/or its licensors own all the intellectual property rights and materials contained in this Website.
              You are granted limited license only for purposes of viewing the material contained on this Website.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">3. Restrictions</h2>
            <p>
              You are specifically restricted from all of the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Publishing any Website material in any other media.</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
              <li>Publicly performing and/or showing any Website material.</li>
              <li>Using this Website in any way that is or may be damaging to this Website.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">4. Limitation of Liability</h2>
            <p>
              In no event shall {COMPANY.name}, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;

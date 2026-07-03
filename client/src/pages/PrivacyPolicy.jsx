import { motion } from 'framer-motion';
import { COMPANY } from '@/constants';
import SectionHeader from '@/components/common/SectionHeader';
import { staggerContainer, fadeInUp } from '@/animations/variants';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-bg-light">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          badge="Legal"
          title="Privacy Policy"
          align="left"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-12 space-y-8 text-text bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border-light"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">1. Introduction</h2>
            <p>
              At {COMPANY.name}, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website 
              and tell you about your privacy rights.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">2. The Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data includes first name, last name, username or similar identifier.</li>
              <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
              <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">4. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br />
              <strong>Email:</strong> {COMPANY.email}
              <br />
              <strong>Phone:</strong> {COMPANY.phone}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

import { motion } from 'framer-motion';
import { COMPANY } from '@/constants';
import SectionHeader from '@/components/common/SectionHeader';
import { staggerContainer, fadeInUp } from '@/animations/variants';

const CookiePolicy = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-bg-light">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          badge="Legal"
          title="Cookie Policy"
          align="left"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-12 space-y-8 text-text bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border-light"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">1. What Are Cookies</h2>
            <p>
              As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. 
              This page describes what information they gather, how we use it and why we sometimes need to store these cookies.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">2. How We Use Cookies</h2>
            <p>
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Site Preferences Cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it.</li>
              <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">3. Disabling Cookies</h2>
            <p>
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). 
              Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-navy">4. More Information</h2>
            <p>
              Hopefully, that has clarified things for you. If there is something that you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
              <br /><br />
              For more information, contact us at {COMPANY.email}.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import toast from 'react-hot-toast';
import SEO from '@/components/common/SEO';
import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/common/Button';
import { fadeInLeft, fadeInRight } from '@/animations/variants';
import facilityImage from '@/assets/images/facility.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });
      
      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          inquiryType: 'General Inquiry',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-light-bg">
      <SEO title="Contact Us | Seravo" />
      
      <div className="container-custom">
        <SectionHeader
          badge="Get in Touch"
          title="Contact Seravo Life Sciences"
          subtitle="Our dedicated team is ready to assist you with product inquiries, partnership opportunities, and medical information."
          centered={true}
        />

        <div className="mt-12 bg-white rounded-[3rem] shadow-card border border-border-light overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Details Side */}
          <motion.div 
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            className="lg:w-2/5 bg-navy text-white p-10 md:p-16 relative overflow-hidden"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img src={facilityImage} alt="Facility" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-navy/80" />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-3xl font-bold font-heading text-white mb-8">Corporate Office</h3>
              
              <div className="space-y-8 flex-1 text-white">
                <div className="flex items-start gap-4">
                  <HiOutlineLocationMarker className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Headquarters</h4>
                    <p className="text-white/70 leading-relaxed">
                      Seravo Life Sciences Pvt. Ltd.<br />
                      Plot No. 42, Pharma City,<br />
                      Pune, Maharashtra - 411001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <HiOutlinePhone className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Phone</h4>
                    <p className="text-white/70">
                      +91 93599 61811<br />
                      <span className="text-sm">Mon-Fri, 9:00 AM - 6:00 PM</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <HiOutlineMail className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Email</h4>
                    <p className="text-white/70">
                      seravolifesciences@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="lg:w-3/5 p-10 md:p-16"
          >
            <h3 className="text-2xl font-bold font-heading text-navy mb-2">Send us a Message</h3>
            <p className="text-text-muted mb-8">Fill out the form below and we will get back to you promptly.</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Rahul" className="w-full px-4 py-3 rounded-xl border border-border bg-light-bg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Sharma" className="w-full px-4 py-3 rounded-xl border border-border bg-light-bg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="rahul@example.com" className="w-full px-4 py-3 rounded-xl border border-border bg-light-bg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-border bg-light-bg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">Inquiry Type</label>
                <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-light-bg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Product Information">Product Information</option>
                  <option value="Distribution / Partnership">Distribution / Partnership</option>
                  <option value="Medical Affairs">Medical Affairs</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-border bg-light-bg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl transition-all disabled:opacity-70">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

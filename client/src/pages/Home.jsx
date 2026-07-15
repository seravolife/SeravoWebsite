import SEO from '@/components/common/SEO';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import ProductCategories from '@/components/home/ProductCategories';
import WhyChoose from '@/components/home/WhyChoose';


const Home = () => {
  return (
    <>
      <SEO
        canonical="/"
        description="Seravo Life Sciences Pvt. Ltd. — Leading manufacturer of nutraceuticals, clinical nutrition & pharmaceutical products in India. WHO-GMP & FSSAI certified. Trusted by 10,000+ doctors."
        keywords="Seravo Life Sciences, nutraceuticals manufacturer India, clinical nutrition, orthopedic supplement, pregnancy nutrition, WHO-GMP certified pharma, Pune pharmaceutical company, Seravo Ortho Plus"
      />
      <HeroSection />
      <AboutPreview />
      <ProductCategories />
      <WhyChoose />

    </>
  );
};

export default Home;

import SEO from '@/components/common/SEO';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import ProductCategories from '@/components/home/ProductCategories';
import WhyChoose from '@/components/home/WhyChoose';


const Home = () => {
  return (
    <>
      <SEO />
      <HeroSection />
      <AboutPreview />
      <ProductCategories />
      <WhyChoose />

    </>
  );
};

export default Home;

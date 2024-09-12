import Slider from '@/components/shared/Slider';
import Services from '@/components/shared/Services';
import Testimonials from '@/components/shared/Testimonials';
import BusinessTransform from '@/components/shared/BusinessTransform';
import CompaniesThrive from '@/components/shared/CompaniesThrive';
import Certifications from '@/components/shared/Certifications';
import IndustriesweServe from '@/components/shared/IndustriesweServe';

const Home = () => {
  return (
    <main>
      <Slider id="home" />
      <Certifications />
      <IndustriesweServe id="industries" />
      <Services id="services" />
      <Testimonials id="why-tags" />
      <CompaniesThrive id="case-studies" />
      <BusinessTransform id="resources" />
    </main>
  );
};

export default Home;

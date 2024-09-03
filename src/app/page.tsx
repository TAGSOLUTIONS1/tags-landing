import Image from "next/image";
import Navbar from '@/components/shared/Navbar'
import Slider from "@/components/shared/Slider";
import Services from "@/components/shared/Services";
import Testimonials from "@/components/shared/Testimonials";
import BusinessTransform from '@/components//shared/BusinessTransform'
import Footer from "@/components/ui/Footer";
import About from "@/components/shared/About";
import CompaniesThrive from "@/components/shared/CompaniesThrive";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Slider id="home" />
      <Services id="services" />
      <Testimonials id="why-tags" />
      <CompaniesThrive id="case-studies" />
      <BusinessTransform id="resources" />
      <About id="about-us" />
    </main>
  );
}

export default Home;


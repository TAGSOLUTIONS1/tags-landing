import Image from "next/image";
import Navbar from '@/components/shared/Navbar'
import Slider from "@/components/shared/Slider";
import Services from "@/components/shared/Services";
import Testimonials from "@/components/shared/Testimonials";
import BusinessTransform from '@/components//shared/BusinessTransform'
import Footer from "@/components/ui/Footer";
import FooterSection from "@/components/shared/FooterSection";
import CompaniesThrive from "@/components/shared/CompaniesThrive";
const Home=()=>{
  return (
    <main>
     <Navbar></Navbar>
     <Slider></Slider>
     <Services></Services>
     <Testimonials></Testimonials>
     <CompaniesThrive></CompaniesThrive>
     <BusinessTransform></BusinessTransform>
     <FooterSection></FooterSection>
     <Footer></Footer>
    </main>
  );
}

export default Home;

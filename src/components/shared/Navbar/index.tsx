import Image from "next/image";
import TagsLogo from '../../../../public/icons//TagsLogo.png'
import Button from "@/components/ui/Button";
const Navbar:React.FC=()=>{
  return (
    <>
      <nav className="bg-light-white shadow-md">
        <div className="container mx-auto px-8">
          <div className="hidden md:flex justify-between items-center gap-[10px]">
            <div className="flex items-center gap-[5px]">
              <Image src={TagsLogo} alt="Logo" width={120} height={40} />

              <a href="#" className="items-center text-dark-secondary px-5 py-4 gap-[10px]">
                Home
              </a>
              <a href="#" className="items-center text-dark-secondary px-5 py-4 gap-[10px]">
                Services
              </a>
              <a href="#" className="items-center text-dark-secondary px-5 py-4 gap-[10px]">
                Why Tags
              </a>
              <a href="#" className="items-center text-dark-secondary px-5 py-4 gap-[10px]">
                Case Studies
              </a>
              <a href="#" className="items-center text-dark-secondary px-5 py-4 gap-[10px]">
                Resources
              </a>
              <a href="#" className="items-center text-dark-secondary px-5 py-4 gap-[10px]">
                About Us
              </a>
            </div>
            <Button title="Contact Us"></Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
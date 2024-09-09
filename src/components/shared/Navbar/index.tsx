import Image from 'next/image';
import Button from '@/components/ui/Button';
import Navbutton from '@/components/ui/Navbutton';
const Navbar: React.FC = () => {
  return (
    <>
      <nav className=" bg-light-white shadow-md">
        <div className="container px-36">
          <div className="flex justify-between md:flex w-full max-w-[1152px] items-center gap-[10px]">
            <div className="flex items-center">
              <Image
                src="/logo/tagslogo.png"
                alt="Logo"
                width={120}
                height={40}
              />
              <Navbutton title="Home"></Navbutton>
              <Navbutton title="Services"></Navbutton>
              <Navbutton title="Why Tags"></Navbutton>
              <Navbutton title="Case Studies"></Navbutton>
              <div className="flex items-center w-[136px] h-[51px] ">
                <Navbutton title="Resources"></Navbutton>
                <svg
                  width="14"
                  height="7"
                  viewBox="0 0 14 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4286 0.928675L8.20954 5.40215C7.76015 5.78734 7.09703 5.78734 6.64764 5.40215L1.42859 0.928676"
                    stroke="#4F4A45"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <Navbutton title="About Us"></Navbutton>
            </div>
            <Button title="Contact Us"></Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

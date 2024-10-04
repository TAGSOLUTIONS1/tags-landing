import Image from 'next/image';
import Button from '@/components/ui/Button';
import Navbutton from '@/components/ui/Navbutton';
import Link from 'next/link';
const Navbar: React.FC = () => {
  return (
    <nav className="bg-light-white shadow-md h-[80px] flex justify-center items-center w-full">
      <div className="container w-full mx-14 md:mt-0 lg:mx-0 xl:px-36 lg:ml-16 xl:ml-0">
        <div className="flex justify-between items-center w-full gap-4">
          <div className="flex items-center gap-[5px]">
            <Link href="/">
              <Image
                src="/logo/tagslogo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-auto"
              />
            </Link>

            <div className="hidden lg:flex">
              <Navbutton title="Home" href="/" />
              <Navbutton title="Services" href="/#services" />
              <Navbutton title="Why Tags" href="/#why-tags" />
              <Navbutton title="Case Studies" href="/case-studies" />
              <Navbutton title="Industries" href="/#industries" />
              {/* <div className="flex items-center">
                <Navbutton title="Resources" href="/#resources" />
                <svg
                  width="14"
                  height="7"
                  viewBox="0 0 14 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M13.4286 0.928675L8.20954 5.40215C7.76015 5.78734 7.09703 5.78734 6.64764 5.40215L1.42859 0.928676"
                    stroke="#4F4A45"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                  />
                </svg>
              </div> */}
              <Navbutton title="About Us" href="/about-us" />
            </div>
          </div>
          <div className="flex items-center h-[51px]">
            <Link href={'/#about-us'}>
              <div className="hidden lg:block">
                <Button title="Contact Us" />
              </div>
            </Link>
          </div>
        </div>

        {/* <div className="flex md:hidden justify-center items-center mt-2">
          <Navbutton title="Menu" href="home" />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;

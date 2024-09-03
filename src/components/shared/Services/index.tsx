import Image from "next/image";
import TagsLogo from '@/components/icons/TagsLogo.png'
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import CardInclusive from '@/components/shared/CardInclusive'
import CardPic from '../../../../public/icons/CardPic.jpg'
const Services:React.FC =() => {
  return (
    <>
    <div className="w-full mt-10 p-[50px_10px_60px_10px] gap-[10px] bg-black">
        <div className="gap-[60px] mx-24">
                <div className="mt-10 text-center">
            <Heading title="The Services We Offer" color="orange-primary"></Heading>
            </div> 
            <div className="flex flex-col lg:flex-row justify-between mt-10">
                <div className="mt-40">
                <div className="mt-2"> <Heading title="___  DATA AND AI" color="orange-primary"></Heading></div>
                <div className=" mt-2 ml-16"><Heading title="Enterprise Softwares" color="white"></Heading></div>
                <div className=" mt-2 ml-16"><Heading title="Cloud Enginnering" color="white"></Heading></div>
                </div>
                <div className="mt-1">
                    <CardInclusive description={"Unlock the power of your data with advanced AI solutions. We transform raw data into actionable insights, helping your business make smarter decisions and stay ahead of the competition."}
                              buttoncontent={"Learn More"}
                              image={CardPic}                  
                    ></CardInclusive>
                </div>
            </div>
        </div>
        </div>

    </>
  );
}

export default Services;
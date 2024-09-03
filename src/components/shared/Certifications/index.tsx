import React from "react";
import google from '../../../../public/Logo/google.png'
import openai from '../../../../public/Logo/openAI.png'
import microsoft from '../../../../public/Logo/microsoft.png'
import linkedin from '../../../../public/Logo/linkedin.png'
import hubspot  from '../../../../public/Logo/hubspot.png'
import meta from '../../../../public/Logo/meta.png'
import webflow from '../../../../public/Logo/webflow.png'
import Image from "next/image";

const Certifications:React.FC=()=>{
    return(
        <div className="mt-16">
            <p className="text-p4 text-dark-secondary text-center">Our Employees are certified by Big Companies</p>
            <div className="flex lg:flex-row md:flex-row flex-col gap-20 mt-5">
                <Image width={156} height={60} src={google} className="mix-blend-luminosity object-contain" alt='googlelogo'></Image>
                <Image width={156} height={60} src={openai} className="mix-blend-luminosity object-contain" alt='openailogo'></Image>
                <Image width={156} height={60} src={microsoft} className="mix-blend-luminosity object-contain" alt='microsoftogo'></Image>
                <Image width={156} height={60} src={linkedin} className="mix-blend-luminosity object-contain" alt='linkedinlogo'></Image>
                <Image width={156} height={60} src={hubspot} className="mix-blend-luminosity object-contain" alt='hubspotlogo'></Image>
                <Image width={156} height={60} src={meta} className="mix-blend-luminosity object-contain" alt='metalogo'></Image>
                <Image width={156} height={60} src={webflow} className="mix-blend-luminosity object-contain" alt='webflowlogo'></Image>
            </div>
        </div>
    )
}
export default Certifications
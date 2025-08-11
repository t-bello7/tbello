import Image from "next/image";
import { FC } from "react";
import {
  checkmark,
  colors,
  bucket  
} from "@/assets/icons"

const info = [
  {
    title: "Proven Excellence & Reliability",
    icon: checkmark,
    text: "We’ve built a reputation for consistent, high-quality service delivery. Our experienced team follows standardized protocols and uses the latest tools and eco-friendly products to ensure every task meets the highest standards—on time, every time."
  },
  {
    title: "Comprehensive Solutions",
    icon: colors,
    text: "Whether it’s routine cleaning, technical maintenance, or specialized services like pest control or space management, we provide tailored solutions to meet your facility’s exact needs. Our integrated approach saves you time, money, and stress."
  },
  {
    title: "Eco-Conscious Approach",
    icon: bucket,
    text: "Your people’s health and the environment matter to us. That’s why we prioritize green cleaning methods, sustainable waste practices, and strict safety compliance, creating safer, healthier environments for all."
  }
]

const Projects: FC = () => {
  return (
    <section className="section space-y-8" id="projects">
      <div className="container space-y-6 grid justify-items-center">
        <h2 className="text-primary uppercase text-xs bg-[#E6F8FF] w-fit text-center py-1 px-4 rounded-full">
          OUR SERVICES
        </h2> 
        <div className="space-y-3">
          <h3 className="text-center text-2xl md:text-4xl font-sfProDisplayBold font-bold">
             We Create Environments That Work
          </h3>
          <p className="text-[#71717A] md:text-center">
         Partnering with DNA management means choosing a team dedicated to reliability, safety, and tailored facility solutions that support your operations and enhance your space.
          </p>
        </div>
      </div>
   
         <div
      className="container max-w-[88%] flex flex-col gap-4 md:flex md:flex-row md:max-w-full lg:gap-5 justify-center">
          {
            info.map(({icon, text, title}) => (
              <div key={title} className="rounded-xl bg-white md:w-[30ch] h-[36vh] py-6 px-4 grid items-start border gap-3">
                <Image src={icon} alt={title} />
                <div className="space-y-2"> 
                  <span className="text-bold text-[#18181B]"> {title} </span>
                  <p className="text-[#71717A]">
                    {text}
                  </p>
                </div>
              </div>
            ))
          }
      </div>
    </section>
  )
};

export default Projects;

"use client";
import { FC } from "react";
import Image from "next/image";
import {
  introImg
} from "@/assets/images"

const aboutItems = [
  {
    title: 'Professionalism',
    description: 'We deliver every service with accountability, consistency, and pride.'
  },
  {
    title: 'Integrity',
    description: ' We operate transparently and honestly in all our client relationships.'
  },
  {
    title: 'Customer-Centricity',
    description: 'We tailor our services to meet the unique needs of every client.'
  },
  {
    title: 'Innovation',
    description: 'We embrace technology and new methods to deliver smarter facility solutions.'
  },
  {
    title: 'Sustainability',
    description: 'We promote eco-friendly practices that reduce environmental impact.'
  }
]

const Intro: FC = () => {
  return (
    <section className="container mx-auto space-y-6 bg-[FAFFF4]" id="intro">
      <div className="grid justify-items-center gap-6">
        <h2 className="text-primary uppercase text-xs bg-[#E6F8FF] w-fit text-center py-1 px-4 rounded-full">
          Our Core Values
        </h2> 
        <h3 className="text-center text-2xl md:text-4xl font-sfProDisplayBold font-bold">
           The Principles That Guide Every Service, Every Team Member, Every Day.
        </h3>
        <p className="text-center text-[#71717A]">
          At the heart of everything we do lies a strong commitment to excellence, integrity, and customer satisfaction — values that shape our culture and drive our performance.
        </p>
        <div className="grid gap-6 container">
          {
            aboutItems.map(item => (
              <div key={item.title} className="flex gap-4">
                <div>
                </div>
                <div className="grid gap-1">
                  <h4 className="font-bold font-sfProDisplayBold text-sm md:text-base"> {item.title} </h4>
                  <p className="text-xs md:text-sm text-[#71717A] font-sfProDisplay ">
                    { item.description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Image src={introImg} alt="intro" />
    </section>
  );
};

export default Intro;

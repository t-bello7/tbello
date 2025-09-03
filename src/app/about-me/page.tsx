import Image from "next/image";
import Link from "next/link";
import {
    bglogo,
    aiicoLogo,
    extendedLogo,
    hngLogo,
    tomiImage
} from "@/assets/images"
import { SectionTitle } from "@/components";

const AboutMe = () => {
  const workExperience = [
    {
      id: "rwwrwr",
      title: "Software Developer",
      company: "Babbangona",
      startDate: "February 2024",
      endDate: "Present",
      description: "Developing and maintaining web applications to ease agricultural processes",
      image: bglogo,
      liveUrl: "https://babbangona.com",
      bgColor: "#EED7E7"
    },
    {
      id: "rwwr",
      title: "Frontend Developer",
      company: "Extended Networks",
      startDate: "September 2023",
      endDate: "December 2023",
      description: "Building user interfaces and improving user experience.",
      image: extendedLogo,
      liveUrl: "https://extendednetworks.net",
      bgColor: "#EED7E7"
    },
    {
      id: "qeqe",
      title: "Frontend Intern",
      company: "Hotels.ng Internship",
      startDate: "Jan 2017",
      endDate: "Dec 2017",
      description: "Assisting in the development of web applications.",
      image: hngLogo,
      liveUrl: "https://hng.tech/",
      bgColor: "#EED7E7"
    },
    {
      id: "qeq",
      title: "IT Support",
      company: "AIICO Insurance Company",
      startDate: "Jan 2016",
      endDate: "Dec 2016",
      description: "Providing technical support and troubleshooting.",
      image: aiicoLogo,
      liveUrl: "https://www.aiicoplc.com/",
      bgColor: '#EED7E7'
    }
  ]

  return (
    <div className="container font-Paytone mx-auto max-w-[95%] space-y-10">
      {/* style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"÷ */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-fit" viewBox="0 0 200 200"   preserveAspectRatio="xMidYMid meet">
            <defs>
                <clipPath id="__lottie_element_2">
                    <rect width="200" height="200" x="0" y="0">
                    </rect>
                </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_2)">
                <g className="block" transform="matrix(9.450770378112793,0,0,9.450770378112793,25.143836975097656,38.56999206542969)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,6.5,3)">
                        <path fill="rgb(17,170,176)" fillOpacity="1" d=" M3,0 M3,0 C3,1.656000018119812 1.656000018119812,3 0,3 C-1.656000018119812,3 -3,1.656000018119812 -3,0 C-3,-1.656000018119812 -1.656000018119812,-3 0,-3 C1.656000018119812,-3 3,-1.656000018119812 3,0z">
                        </path>
                    </g>
                    <g opacity="1" transform="matrix(1,0,0,1,3.9719998836517334,9.375)">
                        <path fill="rgb(17,170,176)" fillOpacity="1" d=" M3.0309998989105225,-2.6089999675750732 M3.0309998989105225,-2.6089999675750732 C2.86299991607666,-2.617000102996826 2.700000047683716,-2.625 2.5280001163482666,-2.625 C0.7120000123977661,-2.625 -0.984000027179718,-2.121000051498413 -2.428999900817871,-1.2619999647140503 C-3.0889999866485596,-0.8709999918937683 -3.4719998836517334,-0.13699999451637268 -3.4719998836517334,0.6370000243186951 C-3.4719998836517334,0.6370000243186951 -3.4719998836517334,2.625 -3.4719998836517334,2.625 C-3.4719998836517334,2.625 3.4719998836517334,2.625 3.4719998836517334,2.625 C2.878999948501587,1.7769999504089355 2.5280001163482666,0.7419999837875366 2.5280001163482666,-0.375 C2.5280001163482666,-1.1759999990463257 2.7149999141693115,-1.9259999990463257 3.0309998989105225,-2.6089999675750732z">
                        </path>
                    </g>
                    <g opacity="1" transform="matrix(0.80901700258255,0.5877852439880371,-0.5877852439880371,0.80901700258255,11.75,9)">
                        <path fill="rgb(0,74,128)" fillOpacity="1" d=" M0,1.5 M0,1.5 C-0.8240000009536743,1.5 -1.5,0.8240000009536743 -1.5,0 C-1.5,-0.8240000009536743 -0.8240000009536743,-1.5 0,-1.5 C0.8240000009536743,-1.5 1.5,-0.8240000009536743 1.5,0 C1.5,0.8240000009536743 0.8240000009536743,1.5 0,1.5z M2.812000036239624,0 C2.812000036239624,-0.164000004529953 2.7890000343322754,-0.3160000145435333 2.7660000324249268,-0.4729999899864197 C2.7660000324249268,-0.4729999899864197 3.621000051498413,-1.2300000190734863 3.621000051498413,-1.2300000190734863 C3.621000051498413,-1.2300000190734863 2.871000051498413,-2.5269999504089355 2.871000051498413,-2.5269999504089355 C2.871000051498413,-2.5269999504089355 1.784999966621399,-2.1600000858306885 1.784999966621399,-2.1600000858306885 C1.5470000505447388,-2.36299991607666 1.2730000019073486,-2.5199999809265137 0.9769999980926514,-2.632999897003174 C0.9769999980926514,-2.632999897003174 0.75,-3.75 0.75,-3.75 C0.75,-3.75 -0.75,-3.75 -0.75,-3.75 C-0.75,-3.75 -0.9769999980926514,-2.632999897003174 -0.9769999980926514,-2.632999897003174 C-1.2730000019073486,-2.5199999809265137 -1.5470000505447388,-2.36299991607666 -1.784999966621399,-2.1600000858306885 C-1.784999966621399,-2.1600000858306885 -2.871000051498413,-2.5269999504089355 -2.871000051498413,-2.5269999504089355 C-2.871000051498413,-2.5269999504089355 -3.621000051498413,-1.2300000190734863 -3.621000051498413,-1.2300000190734863 C-3.621000051498413,-1.2300000190734863 -2.7660000324249268,-0.4729999899864197 -2.7660000324249268,-0.4729999899864197 C-2.7890000343322754,-0.3160000145435333 -2.812000036239624,-0.164000004529953 -2.812000036239624,0 C-2.812000036239624,0.164000004529953 -2.7890000343322754,0.3160000145435333 -2.7660000324249268,0.4729999899864197 C-2.7660000324249268,0.4729999899864197 -3.621000051498413,1.2300000190734863 -3.621000051498413,1.2300000190734863 C-3.621000051498413,1.2300000190734863 -2.871000051498413,2.5269999504089355 -2.871000051498413,2.5269999504089355 C-2.871000051498413,2.5269999504089355 -1.784999966621399,2.1600000858306885 -1.784999966621399,2.1600000858306885 C-1.5470000505447388,2.36299991607666 -1.2730000019073486,2.5199999809265137 -0.9769999980926514,2.632999897003174 C-0.9769999980926514,2.632999897003174 -0.75,3.75 -0.75,3.75 C-0.75,3.75 0.75,3.75 0.75,3.75 C0.75,3.75 0.9769999980926514,2.632999897003174 0.9769999980926514,2.632999897003174 C1.2730000019073486,2.5199999809265137 1.5470000505447388,2.36299991607666 1.784999966621399,2.1600000858306885 C1.784999966621399,2.1600000858306885 2.871000051498413,2.5269999504089355 2.871000051498413,2.5269999504089355 C2.871000051498413,2.5269999504089355 3.621000051498413,1.2300000190734863 3.621000051498413,1.2300000190734863 C3.621000051498413,1.2300000190734863 2.7660000324249268,0.4729999899864197 2.7660000324249268,0.4729999899864197 C2.7890000343322754,0.3160000145435333 2.812000036239624,0.164000004529953 2.812000036239624,0z">
                        </path>
                    </g>
                </g>
            </g>
        </svg> */}
        <div className="space-y-10">
          <div className="text-4xl container mx-auto font-extrabold tracking-widest  ">
              <h1 className="font-extrabold text-3xl leading-loose text-gray-1">Hi, I am TBello.</h1>
                      <p>A Software Engineer</p>
                      <p>
                              specialized in building exceptional digital products. </p>
                              {/* <p>
                                My expertise lies in JavaScript, TypeScript, React, and Node.js, allowing me to create robust and scalable applications. I am passionate about leveraging technology to solve real-world problems and enhance the way we interact with the digital landscape. 
                    
                              </p> */}
                      {/* <p> When I&apos;m not coding, you can find me enjoying nature, playing video games, or exploring new technologies. I have a habit of always learning to improve my way of doing things</p> */}
    
        </div>
        <div className="lg:flex lg:items-start lg:gap-10">
              <Image src={tomiImage} alt="A picture of Tomi" className="lg:mt-48" />

         
                     <div>
                                <SectionTitle text="Work Experience" />
      <div className="space-y-4">
              {
                workExperience.map(({
                  title, company, startDate, endDate, description, image, liveUrl, bgColor
                }) => (
                  <div key={title} className="container mx-auto md:grid md:grid-cols-2 md:items-center">
                    <div className={`w-64 h-64 mb-4 bg-[${bgColor}] grid items-center p-4`}>
                      <Image src={image} alt={title} className="w-full h-48 object-fit" />
                    </div>
                    <div>
                      <h2 className="font-bold text-xl md:text-3xl">{title}</h2>
                      <p className="text-gray-600 md:text-xl">{company}</p>
                      <p className="text-gray-500 md:text-xl">{startDate} - {endDate}</p>
                      <p className="mt-2">{description}</p>
                      <Link href={liveUrl} className="text-blue-500 hover:underline">View Project</Link>
                    </div>
                  </div>
                ))
              }
        </div>
                      </div>     
          </div>
       
          </div>
          <div>                      
        </div>
       
  
    </div>
  );
};

export default AboutMe;

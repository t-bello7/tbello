"use client"
import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components";

const Footer: FC = () => {
  return (<footer className=" grid items-end text-white bg-[#101E38]"

  >
    <div className="h-[60vh] relative w-full "
       style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
    <div className="relative h-[calc(100vh+60vh)] -top-[100vh]">
        <div className=" top-[calc(100vh-60vh)] h-[60vh] pt-10 pb-5 space-y-4 sticky ">
            <div className="container max-w-[95%] space-y-8">
            <div className="flex items-center">
              <h2 className="font-Paytone font-bold text-3xl"> Let's Create Magic Together</h2>
              <hr className="border-t border-white mx-4 w-full" />
              <Button variant="secondary" className="flex text-black flex-row"
              iconAfter={
                  <svg width="20" height="20" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.455 34.5033C26.1067 34.5033 25.7583 34.375 25.4833 34.1C24.9517 33.5683 24.9517 32.6883 25.4833 32.1566L35.64 22L25.4833 11.8433C24.9517 11.3116 24.9517 10.4316 25.4833 9.89997C26.015 9.3683 26.895 9.3683 27.4267 9.89997L38.555 21.0283C39.0867 21.56 39.0867 22.44 38.555 22.9716L27.4267 34.1C27.1517 34.375 26.8033 34.5033 26.455 34.5033Z" fill="#292D32"/>
                <path d="M37.2716 23.375H6.41663C5.66496 23.375 5.04163 22.7517 5.04163 22C5.04163 21.2483 5.66496 20.625 6.41663 20.625H37.2716C38.0233 20.625 38.6466 21.2483 38.6466 22C38.6466 22.7517 38.0233 23.375 37.2716 23.375Z" fill="#292D32"/>
                </svg>
              }
              >
                  Contact Me
              </Button>
            </div>
            <div className="font-Inconsolata space-y-8">
              <div className="space-y-4">
                <h4 className="uppercase text-gray-4"> / REACH ME </h4>
                <Link href={"mailto:bello4aus@outlook.com"} className="ml-4 block">bello4aus@outlook.com</Link>
              </div>
              <div className="space-y-4">
                <h4 className="uppercase text-gray-4"> / CHECK me out </h4>
                <div className="grid ml-4 gap-2">
                  <Link href={"https://linkedin.com/in/tbello7"}>LINKEDIN</Link>
                  <Link href={"https://linkedin.com/in/tbello7"}>MY RESUME</Link>
                  <Link href={"https://x.com/__tbello"}>X (TWITTER)</Link>
                  <Link href={"https://github.com/t-bello7"}>GITHUB</Link>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>

    </div>
    <ul className="fixed bottom-2 w-full px-4 mt-4 flex justify-between  lg:hidden">
              <li>
                <Link href={"/about-me"} className="grid justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-search-icon lucide-user-round-search">
                    <circle cx="10" cy="8" r="5"/>
                    <path d="M2 21a8 8 0 0 1 10.434-7.62"/>
                    <circle cx="18" cy="18" r="3"/>
                    <path d="m22 22-1.9-1.9"/>
                </svg>
              
                About Me
                </Link>
              </li>
              <li>
                <Link href={"/selected-works"} className="grid justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-business-icon lucide-briefcase-business">
                          <path d="M12 12h.01"/>
                          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                          <path d="M22 13a18.15 18.15 0 0 1-20 0"/>
                          <rect width="20" height="14" x="2" y="6" rx="2"/>
                      </svg>
                  Selected works
                </Link>
              </li>
              <li>
                <Link href={"/experiments"} className="grid justify-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical-icon lucide-flask-conical">
                    <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/>
                    <path d="M6.453 15h11.094"/><path d="M8.5 2h7"/>
                </svg>
                Experiments
                </Link>
              </li>
              <li>
                <Link href={"/experiments"} className="grid justify-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-text-icon lucide-book-open-text"><path d="M12 7v14"/><path d="M16 12h2"/><path d="M16 8h2"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/><path d="M6 12h2"/><path d="M6 8h2"/>
                </svg>
                Writing
                </Link>
              </li>

            </ul>
  </footer>);
};

export default Footer;

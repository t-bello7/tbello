"use client"
import { FC } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components";
import Link from "next/link";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About us",
    href: "#intro",
  },
  {
    label: "Our Vision",
    href: "#projects",
  },
  {
    label: "Our Values",
    href: "#testimonials",
  },
  {
    label: "Join Us",
    href: "#contact",
  },
];

// const raysVariants = {
//   hidden: {
//     strokeOpacity: 0,
//     transition: {
//       staggerChildren: 0.05,
//       staggerDirection: -1
//     }
//   },
//   visible: {
//     strokeOpacity: 1,
//     transition: {
//       staggerChildren: 0.05
//     }
//   }
// }

const Header: FC = () => {
  // const [openMobileMenu, setOpenMobileMenu ]= useState(false);
  const currentPath = usePathname()
  // const { theme, setTheme } = useTheme();
  // const moonPath = 'M47 65.3333C57.1252 65.3333 65.3333 57.1252 65.3333 47C46.2642 55.9696 37.3035 48.5152 47 28.6667C36.8748 28.6667 28.6667 36.8748 28.6667 47C28.6667 57.1252 36.8748 65.3333 47 65.3333Z';
  // const sunPath = "M47 65.3333C57.1252 65.3333 65.3333 57.1252 65.3333 47C65.3333 36.8748 57.1252 28.6667 47 28.6667C36.8748 28.6667 28.6667 36.8748 28.6667 47C28.6667 57.1252 36.8748 65.3333 47 65.3333Z";

  return (
    <header className="z-50 w-full font-Inconsolata mt-[3vh] fixed top-0 h-[10vh]">
      <div className="container w-[95%] md:max-w-[80%] lg:max-w-[80%]">
          <div className="flex justify-between items-center w-full">
            {
              currentPath === "/" ? (
                <div className=" text-teal-900">
                  TBELLO
                </div>
              ) : (
                <Link href="/ " className="flex gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-[12px]" viewBox="0 0 24 24"><path d="m6 8-4 4 4 4M2 12h20"/>
                  </svg>
                  <span>
                    Back
                  </span>
                </Link>
              )
            }
          
            {/* <button className="w-4 h-4" type="button" onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
              <motion.svg  viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
              
                <motion.path
                // style={{ originX: 0.5, originY: 0.5 }}
                initial={{ 
                  fillOpacity: 0,
                  strokeOpacity: 0,
                  // scale: 2
                }}
                animate={theme === 'dark' ? {
                  fillOpacity: '0.35',
                  strokeOpacity: 0,
                  rotate: 360,
                  stroke: 'var(--color-blue-400)',
                  fill: 'var(--color-blue-400)',
                  scale: 2,
                  d: moonPath,
                }: {
                   fillOpacity: '0.35',
                  strokeOpacity: 0,
                  rotate: 0,
                  stroke: 'var(--color-yellow-600)',
                  fill: 'var(--color-yellow-600)',
                  d: sunPath
                }}
                //  transition={{
                //     rotate: { duration: 1, ease: "easeInOut" },
                //     scale: { duration: 0.8, ease: "easeInOut" },
                //     d: { duration: 0.6, ease: "easeInOut" }
                //   }}
                d={sunPath}/>
                <motion.g className="stroke-6 stroke-yellow-600">
                  <path d="M47 1.16667V10.3333"/>
                  <path d="M47 83.6667V92.8333"/>
                  <path d="M14.5958 14.5958L21.0583 21.0583"/>
                  <path d="M72.9417 72.9417L79.4042 79.4042"/>
                  <path d="M1.16666 47H10.3333"/>
                  <path d="M83.6667 47H92.8333"/>
                  <path d="M21.0583 72.9417L14.5958 79.4042"/>
                  <path d="M79.4042 14.5958L72.9417 21.0583"/>
                </motion.g>
              </motion.svg>

            </button> */}
            <Button variant="secondary">Say Hello </Button>    
          </div>
      </div>
    </header>
);
};

export default Header;
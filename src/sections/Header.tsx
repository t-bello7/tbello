"use client"
import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Button } from "@/components";
import Link from "next/link";
import { useTheme } from "next-themes";
import Rive from '@rive-app/react-webgl2';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "TBELLO",
    href: "/",
  },
  {
    label: "Highlights",
    href: "/highlights",
  },
  {
    label: "Work",
    href: "/selected-works",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tbello7",
    external: true,
  },
  {
    label: "Get in touch",
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
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const moonPath = 'M47 65.3333C57.1252 65.3333 65.3333 57.1252 65.3333 47C46.2642 55.9696 37.3035 48.5152 47 28.6667C36.8748 28.6667 28.6667 36.8748 28.6667 47C28.6667 57.1252 36.8748 65.3333 47 65.3333Z';
  const sunPath = "M47 65.3333C57.1252 65.3333 65.3333 57.1252 65.3333 47C65.3333 36.8748 57.1252 28.6667 47 28.6667C36.8748 28.6667 28.6667 36.8748 28.6667 47C28.6667 57.1252 36.8748 65.3333 47 65.3333Z";

  return (
    <header className="z-50 w-full font-Inconsolata mt-[3vh] fixed top-0 h-[10vh]">
      <div className="container w-[95%] md:max-w-[80%] lg:max-w-[80%]">
          <div className="flex justify-center items-center w-full relative">
            <nav className="hidden lg:flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur-sm">
            {/* <div className="bg-black w-11"> */}
              <Rive
                src="/logo.riv"
                stateMachines="bumpy"
              />
              {/* </div> */}
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-black/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                {isMenuOpen ? (
                  <path d="M6 6l12 12M18 6l-12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
            {isMenuOpen ? (
              <div
                id="mobile-nav"
                className="absolute right-0 top-full mt-3 w-[min(90vw,320px)] rounded-2xl bg-white/95 p-4 text-slate-900 shadow-[0_18px_45px_rgba(0,0,0,0.16)] ring-1 ring-black/5 backdrop-blur-md lg:hidden"
              >
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-black/5"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
              <div className="flex gap-4 items-center">
                    <button className="w-4 h-4" type="button" onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
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
            </button>
              </div>
          
          </div>
      </div>
    </header>
);
};

export default Header;

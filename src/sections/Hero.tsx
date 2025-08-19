"use client";
import { FC, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero: FC = () => {
  const [coords, setCoords] = useState({ xMapped: 0, yMapped: 0 });
  const windowWidthRef = useRef(0);
  const windowHeightRef = useRef(0);
  // const pointerRef = useRef()
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect motion preferences
    const safeToAnimate = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    ).matches;
    if (!safeToAnimate) return;

    // Update window size on resize
    const handleResize = () => {
      windowWidthRef.current = window.innerWidth;
      windowHeightRef.current = window.innerHeight;
    };

    const updateMouseCoords = (event: MouseEvent) => {
      const mappedX = gsap.utils.mapRange(
        0,
        windowWidthRef.current,
        -50,
        50,
        event.clientX
      );
      const mappedY = gsap.utils.mapRange(
        0,
        windowHeightRef.current,
        -50,
        50,
        event.clientY
      );

      // You can animate something directly here:
      // gsap.to(".some-element", { x: mappedX, y: mappedY, duration: 0.3 });

      // Or store it in state for display/debug
      setCoords({ xMapped: mappedX, yMapped: mappedY });
    };

    window.addEventListener("mousemove", updateMouseCoords);
    window.addEventListener("resize", handleResize);
//  // Pointer element
//   const pointer = document.querySelector(".pointer"); // Make sure you have an element with class "pointer"

  // GSAP move logic
  function movePointer() {
    gsap.to('.pointer', {
      xPercent: coords.xMapped,
      yPercent: coords.yMapped,
      ease: "none"
    });
  }

  gsap.ticker.add(movePointer);
    return () => {
      window.removeEventListener("mousemove", updateMouseCoords);
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(movePointer);
    };
  }, [coords]);

  return (
    <section className="h-full font-Inconsolata">
      <div className="container h-[77vh] overscroll-none mx-auto gap-8 text-center lg:text-left relative">
        <div className=" space-y-4">
          <div> Oluwatomisin Bello <span> Software Engineer</span></div>
          <p> A design focused Software Engineer focused on creating stuning professionally crafted website </p>
          <h1 className="text-5xl font-Paytone"> Let&apos;s Create Magic together</h1>
        </div>
        <div className="absolute max-w-2xl mx-auto lg:mx-0 bottom-[15vh] left-1/2 -translate-x-1/2">
          
          <svg className="w-[20ch] h-[20vh]" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background color */}
              <path d="M500 0V500H0V0H500Z" fill="#D95CFA"/>
              { /* Eye Brows */ }
              <g fill="#6D2E7D">
                { /*  Left Eye brow */ }
                <path d="M65.7686 231.734C70.1824 148.012 169.667 123.095 217.357 155.244C230.543 96.7041 162.78 98.7209 158.487 120.062C116.762 63.7268 81.0424 96.9443 113.892 126.267C60.0022 130.248 37.8595 176.45 70.017 177.373C55.6675 199.289 65.7686 231.734 65.7686 231.734Z" />
                { /*  Right Eye brow */ }
                <path d="M255.909 183.235C268.003 105.498 354.249 57.4814 416.944 143.812C422.834 102.199 387.755 82.1765 379.081 90.925C379.745 54.1968 349.52 54.9981 325.582 85.7098C315.411 35.8376 280.138 60.7744 271.107 111.739C249.332 83.6237 235.077 139.469 255.909 183.235Z"/>
              </g>

              {/* Right Eye */}
              <g>
                <g className="mix-blend-mode:multiply" opacity="0.2">
                <path d="M350.896 114.8C407.714 106.892 460.945 151.481 469.689 214.307C478.432 277.132 439.399 334.562 382.581 342.469C325.763 350.377 272.531 305.788 263.788 242.962C255.045 180.137 294.078 122.707 350.896 114.8Z" fill="#6D2E7D"/>
                </g>
                <path d="M294.772 162.806C331.102 123.087 392.848 120.336 432.566 156.666C472.284 192.997 475.035 254.742 438.705 294.46C402.375 334.179 340.629 336.93 300.911 300.6C261.193 264.269 258.442 202.524 294.772 162.806Z" fill="#FAFFFF"/>
                <path d="M387.673 233.865C389.496 265.929 364.98 293.399 332.912 295.222C300.847 297.045 273.378 272.529 271.555 240.465C269.732 208.397 294.251 180.927 326.316 179.108C358.38 177.285 385.849 201.801 387.673 233.865Z" fill="#8B2D5C"/>
                <path d="M326.624 241.003C327.472 255.899 316.081 268.662 301.184 269.51C286.288 270.358 273.525 258.966 272.677 244.07C271.834 229.173 283.221 216.411 298.117 215.563C313.014 214.719 325.776 226.106 326.624 241.003Z" fill="#45172E"/>
                <path d="M324.042 213.197C332.129 213.197 338.694 219.763 338.694 227.85C338.694 235.937 332.129 242.503 324.042 242.503C315.955 242.503 309.389 235.937 309.389 227.85C309.389 219.763 315.955 213.197 324.042 213.197Z" fill="white"/>
              </g>
              {/* Left Eye */}
              <g>
                <g className="mix-blend-mode:multiply" opacity="0.2">
                <path d="M131.544 135.544C188.25 127.651 241.391 172.252 250.135 235.077C258.88 297.902 219.939 355.32 163.233 363.213C106.526 371.106 53.3855 326.505 44.641 263.679C35.8964 200.854 74.8375 143.436 131.544 135.544Z" fill="#6D2E7D"/>
                </g>
                <path d="M62.5568 196.321C81.1346 165.885 113.718 149.233 147.367 149.6C163.935 149.78 181.079 154.401 196.62 163.887C242.597 191.95 257.119 251.971 229.055 297.948C200.992 343.925 140.97 358.448 94.9927 330.385C49.0159 302.322 34.4935 242.298 62.5568 196.321Z" fill="#FAFFFF"/>
                <path d="M125.597 254.705C127.42 286.769 154.89 311.286 186.954 309.467C219.023 307.644 243.54 280.173 241.716 248.105C239.893 216.04 212.422 191.525 180.358 193.348C148.29 195.171 123.774 222.641 125.597 254.705Z" fill="#8B2D5C"/>
                <path d="M187.063 254.879C187.911 269.775 200.674 281.167 215.57 280.319C230.467 279.475 241.858 266.713 241.01 251.816C240.162 236.92 227.4 225.528 212.503 226.376C197.607 227.224 186.219 239.982 187.063 254.879Z" fill="#45172E"/>
                <path d="M54.8885 317.885C86.3252 339.033 98.258 301.749 157.26 293.721C203.589 287.422 232.167 298.64 248.289 283.046C264.41 267.457 243.243 361.301 160.775 373.324C78.3074 385.352 54.8885 317.885 54.8885 317.885Z" fill="#D95CFA"/>
                <path d="M182.491 228.762C187.846 222.702 197.113 222.129 203.173 227.484C209.233 232.839 209.806 242.107 204.451 248.167C199.097 254.227 189.829 254.799 183.769 249.445C177.709 244.09 177.136 234.822 182.491 228.762Z" fill="white"/>
              </g>
              
              {/* Mouth */}
              <g>
                {/* Teeth */}
                <path d="M181.049 331.214C165.598 369.589 188.133 398.856 215.814 367.638C220.322 404.063 240.28 400.81 251.868 378.693C212.594 370.891 189.418 344.872 181.049 331.214Z" fill="#FFFBF7"/>
                {/* Lips */}
                <path d="M270.571 377.85C257.92 378.221 245.245 376.324 233.659 371.757C222.064 367.23 211.648 360.086 203.2 351.069C201.017 348.884 199.099 346.441 197.112 344.082C195.297 341.563 193.35 339.167 191.73 336.507C189.216 332.806 187.05 328.871 185 324.876C190.081 322.881 196.417 321.637 204.865 320.77C168.897 302.187 160.819 322.253 165.536 344.524C168.864 338.318 172.004 333.739 175.916 330.306C178.39 334.385 180.992 338.384 183.95 342.148C185.901 344.875 188.2 347.358 190.356 349.92C192.694 352.34 194.956 354.82 197.497 357.031C207.35 366.153 219.213 373.068 231.868 376.98C244.523 380.942 257.843 381.918 270.75 380.606C283.657 379.271 296.308 375.845 307.881 370.237C295.955 374.995 283.227 377.455 270.571 377.85Z" fill="#6D2E7D"/>
              </g>

          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

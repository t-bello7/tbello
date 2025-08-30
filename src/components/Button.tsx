import { useState, ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

export const Button = (props: {
    variant: 'primary' | 'secondary' | 'text' | 'outline';
    iconAfter?: ReactNode
    iconBefore?: ReactNode
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onAnimationEnd' | 'onDrag' | 'onDragEnd' | 'onDragStart'>) => {
    const { className, children, variant, iconBefore, iconAfter, ...rest} = props;
    const [touchStart, setTouchStart] = useState(false)
    return (
        <div className="relative w-fit">
      <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 200 44" 
                className="absolute inset-0 pointer-events-none z-20"
                preserveAspectRatio="none"
            >
                <defs>
                    <clipPath id="myPolygonClip">
                        <polygon points="20,0 200,0 180,44 0,44" />
                    </clipPath>
                </defs>
                
                {/* Visible stroke that follows the same path */}
                <polygon 
                    points="20,0 200,0 180,44 0,44" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    className={twMerge(
                        "transition-colors duration-500 text-gray-900",
                        variant === "primary" && "",
                        variant === "secondary" && "",
                        variant === "text" && "",
                        variant === "outline" && ""
                    )}
                />
            </svg>

        <motion.button  className={twMerge("text-xs text- z-10 w-fit h-11 px-4 inline-flex justify-center items-center gap-4 text-center  transition duration-500 relative group/button min-w-[20ch] ", 
            "after:content-[''] after:w-full after:h-11 after:-z-30 after:absolute after:translate-x-1 after:translate-y-1 after:[clip-path:polygon(10%_0%,100%_0%,90%_100%,0%_100%)] after:bg-primary",
            "hover:after:translate-x-3 hover:after:translate-y-2 after:transition-transform after:duration-300 after:ease-in-out",
            touchStart && 'after:translate-x-3 after:translate-y-2 after:transition-transform after:duration-300 after:ease-in-out',
            variant === "primary" && " ",
            variant === "secondary" && "",
            variant === "text" && "",
            variant === "outline" && '',
            className
        )} {...rest}
        onTouchStart={() => {
            setTouchStart(true)
        }}
        onTouchEnd={() => {
            setTouchStart(false)
        }}
        // whileHover={{  x:}}
        >
            {iconBefore && <span> {iconBefore} </span>}
            <span className="w-full"> {children} </span>
            {iconAfter && <span> {iconAfter} </span>}
        </motion.button>
        </div>
    )
}
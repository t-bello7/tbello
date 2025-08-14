import { motion } from 'framer-motion';

export const PulsatingCircle = ({
    color = "#66cc33",
    pulsate = false,
    size = "small" // "small", "medium", "large"
}: {
    color?: string;
    pulsate?: boolean;
    size?: "small" | "medium" | "large";
}) => {
    // Size configurations
    const sizeConfig = {
        small: {
            container: "size-12", // reduced from size-20
            outer: "inset-1", // reduced from inset-2
            inner: "inset-3" // reduced from inset-6
        },
        medium: {
            container: "size-16",
            outer: "inset-1",
            inner: "inset-4"
        },
        large: {
            container: "size-20",
            outer: "inset-2",
            inner: "inset-6"
        }
    };

    const currentSize = sizeConfig[size];

    // Animation variants
    const containerAnimation = pulsate ? {
        scale: [1, 1.1, 1],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    } : {};

    const outerAnimation = pulsate ? {
        scale: [1, 1.3, 1],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    } : {};

    return (
        <motion.div 
            className={`relative ${currentSize.container}`}
            animate={containerAnimation}
        >
            {/* Outer border */}
            <motion.div 
                className={`absolute ${currentSize.outer} rounded-full opacity-50`}
                style={{ backgroundColor: color }}
                initial={{ scale: 1 }}
                animate={outerAnimation}
            />
            
            {/* Main circle */}
            <div 
                className={`absolute ${currentSize.inner} grid items-center justify-center rounded-full`}
                style={{ backgroundColor: color }}
            >
                <svg 
                    className='' 
                    width="24" 
                    height="18" 
                    viewBox="0 0 43 34" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Add your SVG content here */}
                </svg>
            </div>
        </motion.div>
    );
};
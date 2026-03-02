import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	screens: {
    		sm: '375px',
    		md: '768px',
    		lg: '1200px'
    	},
    	extend: {
    		fontFamily: {
    			Inconsolata: [
    				'Inconsolata',
    				'monospace'
    			],
    			Paytone: [
    				'Paytone One',
    				'sans-serif'
    			]
    		},
    		container: {
    			center: true,
    			padding: {
    				DEFAULT: '1rem',
    				md: '2rem',
    				lg: '4rem'
    			}
    		},
    		colors: {
    			gray: {
    				'1': '#BFBFBF',
    				'2': '#F6F6F6',
    				'3': '#f2f1f3',
    				'4': '#D1D5DB',
    				DEFAULT: '#8E8E8E'
    			},
    			primary: {
    				'1': '#3B82F6',
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			dark: {
    				DEFAULT: '#141414'
    			},
    			white: {
    				DEFAULT: '#FFFFFF'
    			},
    			blue: {
    				'1': 'hsla(183, 100%, 96%, 1)',
    				'2': 'hsla(198, 100%, 94%, 1)',
    				DEFAULT: 'hsla(193, 91%, 31%, 1)'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;

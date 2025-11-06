import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/Layout/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          dark: '#2563EB',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          light: '#9CA3AF',
          dark: '#374151',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        danger: {
          DEFAULT: '#EF4444',
          dark: '#DC2626',
        },
        modal: {
          bg: '#1F1F1F',
          border: '#4B5563',
          overlay: 'rgba(0,0,0,0.6)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#9CA3AF',
          muted: '#6B7280',
        },
        blueGradientStart: '#3B82F6',
        blueGradientEnd: '#2563EB',
        orange: '#ff7849',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', // default purple
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        gray: {
          '50': '#fafafa',
          '100': '#f4f4f5',
          '200': '#e4e4e7',
          '300': '#d4d4d8',
          '400': '#a1a1aa',
          '500': '#71717a',
          '600': '#52525b',
          '700': '#3f3f46',
          '800': '#27272a',
          '900': '#18181b',
          '950': '#0a0a0b',
        },
        darkbg: '#090F15',
        darktext: '#667D94',
        loadbg: '#9d9d9d',
        darkbox: '#0C1621',
        black: '#000000',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        sidebarBg: '#0a1625',
        sidebarText: '#cfd8e1',
        sidebarActive: '#1f4b6f',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      screens: {
        xs: '350px',
        small: '500px',
        lg: '1000px',
        '2xl': '1400px',
      },
      blur: {
        '3': '30px',
      },
      boxShadow: {
        header: '0 0px 5px rgba(0,0,0,.2)',
        modal: '0 10px 25px rgba(0,0,0,0.4)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        progressAnimation: "progressAnimation 2s ease-out forwards",
        slowSlideDown: "slowSlideDown 1.2s ease-out",
        trail: 'trail var(--duration) linear infinite',
      },
      keyframes: {
        widthIncrease: {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        progressAnimation: {
          "0%": { width: "0%" },
          "100%": { width: "75%" },
        },
        slowSlideDown: {
          "0%": { transform: "translateY(-100%)" },
          "15%": { transform: "translateY(-90%)" },
          "30%": { transform: "translateY(-75%)" },
          "50%": { transform: "translateY(-50%)" },
          "70%": { transform: "translateY(-25%)" },
          "85%": { transform: "translateY(-10%)" },
          "100%": { transform: "translateY(0)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
    
        shimmer: {
          '100%': {
            transform: ' translateX(100%)',
          },
        },
      },
      aspectRatio: {
        '4/2': '4 / 2',
      },
      backgroundImage: {
        'spct-brand-gradient': 'linear-gradient(135deg, #814DE5 0%, #00D3FF 100%)',
        'spct-banner-gradient': 'linear-gradient(90deg, #6C1E9D 0%, #BB71E4 100%)',
        'spct-logo-gradient': 'linear-gradient(135deg, #814DE5 0%, #00D3FF 100%)',
       
      },
    },
    fontFamily: {
      ponomar: ['Ponomar', 'system-ui'],
      Cascadia: ['Cascadia Code', 'sans-serif'],
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;

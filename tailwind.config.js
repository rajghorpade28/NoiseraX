export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
                mono: ['"Inter Tight"', 'monospace'],
            },
            colors: {
                gold: {
                    50: '#fffcf2',
                    100: '#fff9e6',
                    200: '#ffefbf',
                    300: '#ffe18f',
                    400: '#ffd060',
                    500: '#D4AF37', // Champagne Gold
                    600: '#bf9b2f',
                    700: '#8c7122',
                    800: '#594716',
                    900: '#2a220a',
                },
                emerald: {
                    50: '#f0f7f6',
                    100: '#daebea',
                    200: '#b9dbd9',
                    300: '#8cc2bf',
                    400: '#57a19e',
                    500: '#004D40', // Deep Luxury Green
                    600: '#004035',
                    700: '#003028',
                    800: '#00201b',
                    900: '#00100d',
                },
                onyx: {
                    DEFAULT: '#020202',
                    950: '#050505',
                    900: '#0a0a0a',
                    800: '#1a1a1a',
                    700: '#2a2a2a',
                },
                primary: {
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
                accent: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                'float': 'float 6s ease-in-out infinite',
                'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(40px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}

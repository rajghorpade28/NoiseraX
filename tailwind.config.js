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
                    50:  '#fffef5',
                    100: '#fffbe0',
                    200: '#fff3b0',
                    300: '#ffe878',
                    400: '#ffd940',
                    500: '#D4AF37', // Champagne Gold
                    600: '#c49a20',
                    700: '#9a7515',
                    800: '#6e520e',
                    900: '#3a2c06',
                },
                emerald: {
                    50:  '#ecfdf5',
                    100: '#d1fae5',
                    200: '#a7f3d0',
                    300: '#6ee7b7',
                    400: '#34d399',
                    500: '#10b981', // Vivid Emerald
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                },
                onyx: {
                    DEFAULT: '#050505', // Deep rich text
                    950:    '#020202',
                    900:    '#050505',
                    800:    '#1a1a1a',
                    700:    '#2d2d2d',
                    600:    '#4a4a4a',
                    500:    '#666666',
                },
                alabaster: {
                    DEFAULT: '#fafafa',
                    50: '#ffffff',
                    100: '#fafafa',
                    200: '#f5f5f5',
                    300: '#ebebeb',
                }
            },
            animation: {
                'fade-in':    'fadeIn 0.5s ease-in-out',
                'slide-up':   'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                'scale-in':   'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                'float':      'float 6s ease-in-out infinite',
                'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
                'shimmer':    'shimmer 2s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%':   { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%':   { transform: 'translateY(40px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%':   { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%':      { transform: 'translateY(-20px)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%':      { opacity: '0.7' },
                },
                shimmer: {
                    '0%':   { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            boxShadow: {
                'gold-glow':    '0 10px 40px rgba(212, 175, 55, 0.15)',
                'premium':      '0 20px 50px rgba(0, 0, 0, 0.05)',
                'card':         '0 4px 20px rgba(0, 0, 0, 0.03)',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}

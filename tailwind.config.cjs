/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/vld-ui-components/lib/**/*.js',
    ],
    theme: {
        extend: {
            animationDuration: {
                2000: '2s',
                long: '10s',
                'very-long': '40s',
            },
            colors: {
                black: 'var(--black)',
                /* blue: "var(--blue)", */
                darkgray: 'var(--darkgray)',
                softgrey: 'var(--softgray)',
                'variable-collection-white': 'var(--variable-collection-white)',
                white: 'var(--white)',
            },
            keyframes: {
                pulsate: {
                    '100%': {
                        'text-shadow':
                            '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa, 0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa',
                    },

                    '0%': {
                        'text-shadow':
                            '0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 10px #0fa, 0 0 45px #0fa, 0 0 55px #0fa, 0 0 70px #0fa, 0 0 80px #0fa',
                    },
                },
            },
        },
    },
    plugins: [
        require('tailwindcss-animated'),
        function ({ addComponents, theme }) {
            addComponents({
                '.neonText': {
                    color: '#fff',
                    'text-shadow':
                        '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #09f, 0 0 82px #09f, 0 0 92px #09f, 0 0 102px #09f, 0 0 151px #09f',
                },
                '.pulsate': {
                    animation: 'pulsate 1.5s infinite alternate',
                },
            });
        },
    ],
};

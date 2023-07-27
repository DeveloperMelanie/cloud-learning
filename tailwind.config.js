/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00b274',
            },
            backgroundImage: {
                'primary-gradient':
                    'linear-gradient(to right, #1ee47e, #00B274, #4bf19b)',
                'secondary-gradient':
                    'linear-gradient(to right, #b3ffd9a3, #98fbd8d6)',
            },
            boxShadow: {
                subtle: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                mini: '0px 0px 100px rgba(0, 0, 0, 0.03)',
                blur: '0px 15px 25px rgb(0 4 74 / 4%)',
            },
            fontFamily: {
                body: ['Mulish', 'sans-serif'],
            },
            fontSize: {
                intermediate: '0.9375rem',
            },
        },
        container: {
            padding: '1rem',
            center: true,
        },
    },
    plugins: [],
}

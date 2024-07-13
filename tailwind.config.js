/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: {
                    DEFAULT: '#FF7B00',
                    100: '#FFD7B3',
                    200: '#FFA34D',
                },
                accent: {
                    DEFAULT: '#CC07CD',
                    100: '#FCB5FC',
                    200: '#F852F9',
                },
                success: '#40AC40',
                'success-foreground': '#FFF',
                destructive: '#FC4D5F',
                'destructive-foreground': '#FFF',
                gray: {
                    100: '#CDCDE0',
                },
            },
            fontFamily: {
                mRegular: ['Montserrat-Regular', 'sans-serif'],
                mMedium: ['Montserrat-Medium', 'sans-serif'],
                mSemiBold: ['Montserrat-SemiBold', 'sans-serif'],
                mBold: ['Montserrat-Bold', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

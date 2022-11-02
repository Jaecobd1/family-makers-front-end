/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': "#025159",
                'secondary': '#04BFBF',
                'grey': '#353B3C'
            },
            fontFamily: {
                archivo: 'Archivo, regular'
            }
        },
    },
    plugins: [],
}
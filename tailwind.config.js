/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./www/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: { sans: ['Outfit', 'sans-serif'] },
            colors: {
                dark: {
                    bg: '#0f172a',
                    card: '#1e293b',
                    text: '#f1f5f9'
                }
            }
        }
    },
    plugins: [],
}

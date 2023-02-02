/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mybackground: "#f7f8f2",
                primary: "#0b1e5b",
                darkpurple: "#252234",
                mygreen: "#b9db62",
                lightpurple: "#e7e7fd",
            },
        },
    },
    plugins: [],
};

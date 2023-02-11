/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                mybackground: "#f7f8f2",
                primary: "#0b1e5b",
                darkpurple: "#252234",
                mygreen: "#b9db62",
                lightpurple: "#e7e7fd",
            },

            animation: {
                scrollLeft: "scrollLeft 15s linear infinite",
                scrollRight: "scrollRight 15s linear infinite",
            },

            keyframes: {
                scrollLeft: {
                    "0%": { left: "0" },
                    "100%": { left: "-100%" },
                },

                scrollRight: {
                    "0%": { right: "0" },
                    "100%": { right: "-100%" },
                },
            },
        },
    },
    purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    plugins: [],
};

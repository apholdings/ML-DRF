/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "layers",
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "*.html/",
        "./src/js/*.js",
        "./docs/*.html",
        "./authentication/*.html",
        "./components/*.html",
        "./content/*.html",
        "./forms/*.html",
        "./ecommerce/*.html",
        "./project/*.html",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "dark-main": "#181818",
                "dark-bg": "#22202A",
                "dark-second": "#242526",
                "dark-third": "#100f14",
                "dark-txt": "#c1c1c1",
                dark: "#1C1D1F",
                "fb-gray": "#f0f2f5",
                morado: "#7C24D9",
                "gray-footer-500": "#1C1D1F",
                search: "#F7F9FA",
                careers: "#FEF9F5",
                gray: {
                    50: "#f8f7ff",
                    100: "#f6f5ff",
                    200: "#eff0fe",
                    300: "#e0e0fc",
                    400: "#98A5C0",
                    500: "#84848f",
                    600: "#595983",
                    700: "#1e1f48",
                    800: "#141430",
                    900: "#0a0a18",
                },
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
                click: {
                    "0%, 100%": { transform: "scale(0.95)" },
                    "80%": { transform: "scale(0.95)" },
                },
                card: {
                    "0%, 100%": { transform: "scale(1.01)" },
                    "80%": { transform: "scale(1.01)" },
                },
            },
            animation: {
                wiggle: "wiggle 200ms ease-in-out",
                click: "click 10000ms ease-in-out",
                card: "card 10000ms ease-in-out",
            },
        },
        fontFamily: {
            sans: ["Nunito", "sans-serif"],
            serif: ["Merriweather", "serif"],
            "gilroy-thin": "'Gilroy-Thin', sans-serif",
            "gilroy-ultralight": "'Gilroy-UltraLight', sans-serif",
            "gilroy-light": "'Gilroy-Light', sans-serif",
            "gilroy-regular": "'Gilroy-Regular', sans-serif",
            "gilroy-medium": "'Gilroy-Medium', sans-serif",
            "gilroy-semibold": "'Gilroy-Semibold', sans-serif",
            "gilroy-bold": "'Gilroy-Bold', sans-serif",
            "gilroy-heavy": "'Gilroy-Heavy', sans-serif",
            "gilroy-black": "'Gilroy-Black', sans-serif",

            "gilroy-thin-italic": "'Gilroy-ThinItalic', sans-serif",
            "gilroy-ultralight-italic": "'Gilroy-UltraLightItalic', sans-serif",
            "gilroy-light-italic": "'Gilroy-LightItalic', sans-serif",
            "gilroy-regular-italic": "'Gilroy-RegularItalic', sans-serif",
            "gilroy-medium-italic": "'Gilroy-MediumItalic', sans-serif",
            "gilroy-semibold-italic": "'Gilroy-SemiboldItalic', sans-serif",
            "gilroy-bold-italic": "'Gilroy-BoldItalic', sans-serif",
            "gilroy-heavy-italic": "'Gilroy-HeavyItalic', sans-serif",
            "gilroy-black-italic": "'Gilroy-BlackItalic', sans-serif",
        },
        fontSize: {
            xs: ".75rem",
            sm: ".875rem",
            tiny: ".875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
        },
        boxShadow: {
            "2sm": "0 25px 50px 3px rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.04)",
            sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            DEFAULT:
                "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            fb: "0 2px 2px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            button: "0 0px 10px 1px rgba(0, 0, 0, 0.2), 0 0px 2px 0px rgba(0, 0, 0, 0.05)",
            card: "0 0px 10px 1px rgba(0, 0, 0, 0.06), 0 0px 2px 0px rgba(0, 0, 0, 0.05)",
            featured:
                "0 0px 50px 1px rgba(0, 0, 0, 0.1), 0 0px 2px 0px rgba(0, 0, 0, 0.05)",
            xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            "2xl": "0 0px 40px 0px rgba(0, 0, 0, 0.1)",
            navbar: "0 10px 20px -1px rgba(0, 0, 0, 0.01)",
            "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
            inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
            none: "none",
        },
        screens: {
            sm: "760px",
            // => @media (min-width: 640px) { ... }

            md: "950px",
            // => @media (min-width: 768px) { ... }

            lg: "1034px",
            // => @media (min-width: 1024px) { ... }

            xl: "1218px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }

            "3xl": "1720px",
            // => @media (min-width: 1536px) { ... }

            "4xl": "1856px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    variants: {
        extend: {
            backgroundOpacity: ["dark"],
            display: ["group-hover"],
            transform: ["group-hover"],
            scale: ["group-hover"],
            textOpacity: ["dark"],
            outline: ["responsive", "focus", "hover", "active"],
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/aspect-ratio"),
        require("tailwindcss-question-mark"),
        require("tailwind-scrollbar-hide"),
    ],
};

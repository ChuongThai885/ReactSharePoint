/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            colors: {
                "default-blue": "#0074BD",
                "default-green": "#4AC49A",
                "default-light-green": "#D6F3E9",
                "default-dark-gray": "#444444",
                "default-gray": "#636363",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
}

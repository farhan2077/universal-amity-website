module.exports = {
    purge: {
        enabled: true,
        content: ["./*.html"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter"],
            },
            colors: {
                "custom-yellow": "#DE7C00",
                "custom-green": "#4E5B31",
            },
            margin: {
                78: "19.5rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

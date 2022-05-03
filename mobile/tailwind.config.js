import { plugin } from 'twrnc';

export default {
    content: [],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                black_rgba: {
                    backgroundColor: `rgba(0,0,0,0.5)`,
                },
            });
        }),
    ],
};

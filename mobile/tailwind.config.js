import { plugin } from 'twrnc';

export default {
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                'black-rgba': {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
            });
        }),
    ],
};

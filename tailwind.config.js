// tailwind.config.js
import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
export const plugins = [
    heroui({
        layout: {
            disabledOpacity: '0.3', // opacity-[0.3]
            radius: {
                small: '2px', // rounded-small
                medium: '4px', // rounded-medium
                large: '6px', // rounded-large
            },
            borderWidth: {
                small: '1px', // border-small
                medium: '1px', // border-medium
                large: '2px', // border-large
            },
        },
        colors: {
            text: '#1f1c19',
            background: '#f7f2e8',
            primary: '#B73A3A',
            secondary: '#2f5131',
            accent: '#d9b04a',
        },
        themes: {
            light: {},
            dark: {},
        },
    }),
];

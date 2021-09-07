import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "dark": "#3E3E3E",
            "medium": "#E1E2E5",
            "light": "#F0F0F0",
        },
        purple: {
            "primary": "#333B54",
        },
        green: {
            "primary": "#2DBEB1",
        },
        blue: {
            "primary": "#59A7DE",
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.medium',
                color: 'gray.dark'
            }
        }
    }
})
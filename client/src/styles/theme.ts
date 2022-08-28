import { MantineThemeOverride } from "@mantine/core";

export const themeOverride: MantineThemeOverride = {
    colorScheme: 'light',
    shadows: {
        md: '1px 1px 3px rgba(0, 0, 0, .25)',
        xl: '5px 5px 3px rgba(0, 0, 0, .25)',
    },
    loader: 'dots',
    fontFamily: 'Poppins, sans-serif',
    primaryColor: 'teal',
    primaryShade: { light: 4, dark: 8 },
}
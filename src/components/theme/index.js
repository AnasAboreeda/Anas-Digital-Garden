const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

export const basicColors = {
  primary: '#004E4E',
  lightPrimary: '#008C99',
  secondary: '#764B92',
  lightSecondary: '#CCABD6',
  highlight: '#6089B7',
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
    heading: '#000',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: basicColors.primary,
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#001933',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: basicColors.lightPrimary,
  },
};

export { lightTheme, darkTheme };

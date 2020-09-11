import React from 'react';

export const themes = {
    dark: {
        color: 'white',
        background: 'black',
        padding: '50px',
    },
    light: {
        color: 'black',
        background: 'white',
        padding: '50px',
    },
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
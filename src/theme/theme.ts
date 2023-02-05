const breakpoints = ['450px', '451px'];

// @ts-ignore
breakpoints.sm = breakpoints[0]
// @ts-ignore
breakpoints.lg = breakpoints[1]

export const theme = {
    colors: {
        grey10: 'darkgrey',
        aqua10: 'aquamarine',
        red10: 'indianred',
        red20: 'red',
        black: 'black',
        green10: 'green'
    },
    breakpoints
}

export type ThemeType = typeof theme;

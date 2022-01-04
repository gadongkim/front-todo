import {DefaultTheme} from 'styled-components'

export const theme: DefaultTheme = {
    color: {
        white: '#FFFFFF',
        black: '#000000',
        green: '#03C75A',
        gray: '#919191',
        lightGray: '#eeeeee',
        lightGrayRGB: 'rgba(145, 145, 145, 0.35)',
        red: '#DF6464',
        blue: '#466dfc',
    },
}

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`

export const media = {
    custom: customMediaQuery,
    desktop: customMediaQuery(1440),
    tablet: customMediaQuery(768),
    mobile: customMediaQuery(576),
}

export type ColorType = 'white' | 'black' | 'green' | 'gray' | 'red' | 'blue' | 'lightGray'

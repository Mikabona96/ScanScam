import { createGlobalStyle, css } from 'styled-components';
import THICCCBOIMEDIUM from '../fonts/THICCCBOI/THICCCBOI-Medium.ttf';
import THICCCBOIREGULAR from '../fonts/THICCCBOI/THICCCBOI-Regular.ttf';
import THICCCBOIBOLD from '../fonts/THICCCBOI/THICCCBOI-Bold.ttf';
import { MyFonts } from '../fonts';

const fontFaces = css`
    @font-face {
        font-family: ${MyFonts.THICCCBOI.regular};
        src: url(${THICCCBOIREGULAR}),
    }
    @font-face {
        font-family: ${MyFonts.THICCCBOI.bold};
        src: url(${THICCCBOIBOLD}),
    }
    /* font here */

    @font-face {
        font-family: ${MyFonts.THICCCBOI.medium};
        src: url(${THICCCBOIMEDIUM}),
    }
`;

export const FontStyles = createGlobalStyle`
    ${fontFaces}
    body {
        font-family: ${MyFonts.THICCCBOI.regular}, sans-serif;
    }
`;

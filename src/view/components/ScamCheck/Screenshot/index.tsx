// Core
import React, { FC } from 'react';
import Lightbox, { ControllerRef } from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

// Bus
// import {} from '../../../bus/'

//Images
import ScreenshotImage from '@/assets/images/screenshot.png';
import ScreenshotFullsizeImage from '@/assets/images/screenshot-fullsize.png';

// Styles
import 'yet-another-react-lightbox/styles.css';
import * as S from './styles';
import { LinkIcon } from '@/assets/images/icons';

// Types
type PropTypes = {
    /* type props here */
}

export const Screenshot: FC<PropTypes> = () => {
    const [ open, setOpen ] = React.useState(false);
    const ref = React.useRef<ControllerRef>(null);

    return (
        <S.Container>
            <S.Header>Screenshots</S.Header>
            <S.Description>
                Explore visual snapshots to preview the appearance of the website.
                Click on an image to open the full-size version.
                <S.Link><LinkIcon /> View website text</S.Link>
            </S.Description>
            <S.ImageWrapper onClick = { () => setOpen(true) }>
                <img
                    alt = 'site_screenshot'
                    src = { ScreenshotImage }
                />
            </S.ImageWrapper>
            <Lightbox
                carousel = {{ finite: true }}
                close = { () => setOpen(false) }
                controller = {{ ref: ref }}
                open = { open }
                plugins = { [ Zoom ] }
                render = {{
                    buttonPrev: () => null,
                    buttonNext: () => null,
                }}
                slides = { [{ src: ScreenshotFullsizeImage }] }
                styles = {{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' }}}
            />
        </S.Container>
    );
};

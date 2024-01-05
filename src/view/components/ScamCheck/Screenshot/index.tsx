// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

//Images
import ScreenshotImage from '@/assets/images/screenshot.png';

// Styles
import * as S from './styles';
import { LinkIcon } from '@/assets/images/icons';

// Types
type PropTypes = {
    /* type props here */
}

export const Screenshot: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.Header>Screenshots</S.Header>
            <S.Description>
                Explore visual snapshots to preview the appearance of the website.
                Click on an image to open the full-size version.
                <S.Link><LinkIcon /> View website text</S.Link>
            </S.Description>
            <S.ImageWrapper>
                <img
                    alt = 'site_screenshot'
                    src = { ScreenshotImage }
                />
            </S.ImageWrapper>
        </S.Container>
    );
};

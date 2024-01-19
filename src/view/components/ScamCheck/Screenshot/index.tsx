// Core
import React, { FC, useState, MouseEvent } from 'react';
import Lightbox, { ControllerRef } from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

// Tools
import { useOverflowHidden } from '@/tools/hooks';

// Styles
import 'yet-another-react-lightbox/styles.css';
import * as S from './styles';
import { LinkIcon } from '@/assets/images/icons';

// Types
type PropTypes = {
    screenshots: {
        screenshot: {
            isLoading: boolean;
            screenshot: any;
            error: any;
        };
        screenshot_fullsize: {
            isLoading: boolean;
            screenshot: any;
            error: any;
        };
    }
    websiteText: string | null
}

export const Screenshot: FC<PropTypes> = ({ screenshots, websiteText }) => {
    const [ open, setOpen ] = useState(false);
    const [ openText, setOpenText ] = useState(false);
    const ref = React.useRef<ControllerRef>(null);
    const overflowHandler = useOverflowHidden();

    const closeModal = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        if (target.classList.contains('modal')) {
            setOpenText(false);
            overflowHandler(true);
        }
    };

    function splitWebText(text: string) {
        const pattern = /(?<=[\.!\?])/g;
        const replacedText = text.replace(pattern, '\n');

        return replacedText;
    }

    return (
        <S.Container>
            <S.Header>Screenshots</S.Header>
            <S.Description>
                Explore visual snapshots to preview the appearance of the website.
                Click on an image to open the full-size version.
                <S.Link onClick = { () => {
                    setOpenText(true);
                    overflowHandler(false);
                } }>
                    <LinkIcon /> View website text
                </S.Link>
            </S.Description>
            {screenshots.screenshot.screenshot ? (
                <S.ImageWrapper onClick = { () => setOpen(true) }>
                    <img
                        alt = 'site_screenshot'
                        src = { screenshots.screenshot.screenshot }
                    />
                </S.ImageWrapper>
            ) : <S.Description>{`${screenshots.screenshot.error}`}</S.Description>}
            { screenshots.screenshot_fullsize.screenshot && (
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
                    slides = { [{ src: `${screenshots.screenshot_fullsize.screenshot}` }] }
                    styles = {{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' }}}
                />
            )}
            {
                openText && websiteText && (

                    <S.WebModal
                        className = 'modal'
                        onClick = { closeModal }>
                        <S.CloseModal onClick = { () => {
                            setOpenText(false);
                            overflowHandler(true);
                        } }>
                            &times;
                        </S.CloseModal>
                        <S.WebTextWrapper>
                            <S.WebText>{splitWebText(websiteText)}</S.WebText>
                        </S.WebTextWrapper>
                    </S.WebModal>
                )
            }
        </S.Container>
    );
};

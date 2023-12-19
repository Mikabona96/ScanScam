// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

import Logo from '@/assets/images/icons/logo.png';

// Styles
import * as S from './styles';
import { SearchIcon } from '@/assets/images/icons';
import { useTheme, css } from 'styled-components';
import { CustomLink } from '@/view/elements';
import { MyFonts } from '@/assets/fonts';
import { useScroll } from '@/tools/hooks/useScroll';

// Types
type PropTypes = {
    /* type props here */
}


export const Header: FC<PropTypes> = () => {
    const theme = useTheme();
    const scrolled = useScroll();

    const links = [
        {
            label: 'About Us',
            link:  '#',
        },
        {
            label: 'Tools',
            link:  '#',
        },
        {
            label: 'Blog',
            link:  '#',
        },
        {
            label: 'Contacts',
            link:  '#',
        },
    ];
    const LinkStyles = css`
        color: ${({ theme }) => theme.text.black.main};
        margin-right: 8px;
        white-space: nowrap;
        font-family: ${MyFonts.THICCCBOI.medium};
        animation-name: ${S.appearanceAnimation};
        animation-duration: 1.5s;
        transition: all.3s ease;
        &:hover {
            color: ${({ theme }) => theme.text.purple.main};
        }
        &:active {
            color: ${({ theme }) => theme.palette.purple.dark};
        }
    `;

    const SearchBarColumnStyles = css`
        max-width: 432px;
        width: 100%;
    `;

    return (
        <S.Header $isActive = { scrolled } >
            <S.Wrapper>
                <S.Column>
                    <CustomLink to = '#'>
                        <img
                            src = { Logo }
                            style = {{ width: '72px', height: '48px' }}
                        />
                    </CustomLink>
                </S.Column>
                <S.Column $styles = { SearchBarColumnStyles }>
                    {scrolled && (
                        <S.SearchBar>
                            <S.Input
                                placeholder = 'Enter a domain or URL (e.g., www.example.com)'
                            />
                            <SearchIcon
                                color = { theme.palette.purple.main }
                                height = { 24 }
                                width = { 24 }
                            />
                        </S.SearchBar>
                    )}
                </S.Column>
                <S.Column>
                    <S.LinksWrapper>
                        {
                            scrolled && links.map((link, idx) => {
                                return (
                                    <CustomLink
                                        $styles = { LinkStyles }
                                        key = { link.label + idx }
                                        label = { link.label }
                                        to = { link.link }
                                    />
                                );
                            })
                        }
                        <S.ScamReportButton>Report a Scam</S.ScamReportButton>
                        <S.LoginButton>Log in</S.LoginButton>
                    </S.LinksWrapper>
                </S.Column>
            </S.Wrapper>
        </S.Header>
    );
};

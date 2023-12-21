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
import { useOverflowHidden, useScroll } from '@/tools/hooks';


    // Types
    type PropTypes = {
        /* type props here */
        setModalActive: React.Dispatch<React.SetStateAction<boolean>>
        isModalActive: boolean
    }


export const Header: FC<PropTypes> = ({ setModalActive, isModalActive }) => {
    const theme = useTheme();
    const scrolled = useScroll();
    const overflowHandler = useOverflowHidden(isModalActive);

    const handleModalOpen = () => {
        setModalActive(true);
    };

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
        <S.Header style = {{ background: scrolled ? '#fff' : 'transparent' }} >
            <S.Wrapper>
                <S.Column>
                    <CustomLink to = '#'>
                        <img
                            src = { Logo }
                            style = {{ width: '72px', height: '48px' }}
                        />
                    </CustomLink>
                </S.Column>
                <S.Column
                    $styles = { SearchBarColumnStyles }
                    style = {{ display: scrolled ? 'flex' : 'none' }}>
                    <S.SearchBar>
                        <S.Input
                            placeholder = 'Enter a domain or URL (e.g., www.example.com)'
                        />
                        <div style = {{ width: '24px', height: '24px' }}>
                            <SearchIcon
                                color = { theme.palette.purple.main }
                                height = { 24 }
                                width = { 24 }
                            />
                        </div>
                    </S.SearchBar>
                </S.Column>
                <S.Column>
                    <S.LinksWrapper>
                        <div style = {{ display: scrolled ? 'flex' : 'none' }}>
                            {
                                links.map((link, idx) => {
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
                        </div>
                        <S.ScamReportButton onClick = { () => {
                            overflowHandler();
                            handleModalOpen();
                        } }>Report a Scam
                        </S.ScamReportButton>
                        <S.LoginButton>Log in</S.LoginButton>
                    </S.LinksWrapper>
                </S.Column>
            </S.Wrapper>
        </S.Header>
    );
};

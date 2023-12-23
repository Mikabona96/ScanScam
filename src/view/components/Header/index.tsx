// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

import Logo from '@/assets/images/icons/logo.png';

// Styles
import * as S from './styles';
import { SearchIcon } from '@/assets/images/icons';
import { useTheme } from 'styled-components';
import { Button, CustomLink } from '@/view/elements';
import { useOverflowHidden, useScroll } from '@/tools/hooks';
import { Mobile } from './Mobile';


    // Types
    type PropTypes = {
        /* type props here */
        setModalActive: React.Dispatch<React.SetStateAction<boolean>>
        isModalActive: boolean
    }


export const Header: FC<PropTypes> = ({ setModalActive, isModalActive }) => {
    const theme = useTheme();
    const scrolled = useScroll();
    const overflowHandler = useOverflowHidden();

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

    return (
        <>
            <Mobile
                handleModalOpen = { handleModalOpen }
                isModalActive = { isModalActive }
                links = { links }
            />
            <S.Header $scrolled = { scrolled } >
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
                        $show = { scrolled }
                        $styles = { S.SearchBarColumnStyles }>
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
                        <S.LinksWrapper $show>
                            <S.LinksWrapper $show = { scrolled }>
                                {
                                    links.map((link, idx) => {
                                        return (
                                            <CustomLink
                                                $styles = { S.LinkStyles }
                                                key = { link.label + idx }
                                                label = { link.label }
                                                to = { link.link }
                                            />
                                        );
                                    })
                                }
                            </S.LinksWrapper>
                            <Button
                                $styles = { S.ScamReportButton }
                                $variant = 'outlined'
                                onClick = { () => {
                                    overflowHandler(isModalActive);
                                    handleModalOpen();
                                } }>Report a Scam
                            </Button>
                            <Button>Log in</Button>
                        </S.LinksWrapper>
                    </S.Column>
                </S.Wrapper>
            </S.Header>
        </>
    );
};

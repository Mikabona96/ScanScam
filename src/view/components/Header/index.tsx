// Core
import React, { FC, useEffect, useState } from 'react';

// Bus
// import {} from '../../../bus/'

// Routes
import * as ROUTES from '../../routes/book';

// Images
import Logo from '@/assets/images/icons/logo.png';

// Styles
import * as S from './styles';
import { Button, CustomLink } from '@/view/elements';
import { useComponentWidth, useOverflowHidden, useScroll } from '@/tools/hooks';
import { useLocation } from 'react-router-dom';
import { MenuIcon } from '@/assets/images/icons/menuIcon';
import { HeaderSearchBar } from '../HeaderSearchBar';
import { breakpoints } from '@/assets';


    // Types
    type PropTypes = {
        /* type props here */
        setModalActive: React.Dispatch<React.SetStateAction<boolean>>
        isModalActive: boolean
    }


export const Header: FC<PropTypes> = ({ setModalActive, isModalActive }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const scrolled = useScroll();
    const overflowHandler = useOverflowHidden();
    const { ref, width } = useComponentWidth();

    const location = useLocation();

    const handleModalOpen = () => {
        setModalActive(true);
    };

    const handleMobileMenu = () => {
        setIsOpen(!isOpen);
        overflowHandler(true);
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
            link:  ROUTES.BLOG,
        },
        {
            label: 'Contacts',
            link:  '#',
        },
    ];

    useEffect(() => {
        if (width >= breakpoints.lg) {
            overflowHandler(true);
        } else {
            isOpen && overflowHandler(false);
        }
    }, [ width ]);

    return (

        <S.Header
            $scrolled = { scrolled }
            ref = { ref } >
            <S.MenuIcon onClick = { () => {
                setIsOpen(true);
                overflowHandler(isOpen);
            } }>
                <MenuIcon
                    height = { 24 }
                    width = { 24 }
                />
            </S.MenuIcon>
            <S.Wrapper
                $isOpen = { isOpen }>
                <S.Column>
                    <CustomLink
                        to = '/'
                        onClick = { handleMobileMenu }>
                        <img
                            src = { Logo }
                            style = {{ width: '72px', height: '48px' }}
                        />
                    </CustomLink>
                </S.Column>
                <S.Column
                    $show = { scrolled }
                    $styles = { S.SearchBarColumnStyles }>
                    <HeaderSearchBar />
                </S.Column>
                <S.Column>
                    <S.LinksWrapper $show>
                        <S.LinksWrapper $show = { scrolled }>
                            {
                                links.map((link, idx) => {
                                    const styles = S.LinkStyles(link.link === location.pathname);

                                    return (
                                        <CustomLink
                                            $styles = { styles }
                                            key = { link.label + idx }
                                            label = { link.label }
                                            to = { link.link }
                                            onClick = { handleMobileMenu }
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
                        <CustomLink
                            $styles = { S.OpenAppBtn }
                            to = '/scam-check'>
                            <Button>Open App</Button>
                        </CustomLink>
                    </S.LinksWrapper>
                </S.Column>
            </S.Wrapper>
            <S.Overlay
                $isOpen = { isOpen }
                onClick = { handleMobileMenu }
            />
        </S.Header>
    );
};

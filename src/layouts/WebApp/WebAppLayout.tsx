// Core
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// Styles
import * as S from './styles';
import { Sidebar } from './Sidebar';
import { Button, CustomLink } from '@/view/elements';
import { HeaderSearchBar } from '@/view/components';
import { useWhoisquery } from '@/bus/whoisquery';
import { useScamCheck } from '@/bus/scamcheck';
import { MenuIcon } from '@/assets/images/icons/menuIcon';
import { useComponentWidth, useOverflowHidden } from '@/tools/hooks';
import { breakpoints } from '@/assets';

export const WebAppLayout = () => {
    const { whoisquery: { whoisQuery }} = useWhoisquery();
    const { scamchek: { scamCheck }} = useScamCheck();
    const { pathname } = useLocation();
    const { ref, width } = useComponentWidth();
    const [ isMobileOpen, setIsMobileOpen ] = useState(false);
    const overflowHandler = useOverflowHidden();

    const links = [
        {
            id:    1,
            label: 'Home',
            link:  '/',
        },
        {
            id:    2,
            label: 'Blog',
            link:  '/blog',
        },
        {
            id:    3,
            label: 'About us',
            link:  '/about-us',
        },
        {
            id:    4,
            label: 'Privacy Policy',
            link:  '/privacy-policy',
        },
        {
            id:    5,
            label: 'Terms & Conditions',
            link:  '/terms-and-conditions',
        },
    ];

    useEffect(() => {
        if (width >= breakpoints.lg) {
            isMobileOpen && overflowHandler(true);
        } else {
            isMobileOpen && overflowHandler(false);
        }
    }, [ width ]);

    const handleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen);
        if (isMobileOpen) {
            overflowHandler(true);
        } else {
            overflowHandler(false);
        }
    };

    return (
        <S.Container ref = { ref }>
            <Sidebar
                handleMobileMenu = { handleMobileMenu }
                isMobileOpen = { isMobileOpen }
            />
            <S.Overlay
                $isOpen = { isMobileOpen }
                onClick = { handleMobileMenu }
            />
            <S.ContentWrapper>
                <S.Header>
                    <S.SvgWrapper onClick = { handleMobileMenu }>
                        <MenuIcon />
                    </S.SvgWrapper>
                    {((whoisQuery && pathname === '/whois-query') || (scamCheck.domain && pathname === '/scam-check')) && (
                        <S.SearchBarWrapper>
                            <HeaderSearchBar
                                placeholder = 'Type a new website to check'
                                scamCheck = { pathname === '/scam-check' }
                            />
                        </S.SearchBarWrapper>
                    )}
                    <CustomLink
                        $styles = { S.CustomLink }
                        to = '/' >
                        <Button>
                            Return to site
                        </Button>
                    </CustomLink>
                </S.Header>
                <S.OutletWrapper>
                    <Outlet />
                </S.OutletWrapper>
                <S.Footer>
                    <S.FooterText>© 2023 ScamScan. All Rights Reserved.</S.FooterText>
                    <S.LinksWrapper>
                        {
                            links.map((link) => {
                                return (
                                    <S.Link key = { link.id }>

                                        <CustomLink
                                            $styles = { S.FooterLinkStyles }
                                            label = { link.label }
                                            to = { link.link }
                                        />
                                    </S.Link>
                                );
                            })
                        }
                    </S.LinksWrapper>
                </S.Footer>
            </S.ContentWrapper>
        </S.Container>
    );
};

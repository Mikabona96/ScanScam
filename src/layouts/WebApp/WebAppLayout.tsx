// Core
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// Styles
import * as S from './styles';
import { Sidebar } from './Sidebar';
import { Button, CustomLink } from '@/view/elements';
import { HeaderSearchBar } from '@/view/components';
import { useWhoisquery } from '@/bus/whoisquery';
import { useScamCheck } from '@/bus/scamcheck';

export const WebAppLayout = () => {
    const { whoisquery: { whoisQuery }} = useWhoisquery();
    const { scamchek: { scamCheck }} = useScamCheck();
    const { pathname } = useLocation();
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

    console.log(pathname);

    return (
        <S.Container>
            <Sidebar />
            <S.ContentWrapper>
                <S.Header>
                    {((whoisQuery && pathname === '/whois-query') || (scamCheck.domain && pathname === '/scam-check')) && (
                        <HeaderSearchBar
                            placeholder = 'Type a new website to check'
                            scamCheck = { pathname === '/scam-check' }
                        />
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

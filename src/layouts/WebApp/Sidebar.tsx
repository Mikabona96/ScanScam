// Core
import React from 'react';

// Styles
import * as S from './styles';

// Images
import Logo from '@/assets/images/icons/logoTransparency.png';
import { CustomLink } from '@/view/elements';
import { DomainZone, Logout, ScamCheck, WhoisQuery } from '@/assets/images/icons';

export const Sidebar = () => {
    const links = [
        {
            id:    1,
            label: 'Scam Check',
            Icon:  ScamCheck,
            link:  '#',
        },
        {
            id:    2,
            label: 'Whois Query',
            Icon:  WhoisQuery,
            link:  '#',
        },
        {
            id:    3,
            label: 'Domain Zone',
            Icon:  DomainZone,
            link:  '#',
        },
    ];

    return (
        <S.SideBar>
            <S.LogoContainer>
                <CustomLink
                    to = '/'>
                    <img
                        src = { Logo }
                        style = {{ width: '72px', height: '48px' }}
                    />
                </CustomLink>
            </S.LogoContainer>
            <S.Menu>
                <S.MenuItemsContainer>
                    {
                        links.map(({ Icon, id, label, link }) => {
                            return (
                                <S.MenuItem
                                    $active = { id === 1 }
                                    key = { id }>
                                    <S.MenuItemSelected $active = { id === 1 } />
                                    <Icon />
                                    <CustomLink
                                        $styles = { S.LinkStyles }
                                        label = { label }
                                        to = { link }
                                    />
                                </S.MenuItem>
                            );
                        })
                    }
                </S.MenuItemsContainer>
                <S.MenuItem>
                    <S.MenuItemSelected />
                    <Logout />
                    <CustomLink
                        $styles = { S.LinkStyles }
                        label = { 'Log out' }
                        to = { '#' }
                    />
                </S.MenuItem>
            </S.Menu>
        </S.SideBar>
    );
};

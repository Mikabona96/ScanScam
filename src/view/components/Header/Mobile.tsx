import React, { FC, useState } from 'react';

// Styles
import * as S from './styles';

// Images
import Logo from '@/assets/images/icons/logo.png';
import { Button, CustomLink } from '@/view/elements';
import { SearchIcon } from '@/assets/images/icons';
import { useTheme } from 'styled-components';
import { useOverflowHidden } from '@/tools/hooks';
import { MenuIcon } from '@/assets/images/icons/menuIcon';

type PropTypes = {
    links: {
        label: string;
        link: string;
    }[]
    isModalActive: boolean
    handleModalOpen: () => void
}

export const Mobile: FC<PropTypes> = ({ links, handleModalOpen, isModalActive }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const theme = useTheme();
    const overflowHandler = useOverflowHidden(isOpen);
    const overflowModalHandler = useOverflowHidden(isModalActive);

    return (
        <S.Mobile $open = { isOpen }>
            <S.MenuIcon onClick = { () => {
                setIsOpen(true);
                overflowHandler();
            } }>
                <MenuIcon
                    height = { 24 }
                    width = { 24 }
                />
            </S.MenuIcon>
            {isOpen && (
                <S.SideBar>
                    <S.Column>
                        <CustomLink to = '#'>
                            <img
                                src = { Logo }
                                style = {{ width: '72px', height: '48px' }}
                            />
                        </CustomLink>
                    </S.Column>
                    <S.Column
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

                    <S.Column $styles = { S.ColumnLinkStyles }>
                        <S.LinksWrapper
                            $show
                            $styles = { S.linkWrapperStyles }>
                            <S.LinksWrapper $show >
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
                                    overflowModalHandler();
                                    handleModalOpen();
                                    setIsOpen(false);
                                } }>Report a Scam
                            </Button>
                            <Button>Log in</Button>
                        </S.LinksWrapper>
                    </S.Column>

                </S.SideBar>
            )}
            {isOpen && (
                <S.Overlay onClick = { () => {
                    overflowHandler();
                    setIsOpen(false);
                } }>
                </S.Overlay>
            )}
        </S.Mobile>
    );
};

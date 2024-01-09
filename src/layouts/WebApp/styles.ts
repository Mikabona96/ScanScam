import { MyFonts } from '@/assets/fonts';
import styled, { css } from 'styled-components';

export const Container = styled.main`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const SideBar = styled.aside`
    display: flex;
    flex-direction: column;
    width: 216px;
    min-height: 100vh;
    background: ${({ theme }) => theme.palette.black.dark};
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
`;

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
    justify-content: space-between;
    height: 100%;
`;

export const MenuItemsContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const MenuItem = styled.li<{$active?: boolean}>`
    list-style: none;
    display: flex;
    border-radius: 4px;
    background: ${({ $active }) => $active ? 'rgba(249, 250, 251, 0.20)' : 'transparent'};
    padding: 8px 8px 8px 0px;
    align-items: center;
    height: 40px;
    gap: 8px;
`;

export const MenuItemSelected = styled.div<{$active?: boolean}>`
    background: transparent;
    width: 18px;
    height: 22px;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        display: ${({ $active }) => $active ? 'block' : 'none'};
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background: #fff;
        border-radius: 50px;
    }
`;

export const LinkStyles = css`
    font-family: ${MyFonts.THICCCBOI.regular};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
    color: white;
    text-decoration: none;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1224px;
    width: 100%;
    /* height: fit-content; */
    min-height: 100vh;
    background: ${({ theme }) => theme.palette.gray.background};
`;

export const Header = styled.header`
    padding: 16px 48px 16px 72px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
`;

export const OutletWrapper = styled.div`
    padding: 24px 48px 0px;
    min-height: 667px;
    height: 100%;
`;

export const Footer = styled.footer`
    margin-top: auto;
    padding: 48px 48px 16px;
    display: flex;
    justify-content: space-between;
`;

export const FooterText = styled.p`
    color: ${({ theme }) => theme.text.gray.main};
    font-family: ${MyFonts.THICCCBOI.regular};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; 
`;

export const LinksWrapper = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const Link = styled.li`
`;

export const FooterLinkStyles = css`
    padding: 8px;
    color: ${({ theme }) => theme.text.gray.main};
    font-family: ${MyFonts.THICCCBOI.regular};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    transition: all.3s ease;
    &:hover {
        color: ${({ theme }) => theme.palette.purple.main};
    }
`;

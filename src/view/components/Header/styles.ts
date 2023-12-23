// Core
import { MyFonts } from '@/assets/fonts';
import { RuleSet, css } from 'styled-components';
import styled, { keyframes } from 'styled-components';

export const appearanceAnimation = keyframes`
 0% { opacity: 0 }
 30% { opacity: 0.5 }
 40% { opacity: 0.7; }
 100% { opacity: 1; }
`;

export const Header = styled.header<{$scrolled: boolean}>`
    position: fixed;
    max-width: 1440px;
    width: 100%;
    top: 0; /* required */
    padding: 24px 80px;
    transition: all 1s ease;
    z-index: 9999;
    background: ${({ $scrolled }) => $scrolled ? '#fff' : 'transparent'};
    ${({ theme }) => theme.media('max').lg} {
        display: none;
    };
`;

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;
    /* ${({ theme }) => theme.media('min').xs} {
        background-color: yellow;
        position: absolute;
        top: 0;
        left: 0;
        padding: 24px;
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }; */
`;

export const Column = styled.li<{$styles?: RuleSet<object>, $show?: boolean, $hidelogo?: boolean}>`
    /* width: fit-content; */
    padding: 0;
    margin: 0;
    ${({ $show = true }) => $show ? 'display: flex' : 'display: none'};
    ${({ $styles }) => $styles ? $styles : ''}
    /* ${({ theme }) => theme.media('min').xs} {
        display: flex;
        ${({ $hidelogo }) => $hidelogo ? 'display: none' : 'display: flex'};
    }; */
`;

export const SearchBar = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    padding: 12px;
    animation-name: ${appearanceAnimation};
    border: 1px solid transparent;
    border-bottom: 1px solid ${({ theme }) => theme.palette.gray.lightGrey};
    animation-duration: 1s;
    transition: all.3s ease;
    &:focus-within {
        border-bottom: 1px solid ${({ theme }) => theme.palette.gray.lightGrey};
        border: 1px solid ${({ theme }) =>  theme.palette.purple.main} ;
        box-shadow: 0px 0px 0px 2px rgba(151, 71, 255, 0.20);
        border-radius: 2px;
    }
    &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.palette.purple.main};
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 0;
    outline: 0;
    border: 0;
    margin: 0;
    height: 100%;
    font-family: ${MyFonts.THICCCBOI.regular};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.text.gray.main};
    &::placeholder {
        color: ${({ theme }) => theme.text.gray.secondary};
    }
    &:focus {
        margin: 0;
        padding: 0;
        width: 100%;
        outline: 0;
        width: calc(100% - 20px);
    }
`;

export const LinksWrapper = styled.div<{$show?: boolean, $styles?:RuleSet<object> | undefined}>`
    display: ${({ $show }) => $show ? 'flex' : 'none'};
    align-items: center;
    ${({ theme }) => theme.media('max').lg} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        ${({ $styles }) => $styles}
    };
`;

export const ScamReportButton = css`
    margin-right: 16px;
    margin-left: 8px;
    white-space: nowrap;
    ${({ theme }) => theme.media('max').lg} {
        margin-left: 0;
    }
`;

export const AnchorLink = styled.span<{$styles: RuleSet<object> | undefined}>`
    ${({ $styles }) => $styles}
`;

export const Mobile = styled.header<{$open?:boolean}>`
    display: none;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: ${({ $open }) => $open ? '100%' : '48px'};
    background-color: ${({ $open }) => $open ? 'unset' : 'rgba(255, 255, 255, .9)'};
    backdrop-filter: blur(4px);
    z-index: 9999;
    ${({ theme }) => theme.media('max').lg} {
        display: flex;
    }
`;


export const Overlay = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    height: -webkit-fill-available;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    z-index: 99999;
`;


export const SideBar = styled.div`
    padding: 12px 24px;
    min-width: 250px;
    max-width: 360px;
    width: 60%;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: -webkit-fill-available;
    background-color: white;
    z-index: 999999999;
    overflow: scroll;
`;


export const SearchBarColumnStyles = css`
        max-width: 432px;
        width: 100%;
    `;

export const LinkStyles = css`
        color: ${({ theme }) => theme.text.black.main};
        margin-right: 8px;
        white-space: nowrap;
        font-family: ${MyFonts.THICCCBOI.medium};
        animation-name: ${appearanceAnimation};
        animation-duration: 1.5s;
        transition: all.3s ease;
        &:hover {
            color: ${({ theme }) => theme.text.purple.main};
        }
        &:active {
            color: ${({ theme }) => theme.palette.purple.dark};
        }
    `;
export const MenuIcon = styled.div`
    position: relative;
    background-color: yelow;
    height: 48px;
    width: 48px;
    padding: 12px;
`;

export const linkWrapperStyles = css`
    height: 324px; 
    width: 100%;
    justify-content: space-between
`;

export const ColumnLinkStyles = css`
    width: 100%;
    margin-top: 20px;
`;

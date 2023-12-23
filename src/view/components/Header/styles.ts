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

export const Header = styled.header`
    position: fixed;
    max-width: 1440px;
    width: 100%;
    position: -webkit-sticky;
    top: 0; /* required */
    padding: 24px 80px;
    transition: all 1s ease;
    z-index: 9999;
`;

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const Column = styled.li<{$styles?: RuleSet<object>}>`
    /* width: fit-content; */
    padding: 0;
    margin: 0;
    ${({ $styles }) => $styles ? $styles : ''}
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

export const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const ScamReportButton = css`
    margin-right: 16px;
    margin-left: 8px;
    white-space: nowrap;
`;

export const AnchorLink = styled.span<{$styles: RuleSet<object> | undefined}>`
    ${({ $styles }) => $styles}
`;

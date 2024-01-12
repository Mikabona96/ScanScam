// Core
import { MyFonts } from '@/assets/fonts';
import styled, { keyframes } from 'styled-components';

export const appearanceAnimation = keyframes`
 0% { opacity: 0 }
 30% { opacity: 0.5 }
 40% { opacity: 0.7; }
 100% { opacity: 1; }
`;

export const SearchBar = styled.form<{$error?: boolean}>`
    display: flex;
    max-width: 432px;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    padding: 12px;
    animation-name: ${appearanceAnimation};
    border: 1px solid transparent;
    border-bottom: 1px solid ${({ $error, theme }) => $error ? theme.palette.error : theme.palette.gray.lightGrey};
    animation-duration: 1s;
    transition: all.3s ease;
    &:focus-within {
        border-bottom: 1px solid ${({ theme }) => theme.palette.gray.lightGrey};
        border: 1px solid ${({ theme }) =>  theme.palette.purple.main} ;
        box-shadow: 0px 0px 0px 2px rgba(151, 71, 255, 0.20);
        border-radius: 2px;
    }
    &:hover {
        border-bottom: ${({ theme, $error }) => $error ? '' : `1px solid ${theme.palette.purple.main}`};
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

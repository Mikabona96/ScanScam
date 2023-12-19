// Core
import styled from 'styled-components';

// Images
import Background from '../../../../assets/images/RootPage/Background.png';
import { MyFonts } from '@/assets/fonts';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1441px;
    width: 100%;
    max-height: 837px;
    height: 100%;
    background: center no-repeat url(${Background});
    background-size: contain;

    /* background-image: url(${Background}); */
    /* ${({ theme }) => theme.media('min').sm} {
        background: green;
    }
    ${({ theme }) => theme.media('min').md} {
        background: yellow;
    }
    ${({ theme }) => theme.media('min').lg} {
        background: red;
    } */
`;

export const Block = styled.div`
    display: flex;
    margin: auto;
    margin-top: 350px;
    max-width: 793px;
    width: 100%;
    max-height: 464px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    text-align: center;
    /* background: red; */
`;

export const Title = styled.h1`
    max-width: 793px;
    width: 100%;
    white-space: pre-wrap;
    color: ${({ theme }) => theme.text.black.main};
    text-align: center;
    font-family: ${MyFonts.THICCCBOI.bold};
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 72px;
`;

export const TitleGradient = styled.span`
    background: ${({ theme }) => `linear-gradient(180deg, ${theme.palette.purple.violet} 0%, ${theme.palette.purple.main} 100%)`};
    background: ${({ theme }) => `-webkit-linear-gradient(180deg, ${theme.palette.purple.violet} 0%, ${theme.palette.purple.main} 100%)`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
    color: ${({ theme }) => theme.text.gray.main};
    font-family: ${MyFonts.THICCCBOI.regular};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
`;

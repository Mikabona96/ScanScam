// Core
import styled from 'styled-components';

// Images
import Background from '../../../../assets/images/RootPage/Background.png';
import { MyFonts } from '@/assets/fonts';
import { ButtonStyles } from '@/assets/styles/styles';

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
    ${({ theme }) => theme.media('min').xs} {
        background: center no-repeat url(${Background});
        padding: 24px;
    }
    ${({ theme }) => theme.media('min').lg} {
        background: center no-repeat url(${Background});
        padding: 0px;
    }
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
    ${({ theme }) => theme.media('min').xs} {
        margin-top: 170px;
        gap: 24px;
    }

    ${({ theme }) => theme.media('min').md} {
        margin-top: 250px;
        gap: 48px;
    }
    ${({ theme }) => theme.media('min').lg} {
        margin-top: 350px;
    }
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
    ${({ theme }) => theme.media('min').xs} {
        font-size: 30px;
        line-height: 42px;
        max-width: 400px;
    }
    ${({ theme }) => theme.media('min').md} {
        font-size: 48px;
        line-height: 58px;
    }
    ${({ theme }) => theme.media('min').lg} {
        font-size: 60px;
        line-height: 72px;
        max-width: 793px;
    }
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
    ${({ theme }) => theme.media('min').xs} {
        font-size: 16px;
        line-height: 24px;
        max-width: 400px;
    }
    ${({ theme }) => theme.media('min').md} {
        font-size: 18px;
    }
    ${({ theme }) => theme.media('min').lg} {
        font-size: 20px;
        line-height: 28px;
        max-width: fit-content;
    }
`;

export const Form = styled.form`
    /* styles here */
    display: flex;
    max-width: 740px;
    width: 100%;
    height: 60px;
    background-color: aliceblue;
    ${({ theme }) => theme.media('min').xs} {
        height: 40px;
        max-width: 400px;
    }
    ${({ theme }) => theme.media('min').md} {
        height: 50px;
        max-width: 500px;
    }
    ${({ theme }) => theme.media('min').lg} {
        height: 60px;
        max-width: 740px;
    }
`;

export const Input = styled.input<{$error?: boolean}>`
    max-width: 610px;
    width: 100%;
    padding: 12px;
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.palette.gray.lightGrey};
    outline: 0;
    font-size: 16px;
    &::placeholder {
        font-family: ${MyFonts.THICCCBOI.regular};
        font-style: normal;
        font-weight: 400;
        color: ${({ theme }) => theme.text.gray.secondary};
    }
    &:focus {
        border: 1px solid ${({ theme }) => theme.palette.purple.main};
        box-shadow: 0px 0px 0px 2px rgba(96, 35, 250, 0.20);
    }
    border-color: ${({ $error, theme }) => $error ? theme.palette.error : theme.palette.gray.lightGrey};
    ${({ theme }) => theme.media('min').xs} {
        font-size: 12px;
        &::placeholder {
            font-size: 12px;
        }
    }
    ${({ theme }) => theme.media('min').md} {
        font-size: 14px;
        &::placeholder {
            font-size: 14px;
        }
    }
    ${({ theme }) => theme.media('min').lg} {
        font-size: 16px;
        &::placeholder {
            font-size: 16px;
        }
    }
`;

export const Button = styled(ButtonStyles)`
    max-width: 130px;
    &:active {
        background: ${({ theme }) => theme.button.dark};
    }
    ${({ theme }) => theme.media('min').xs} {
        max-width: 110px;
        padding: 6px 12px;
    }
    ${({ theme }) => theme.media('min').xs} {
        max-width: 130px;
        padding: 12px 24px;
    }
`;


// Core
import styled from 'styled-components';
import { MyFonts } from '@/assets/fonts';
import { ButtonStyles } from '@/assets/styles/styles';

export const Container = styled.main`
    width: 100%;
    height: 100%;
`;

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 140px;
    height: 280px;
    background: linear-gradient(89deg, #1F0D4C 0.16%, #070410 15.46%, #070411 77.6%, #27115E 99.28%);
    clip-path: polygon(100% 0%, 100% 100%, 50% 98%, 0% 100%, 0% 0%, 50% 2%);
`;

export const BottomTextWrapper = styled.div`
    max-width: 587px;
    width: 100%;
    max-height: 104px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Text = styled.h3`
    font-family: ${MyFonts.THICCCBOI.regular};
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    color: #fff;
`;

export const Button = styled(ButtonStyles)`
    max-height: 48px;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 2px;
    margin: 0 auto;

    &:hover {
        background: ${({ theme }) => theme.button.dark};
        border: none;
    }

    /* Font */
    font-family: ${MyFonts.THICCCBOI.regular};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`;

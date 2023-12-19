// Core
import { MyFonts } from '@/assets/fonts';
import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 0 24px;
`;

export const Wrapper = styled.div`
    display: flex;
    max-width: 1392px;
    width: 100%;
    padding: 48px;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    background: ${({ theme }) => `linear-gradient(89deg, ${theme.palette.purple.dark} 0.16%, ${theme.palette.black.dark} 15.46%, ${theme.palette.black.dark} 77.6%, ${theme.palette.purple.dark2} 99.28%)`};
`;

export const Title = styled.h3`
    font-family: ${MyFonts.THICCCBOI.bold};
    color: #fff;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
`;

export const Subtitle = styled.p`
    font-family: ${MyFonts.THICCCBOI.regular};
    margin-top: 16px;
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
`;

export const CardsWrapper = styled.div`
    margin-top: 48px;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    grid-gap: 48px;
`;

export const Card = styled.div`
    max-width: 475px;
    width: 100%;
    max-height: 220px;
    height: 100%;
    border-radius: 4px;

    display: flex;
    padding: 24px 48px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(50px);
`;

export const CardTitle = styled.h5`
    font-family: ${MyFonts.THICCCBOI.regular};
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
`;

export const CardDescription = styled.p`
    font-family: ${MyFonts.THICCCBOI.regular};
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px
`;

import { MyFonts } from '@/assets/fonts';
import styled, { css } from 'styled-components';

export const Container = styled.section`
    margin-top: 100px;
    padding: 0 80px;
`;

export const Title = styled.h3`
    font-family: ${MyFonts.THICCCBOI.regular};
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    color: ${({ theme }) => theme.text.black.main};
    ${({ theme }) => theme.media('max').md} {
        font-size: 20px;
        margin-bottom: 24px;
    }
`;

export const CardsWrapper = styled.div`
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const Button = css`
    margin: 0 auto;
    margin-top: 48px;
`;

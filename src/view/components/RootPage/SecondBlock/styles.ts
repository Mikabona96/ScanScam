// Core
import { MyFonts } from '@/assets/fonts';
import styled from 'styled-components';

export const Container = styled.section`
    max-height: 624px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 200px 0 200px 0;
`;

export const Wrapper = styled.div`
    width: 100%;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.text.black.main};
    font-family: ${MyFonts.THICCCBOI.bold};
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
`;

export const Subtitle = styled.p`
    margin-top: 16px;
    color: ${({ theme }) => theme.text.gray.main};
    font-family: ${MyFonts.THICCCBOI.regular};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
`;

export const MetricWrapper = styled.div`
    display: grid;
    max-width: 606px;
    width: 100%;
    grid-template: 1fr 1fr / 1fr 1fr;
    grid-row-gap: 64px;
`;

export const MetricCard = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    max-width: 280px;
    width: 100%;
    max-height: 80px;
    height: 100%;
    border-left: 2px solid;
    border-image: ${({ theme }) => `linear-gradient(180deg, ${theme.palette.purple.violet} 0%, ${theme.palette.purple.main} 100%)`} 1;
`;
export const MetricTitle = styled.p`
    font-family: ${MyFonts.THICCCBOI.bold};
    color: ${({ theme }) => theme.text.black};
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
`;

export const MetricLabel = styled.p`
    font-family: ${MyFonts.THICCCBOI.regular};
    color: ${({ theme }) => theme.text.gray.main};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`;

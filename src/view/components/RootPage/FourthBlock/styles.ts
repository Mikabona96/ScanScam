
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
    max-width: 580px;
    width: 100%;
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
export const CardWrapper = styled.div`
    max-width: 580px;
    width: 100%;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr 1fr;
    justify-items: center;
    grid-row-gap: 24px;
`;

export const MetricLabel = styled.p`
    font-family: ${MyFonts.THICCCBOI.regular};
    color: ${({ theme }) => theme.text.gray.main};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`;

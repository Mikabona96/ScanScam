import { MyFonts } from '@/assets/fonts';
import styled, { css, keyframes } from 'styled-components';

const appearance = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Container = styled.section`
    margin-top: 60px;
    max-height: 480px;
    height: 100%;
    width: 100%;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LeftSide = styled.div`
    max-width: 398px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: start;
`;

export const Title = css`
    ${({ theme }) => theme.media('min').lg} {
        text-align: start;
        margin-bottom: 16px;
    }
`;

export const RightSide = styled.div`
    max-width: 858px;
    width: 100%;
    height: 480px;
`;

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Card = styled.div<{$active?: boolean}>`
    width: 197px;
    height: 480px;
    position: relative;
    overflow: hidden;
    transition: .3s ease;
    border-radius: 4px;
    & img {
        position: absolute;
        top: 0;
        left: -200px;
        height: 480px;
    }
    ${({ $active }) => $active && 'width: 416px;'}
`;

export const DescriptionBlock = styled.div<{$active?: boolean}>`
    padding: 12px 24px;
    display: ${({ $active }) => $active ? 'flex' : 'none'};
    position: absolute;
    bottom: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    background: rgba(9, 10, 11, 0.20);
    transition: none;
    animation: ${appearance} 1s linear;
`;

export const DescriptionText = styled.p`
    font-family: ${MyFonts.THICCCBOI.semiBold};
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    max-width: 216px;
`;

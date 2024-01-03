// Core
import styled, { css } from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 32px;
    gap: 24px;
    display: flex;
    flex-direction: column;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const TitleStyles = css`
    ${({ theme }) => theme.media('min').lg} {
        font-size: 28px;
        line-height: 32px;
        text-align: left;
    }
`;

export const SubtitleStyles = css`
    ${({ theme }) => theme.media('min').lg} {
        font-size: 16px;
        line-height: 24px;
        text-align: left;
    }
`;

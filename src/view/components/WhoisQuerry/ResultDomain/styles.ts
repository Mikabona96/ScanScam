// Core
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100%;
    ${({ theme }) => theme.media('max').md} {
        width: 100%;
    }
`;

export const Pre = styled.pre`
    height: 100%;
    resize: none;
    width: 100%;
    background: ${({ theme }) => theme.palette.gray.background};
    border: 1px solid ${({ theme }) => theme.palette.gray.lightGrey};
    padding: 24px;
`;

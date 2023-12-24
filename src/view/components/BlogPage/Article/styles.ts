import styled, { css } from 'styled-components';

export const Container = styled.section`
    padding: 0 80px;
    margin-top: 48px;
    gap: 48px;
    display: flex;
    flex-direction: column;
`;

export const Navigation = styled.ul`
    display: flex;
    gap: 16px;
    align-items: center;
`;

export const NavigationItem = styled.li`

`;

export const Circle = styled.span`
    display: block;
    background-color: ${({ theme }) => theme.text.gray.secondary};
    width: 8px;
    height: 8px;
    border-radius: 50%;
`;

export const Title = css`
    ${({ theme }) => theme.media('min').xs} {
        text-align: left;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 344px;
    gap: 32px;
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`;

export const ImageWrapper = styled.div`
    max-width: 900px;
    max-height: 480px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    & img {
        width: 100%;
    }
`;

export const ParagraphList = styled.ul`
    display: flex;
    flex-direction: column;
    /* list-style: disc;
    list-style-position: inside; */
`;

export const ParagraphListItem = styled.li`
    margin-top: 12px;
    position: relative;
    padding-left: 16px;
    &::before {
        content: '';
        color: #000;
        background-color: ${({ theme }) => theme.palette.purple.main};
        width: 8px;
        height: 8px;
        border-radius: 50%;
        font-size: 1.2em;
        position: absolute;
        left: 0px;
        top: 10px;
        transform: translateY(-50%);
    }
`;

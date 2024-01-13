// Core
import { MyFonts } from '@/assets/fonts';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0px 2px 12px 0px rgba(101, 101, 101, 0.03);
    border: 1px solid #F5F5F5;
`;

export const Header = styled.div`
    padding: 12px 24px;
    font-family: ${MyFonts.THICCCBOI.semiBold};
    color: ${({ theme }) => theme.text.gray.main};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 17px;
    background: #F9FAFB;
`;

export const Description = styled.div`
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: ${MyFonts.THICCCBOI.regular};
    color: ${({ theme }) => theme.text.gray.main};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    ${({ theme }) => theme.media('max').sm} {
        flex-direction: column;
        gap: 24px;
    }
`;

export const Link = styled.div`
    display: flex;
    gap: 4px;
    font-family: ${MyFonts.THICCCBOI.regular};
    color: ${({ theme }) => theme.palette.purple.main};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
    text-wrap: nowrap;
`;

export const ImageWrapper = styled.div`
    padding: 24px;
    cursor: pointer;
    img {
        width: 100%;
    }
`;

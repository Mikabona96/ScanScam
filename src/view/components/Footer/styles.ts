// Core
import { MyFonts } from '@/assets/fonts';
import styled from 'styled-components';

export const Container = styled.footer`
    padding: 32px 80px;
    background: linear-gradient(89deg, #1F0D4C 0.16%, #070410 15.46%, #070411 77.6%, #27115E 99.28%);
    ${({ theme }) => theme.media('max').lg} {
        padding: 32px;
    }
`;

export const Wrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    ${({ theme }) => theme.media('max').lg} {
        & img {
            display: none;
        }
    }
    ${({ theme }) => theme.media('max').md} {
        flex-direction: column;
        align-items: center;
        & img {
            display: block;
        }
    }
`;

export const Divider = styled.div`
    background: rgba(255, 255, 255, 0.20);
    height: 1px;
    width: 100%;
    margin: 24px 0;
`;

export const CopyRight = styled.p`
    font-family: ${MyFonts.THICCCBOI.regular};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    width: fit-content;
    margin-left: auto;
    color: #fff;
`;

export const Links = styled.li`
    display: flex;
    flex-direction: column;
    height: 136px;
    justify-content: space-between;
    ${({ theme }) => theme.media('max').md} {
        align-items: center;
    }
`;

export const Link = styled.p`
    font-family: ${MyFonts.THICCCBOI.regular};
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    cursor: pointer;
`;

export const SocialLinks = styled.div`
    display: flex;
    width: 120px;
    justify-content: space-between;
    align-items: center;
`;

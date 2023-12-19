// Core
import { MyFonts } from '@/assets/fonts';
import { ButtonStyles } from '@/assets/styles/styles';
import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 200px 80px;
    text-align: center;
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

export const Slider = styled.div`
    position: relative;
    margin-top: 48px;
    overflow: hidden;
    width: 100%;
    height: 640px;
`;

export const Track = styled.div`
    display: flex;
    width: fit-content;
    justify-content: space-between;
    flex-wrap: nowrap;
`;


export const Card = styled.div`
    display: flex;
    width: 302px;
    padding: 12px;
    flex-direction: column;
    text-align: left;
    margin-right: 24px;
`;

export const CardDate = styled.span`
    font-family: ${MyFonts.THICCCBOI.regular};
    color: ${({ theme }) => theme.text.gray.secondary};
    margin-top: 12px;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px;
`;

export const CardTitle = styled.h5`
    font-family: ${MyFonts.THICCCBOI.bold};
    margin-top: 4px;
    color: ${({ theme }) => theme.text.black.main};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
`;

export const CardDescription = styled.p`
    font-family: ${MyFonts.THICCCBOI.regular};
    margin-top: 4px;
    color: ${({ theme }) => theme.text.gray.main};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`;

export const LinkWrapper = styled.div`
    font-family: ${MyFonts.THICCCBOI.regular};
    margin-top: 25px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.palette.purple.main};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
`;

export const Navigation = styled.div`
    position: absolute;
    display: flex;
    bottom: 0;
    margin: 0 8px;
    left: 50%;
    width: fit-content;
    transform: translateX(calc(-50% - 10px));
`;

export const ProgressButtonContainer = styled.div`
    padding: 10px;
    display: flex;
    `;

export const ProgressButton = styled.div<{$isActive?: boolean}>`
    margin-right: 18px;
    width: ${({ $isActive }) => $isActive ? '48px' : '24px'};
    height: 4px;
    border-radius: 10px;
    background: ${({ theme, $isActive }) => $isActive ? theme.palette.purple.main : theme.palette.gray.lightGrey};
    transition: all .3s ease;
    cursor: pointer;
    &:last-child {
        margin-right: 0px;
    }
`;

export const Button = styled(ButtonStyles)`
    max-width: 219px;
    max-height: 48px;
    margin: 0 auto;
    margin-top: 48px;
`;

export const ImageContainer = styled.div`
    width: '278px';
    height: '302px';
    overflow: hidden;
    &:hover img  {
        scale: 1.2;
        transition: all .3s ease;
    }
`;

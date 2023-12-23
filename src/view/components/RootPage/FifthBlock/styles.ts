// Core
import { MyFonts } from '@/assets/fonts';
import styled, { css } from 'styled-components';

export const LinkStyles = css`
    padding:  0;
`;

export const Container = styled.section`
    width: 100%;
    padding: 200px 80px;
    text-align: center;
     ${({ theme }) => theme.media('max').lg} {
        padding: 48px 24px;
    };
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.text.black.main};
    font-family: ${MyFonts.THICCCBOI.bold};
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
    ${({ theme }) => theme.media('max').sm} {
        font-size: 24px;
        line-height: 34px;
    };
`;

export const Subtitle = styled.p`
    margin-top: 16px;
    color: ${({ theme }) => theme.text.gray.main};
    font-family: ${MyFonts.THICCCBOI.regular};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    ${({ theme }) => theme.media('max').sm} {
        font-size: 16px;
    };
`;

export const Slider = styled.div`
    margin-top: 48px;
`;

export const Track = styled.div<{$translate: number}>`
    display: flex;
    width: fit-content;
    justify-content: space-between;
    flex-wrap: nowrap;
    transform: translateX(${({ $translate }) => -$translate + 'px'});
    transition: all.3s ease;
`;


export const Card = styled.div`
    display: flex;
    width: 302px !important;
    padding: 12px;
    flex-direction: column;
    text-align: left;
    cursor: default;
    &:hover img  {
        scale: 1.2;
        transition: all .3s ease;
    }
    ${({ theme }) => theme.media('max').sm} {
        width: 302px !important;
        align-items: center;
        & img {
            width: 100%;
            width: 270px;
            height: 270px;
        }
    }
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
     ${({ theme }) => theme.media('max').sm} {
        font-size: 14px;
    };
`;

export const CardDescription = styled.p`
    font-family: ${MyFonts.THICCCBOI.regular};
    margin-top: 4px;
    color: ${({ theme }) => theme.text.gray.main};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    ${({ theme }) => theme.media('max').sm} {
        font-size: 14px;
    };
`;

export const LinkWrapper = styled.div`
    font-family: ${MyFonts.THICCCBOI.medium};
    margin-top: 25px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.palette.purple.main};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
    ${({ theme }) => theme.media('max').sm} {
        font-size: 16px;
    };
`;

export const Navigation = styled.div`
    display: flex;
    bottom: 0;
    margin: 0 auto;
    width: fit-content;
    user-select: none;
    margin-top: 32px;
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

export const Button = css`
    max-height: 48px;
    margin: 0 auto;
    margin-top: 48px;
`;

export const ImageContainer = styled.div`
    width: '278px';
    height: '302px';
    overflow: hidden;
`;


//////////////////////////////////////////////////////////
// // Core
// import { MyFonts } from '@/assets/fonts';
// import { ButtonStyles } from '@/assets/styles/styles';
// import styled, { css } from 'styled-components';

// export const LinkStyles = css`
//     padding:  0;
// `;

// export const Container = styled.section`
//     width: 100%;
//     padding: 200px 80px;
//     text-align: center;
//      ${({ theme }) => theme.media('max').sm} {
//         padding: 24px;
//     };
// `;

// export const Title = styled.h3`
//     color: ${({ theme }) => theme.text.black.main};
//     font-family: ${MyFonts.THICCCBOI.bold};
//     font-size: 48px;
//     font-style: normal;
//     font-weight: 700;
//     line-height: 56px;
//     ${({ theme }) => theme.media('max').sm} {
//         font-size: 24px;
//         line-height: 34px;
//     };
// `;

// export const Subtitle = styled.p`
//     margin-top: 16px;
//     color: ${({ theme }) => theme.text.gray.main};
//     font-family: ${MyFonts.THICCCBOI.regular};
//     font-size: 20px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 28px;
//     ${({ theme }) => theme.media('max').sm} {
//         font-size: 16px;
//     };
// `;

// export const Slider = styled.div`
//     position: relative;
//     margin-top: 48px;
//     overflow: hidden;
//     max-width: 1280px;
//     width: 100%;
//     height: 640px;
//     ${({ theme }) => theme.media('max').md} {
//         width: 644px;
//         height: 600px;
//         margin-top: 24px;
//         margin-left: auto;
//         margin-right: auto;
//     };
//     ${({ theme }) => theme.media('max').sm} {
//         width: 320px;
//         height: 550px;
//         margin-top: 24px;
//         margin-left: auto;
//         margin-right: auto;
//     };
//     ${({ theme }) => theme.media('min').xl} {
//         width: fit-content;
//         height: 640px;
//         margin-top: 48px;
//         margin-left: auto;
//         margin-right: auto;
//         overflow: hidden;
//     };
// `;

// export const Track = styled.div<{$translate: number}>`
//     display: flex;
//     width: fit-content;
//     justify-content: space-between;
//     flex-wrap: nowrap;
//     transform: translateX(${({ $translate }) => -$translate + 'px'});
//     transition: all.3s ease;
// `;


// export const Card = styled.div`
//     display: flex;
//     width: 302px !important;
//     padding: 12px;
//     flex-direction: column;
//     text-align: left;
//     cursor: default;
//     &:hover img  {
//         scale: 1.2;
//         transition: all .3s ease;
//     }
//     ${({ theme }) => theme.media('max').sm} {
//         width: 302px;
//         flex-shrink: 0;
//         align-items: center;
//         & img {
//             width: 100%;
//             height: 270px;
//         }
//     }
// `;

// export const CardDate = styled.span`
//     font-family: ${MyFonts.THICCCBOI.regular};
//     color: ${({ theme }) => theme.text.gray.secondary};
//     margin-top: 12px;
//     font-size: 12px;
//     font-style: normal;
//     font-weight: 600;
//     line-height: 14px;
// `;

// export const CardTitle = styled.h5`
//     font-family: ${MyFonts.THICCCBOI.bold};
//     margin-top: 4px;
//     color: ${({ theme }) => theme.text.black.main};
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 600;
//     line-height: 24px;
//      ${({ theme }) => theme.media('max').sm} {
//         font-size: 14px;
//     };
// `;

// export const CardDescription = styled.p`
//     font-family: ${MyFonts.THICCCBOI.regular};
//     margin-top: 4px;
//     color: ${({ theme }) => theme.text.gray.main};
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 24px;
//     ${({ theme }) => theme.media('max').sm} {
//         font-size: 14px;
//     };
// `;

// export const LinkWrapper = styled.div`
//     font-family: ${MyFonts.THICCCBOI.medium};
//     margin-top: 25px;
//     display: flex;
//     align-items: center;
//     color: ${({ theme }) => theme.palette.purple.main};
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 500;
//     line-height: 24px;
//     cursor: pointer;
//     ${({ theme }) => theme.media('max').sm} {
//         font-size: 16px;
//     };
// `;

// export const Navigation = styled.div`
//     position: absolute;
//     display: flex;
//     bottom: 0;
//     left: 50%;
//     width: fit-content;
//     transform: translateX(-50%);
//     user-select: none;
// `;

// export const ProgressButtonContainer = styled.ul`
//     padding: 10px;
//     display: block;
//     margin: 0 auto;
//     margin-top: 30px;
//     position: unset !important;
//     & li {
//         height: auto !important;
//         width: auto !important;
//     }
// `;

// export const ProgressButton = styled.div<{$isActive?: boolean}>`
//     margin-right: 18px;
//     width: ${({ $isActive }) => $isActive ? '48px' : '24px'};
//     height: 4px;
//     border-radius: 10px;
//     background: ${({ theme, $isActive }) => $isActive ? theme.palette.purple.main : theme.palette.gray.lightGrey};
//     transition: all .3s ease;
//     cursor: pointer;
//     &:last-child {
//         margin-right: 0px;
//     }
// `;

// export const Button = styled(ButtonStyles)`
//     max-width: 219px;
//     max-height: 48px;
//     margin: 0 auto;
//     margin-top: 48px;
// `;

// export const ImageContainer = styled.div`
//     width: '278px';
//     height: '302px';
//     overflow: hidden;
// `;

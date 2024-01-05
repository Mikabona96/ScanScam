// Core
import { MyFonts } from '@/assets/fonts';
import styled, { css } from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 32px;
    gap: 32px;
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

export const SiteInfo = styled.div``;

export const Domain = styled.h3`
    font-family: ${MyFonts.THICCCBOI.regular};
    color: ${({ theme }) => theme.text.black.main};
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 24px;
`;

export const SiteName = styled.p`
    font-family: ${MyFonts.THICCCBOI.semiBold};
    color: ${({ theme }) => theme.text.gray.main};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 12px;
`;

export const SiteDescription = styled.p`
    font-weight: 400;
    font-family: ${MyFonts.THICCCBOI.regular};
`;

export const ScamInfoWrapper = styled.div`
    display: flex;
    gap: 48px;
`;

export const ScamInfo = styled.div`
    border: 1px solid #F5F5F5;
    border-radius: 4px;
    box-shadow: 0px 2px 12px 0px rgba(101, 101, 101, 0.03);
    max-width: 486px;
    width: 100%;
    min-height: 254px;
`;

const Text = css`
    color: ${({ theme }) => theme.text.gray.main};
    font-family: ${MyFonts.THICCCBOI.semiBold};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 17px;
`;

export const ScamInfoHeader = styled.div`
    height: 44px;
    padding: 12px 24px;
    border-bottom: 1px solid #F5F5F5;
    background: #F9FAFB;
    ${Text}
`;

export const ScamInfoDescription = styled.div`
    padding: 36px 24px 0px;
    background: #fff;
`;

export const ScamInfoText = styled.p`
    ${Text}
    font-family: ${MyFonts.THICCCBOI.regular};
    margin-top: 16px;
    font-weight: 400;
`;

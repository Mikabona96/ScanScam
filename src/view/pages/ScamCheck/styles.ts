/* eslint-disable no-nested-ternary */
// Core
import { MyFonts } from '@/assets/fonts';
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
    box-shadow: 0px 8px 16px 0px rgba(112, 115, 119, 0.12);
`;

export const DataContainer = styled.div`
    gap: 32px;
    height: 100%;
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

export const DoughnutChartsBlock = styled.div`
    display: flex;
    padding: 36px 24px 0px;
    gap: 48px;
    align-items: center;
`;

export const DoughnutChartsContainer = styled.div`
    display: flex;
`;

export const DoughnutChartWrapper = styled.div`
    width: 126px;
    height: 126px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Statuses = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const StatusText = styled.p<{$status: 'low' | 'high' | 'moderate'}>`
    display: flex;
    font-family: ${MyFonts.THICCCBOI.regular};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    position: relative;
    padding-left: 22px;
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 14px;
        height: 14px;
        transform: translateY(-50%);
        background-color: ${({ $status }) => $status === 'low' ? '#067647' : $status === 'moderate' ? '#DF9300' : '#B42318'};
        border-radius: 50%;
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    margin-left: 24px;
    margin-top: 16px;
    gap: 4px;
    color: ${({ theme }) => theme.palette.gray.info};

    font-family: ${MyFonts.THICCCBOI.regular};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
`;


export const Whois = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const WhoisTitle = styled.h3`
    font-family: ${MyFonts.THICCCBOI.semiBold};
    color: ${({ theme }) => theme.text.black.main};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
`;

export const TablesContainer = styled.div`
    display: flex;
    gap: 48px;
`;


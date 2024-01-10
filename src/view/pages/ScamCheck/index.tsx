// Core
import React, { FC } from 'react';
// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, Screenshot, SearchBar, Table } from '../../components';

// Styles
import * as S from './styles';
import { Button, ChipScamStatus, DoughnutChart, SectionSubtitle, SectionTitle } from '@/view/elements';
import { InfoIcon } from '@/assets/images/icons';

// Types
type PropTypes = {
    /* type props here */
}

const ScamCheck: FC<PropTypes> = () => {
    const data = true;
    const domainData = [
        { key: 'Registrar', value: 'Google LTd.' },
        { key: 'Registration date', value: '2023-03-25' },
        { key: 'Owner name', value: 'John Doe' },

    ];
    const ipData = [
        { key: 'IP', value: '213.227.162.125' },
        { key: 'Country', value: 'France' },
        { key: 'Registrant', value: 'Google LTd.' },
    ];

    return (
        <S.Container>
            {
                !data
                    ? (
                        <>
                            <S.TextWrapper>
                                <SectionTitle $styles = { S.TitleStyles }>
                                    Welcome to ScamScan!
                                </SectionTitle>
                                <SectionSubtitle $styles = { S.SubtitleStyles }>
                                    Enter a website URL to check if it's safe
                                </SectionSubtitle>
                            </S.TextWrapper>
                            <SearchBar />
                        </>
                    )
                    : (
                        <S.DataContainer>
                            <S.SiteInfo>
                                <S.Domain>www.google.com</S.Domain>
                                <S.SiteName>Google</S.SiteName>
                                <S.SiteDescription>
                                    Search the world's information, including webpages, images, videos, and more
                                </S.SiteDescription>
                            </S.SiteInfo>
                            <S.ScamInfoWrapper>
                                <S.ScamInfo>
                                    <S.ScamInfoHeader>Status</S.ScamInfoHeader>
                                    <S.ScamInfoDescription>
                                        <ChipScamStatus $status = 'Safe' />
                                        <S.ScamInfoText>
                                            This website is deemed safe for users.
                                            It has not exhibited any suspicious or harmful behavior,
                                            and interactions with the site are unlikely to pose a
                                            threat to your online safety.
                                        </S.ScamInfoText>
                                    </S.ScamInfoDescription>
                                </S.ScamInfo>
                                <S.ScamInfo>
                                    <S.ScamInfoHeader>AI Scam Score</S.ScamInfoHeader>
                                    <S.DoughnutChartsBlock>
                                        <S.DoughnutChartsContainer>
                                            <DoughnutChart
                                                data = { 15 }
                                            />
                                            <DoughnutChart
                                                data = { 55 }
                                            />
                                        </S.DoughnutChartsContainer>
                                        <S.Statuses>
                                            <S.StatusText $status = 'low'>Low risk</S.StatusText>
                                            <S.StatusText $status = 'moderate'>Moderate risk</S.StatusText>
                                            <S.StatusText $status = 'high'>High risk</S.StatusText>
                                        </S.Statuses>
                                    </S.DoughnutChartsBlock>
                                    <S.Info><InfoIcon /> Indicates the likelihood of scams based on AI analysis</S.Info>
                                </S.ScamInfo>
                            </S.ScamInfoWrapper>
                            <Screenshot />
                            <S.Whois>
                                <S.WhoisTitle>Whois information</S.WhoisTitle>
                                <S.TablesContainer>
                                    <Table
                                        data = { domainData }
                                        footerLink = '/whois-query'
                                        title = 'Domain'
                                    />
                                    <Table
                                        data = { ipData }
                                        footerLink = '/whois-query'
                                        title = 'IP'
                                    />
                                </S.TablesContainer>
                            </S.Whois>
                            <S.ReportScamWrapper>
                                <S.ReportTitle>Report scam</S.ReportTitle>
                                <S.ReportSubtitle>
                                    Report any issues or concerns about this website.
                                    Your feedback helps improve our scam-checking service.
                                </S.ReportSubtitle>
                                <Button>Submit Report</Button>
                            </S.ReportScamWrapper>
                        </S.DataContainer>
                    )
            }
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ScamCheck />
    </ErrorBoundary>
);

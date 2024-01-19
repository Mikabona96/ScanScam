// Core
import React, { FC, useContext } from 'react';
// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, Screenshot, SearchBar, Table } from '../../components';

// Styles
import * as S from './styles';
import { Button, ChipScamStatus, DoughnutChart, SectionSubtitle, SectionTitle, Spinner } from '@/view/elements';
import { InfoIcon } from '@/assets/images/icons';
import { useScamCheck } from '@/bus/scamcheck';
import { returnStatusText } from './returnStatusText';
import { ModalContext } from '@/layouts';
import { useOverflowHidden } from '@/tools/hooks';

// Types
type PropTypes = {
    /* type props here */
}

const ScamCheck: FC<PropTypes> = () => {
    // const data = false;
    const { fetchScamCheck, scamchek: { scamCheck, isLoading, error }} = useScamCheck();
    const context = useContext(ModalContext);
    const overflowHandler = useOverflowHidden();

    const domainData = [
        { key: 'Registrar', value: `${scamCheck.Domain.registrar || '-'}` },
        { key: 'Registration date', value: `${scamCheck.Domain.registrationDate || '-'}` },
        { key: 'Owner name', value: `${scamCheck.Domain.ownerName || '-'}` },

    ];
    const ipData = [
        { key: 'IP', value: `${scamCheck.Ip.ip || '-'}` },
        { key: 'Country', value: `${scamCheck.Ip.country || '-'}` },
        { key: 'Registrant', value: `${scamCheck.Ip.registrant || '-'}` },
    ];

    if (isLoading) {
        return (
            <Spinner loading = { isLoading } />
        );
    }

    return (
        <S.Container>
            {
                !scamCheck.domain
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
                            <SearchBar submitFunction = { fetchScamCheck } />
                            {error && (
                                <SectionSubtitle $styles = { S.ErrorMesage }>
                                    No scrape available for this url.
                                </SectionSubtitle>
                            )
                            }
                        </>
                    )
                    : (
                        <S.DataContainer>
                            <S.SiteInfo>
                                <S.Domain>{`${scamCheck.domain || '-'}`}</S.Domain>
                                <S.SiteName>{`${scamCheck.name || '-'}`}</S.SiteName>
                                <S.SiteDescription>
                                    Search the world's information, including webpages, images, videos, and more
                                </S.SiteDescription>
                            </S.SiteInfo>
                            <S.ScamInfoWrapper>
                                <S.ScamInfo>
                                    <S.ScamInfoHeader>Status</S.ScamInfoHeader>
                                    <S.ScamInfoDescription>
                                        <ChipScamStatus $status = { scamCheck.status === 'allowlist' ? 'Safe' : 'Unclassified' } />
                                        <S.ScamInfoText>
                                            {
                                                returnStatusText(scamCheck.status)
                                            }
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
                                                data = { 37 }
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
                            <Screenshot
                                screenshots = { scamCheck.screenshots }
                                websiteText = { scamCheck.websiteText }
                            />
                            <S.Whois>
                                <S.WhoisTitle>Whois information</S.WhoisTitle>
                                <S.TablesContainer>
                                    <Table
                                        data = { domainData }
                                        footerLink = { `/whois-query#${scamCheck.domain}` }
                                        title = 'Domain'
                                    />
                                    <Table
                                        data = { ipData }
                                        footerLink = { `/whois-query#${scamCheck.Ip.ip}` }
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
                                <Button onClick = { () => {
                                    context?.setModalActive(!context.isModalActive);
                                    overflowHandler(false);
                                } }>
                                    Submit Report
                                </Button>
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

// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, SearchBar } from '../../components';

// Styles
import * as S from './styles';
import { ChipScamStatus, SectionSubtitle, SectionTitle } from '@/view/elements';

// Types
type PropTypes = {
    /* type props here */
}

const ScamCheck: FC<PropTypes> = () => {
    return (
        <S.Container>
            {/* <S.TextWrapper>
                <SectionTitle $styles = { S.TitleStyles }>
                    Welcome to ScamScan!
                </SectionTitle>
                <SectionSubtitle $styles = { S.SubtitleStyles }>
                    Enter a website URL to check if it's safe
                </SectionSubtitle>
            </S.TextWrapper> */}
            {/* <SearchBar /> */}
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
                            and interactions with the site are unlikely to pose a threat to your online safety.
                        </S.ScamInfoText>
                    </S.ScamInfoDescription>
                </S.ScamInfo>
                <S.ScamInfo>
                    <S.ScamInfoHeader>AI Scam Score</S.ScamInfoHeader>

                </S.ScamInfo>
            </S.ScamInfoWrapper>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ScamCheck />
    </ErrorBoundary>
);

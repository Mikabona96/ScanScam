// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, SearchBar } from '../../components';

// Styles
import * as S from './styles';
import { SectionSubtitle, SectionTitle } from '@/view/elements';

// Types
type PropTypes = {
    /* type props here */
}

const ScamCheck: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.TextWrapper>
                <SectionTitle $styles = { S.TitleStyles }>
                    Welcome to ScamScan!
                </SectionTitle>
                <SectionSubtitle $styles = { S.SubtitleStyles }>
                    Enter a website URL to check if it's safe
                </SectionSubtitle>
            </S.TextWrapper>
            <SearchBar />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ScamCheck />
    </ErrorBoundary>
);

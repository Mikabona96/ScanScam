// Core
import React, { FC, useState } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, ResultDomain, ResultIP, SearchBar } from '../../components';

// Styles
import * as S from './styles';
import { SectionSubtitle, SectionTitle } from '@/view/elements';
import { useParams } from 'react-router-dom';

// Types
type PropTypes = {
    /* type props here */
}

const WhoisQuery: FC<PropTypes> = () => {
    const [ isRaw, setIsRaw ] = useState(false);
    const { id } = useParams();
    const data = true;

    return (
        <S.Container>
            {
                !data ? (
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
                ) : (
                    <>
                        {
                            data && id === 'domain_details' && (
                                <ResultDomain
                                    isRaw = { isRaw }
                                    setIsRaw = { setIsRaw }
                                />
                            )
                        }
                        {
                            data && id === 'ip_details' && (
                                <ResultIP
                                    isRaw = { isRaw }
                                    setIsRaw = { setIsRaw }
                                />
                            )
                        }
                    </>
                )
            }
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <WhoisQuery />
    </ErrorBoundary>
);

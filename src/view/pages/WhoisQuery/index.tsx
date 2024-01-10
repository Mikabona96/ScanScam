// Core
import React, { FC, useState } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, ResultDomain, ResultIP, SearchBar } from '../../components';

// Styles
import * as S from './styles';
import { SectionSubtitle, SectionTitle } from '@/view/elements';
import { useWhoisquery } from '@/bus/whoisquery';

// Types
type PropTypes = {
    /* type props here */
}

const WhoisQuery: FC<PropTypes> = () => {
    const [ isRaw, setIsRaw ] = useState(false);
    const { whoisquery: { whoisQuery }} = useWhoisquery();

    return (
        <S.Container>
            {
                !whoisQuery ? (
                    <>
                        <S.TextWrapper>
                            <SectionTitle $styles = { S.TitleStyles }>
                                Welcome to ScamScan!
                            </SectionTitle>
                            <SectionSubtitle $styles = { S.SubtitleStyles }>
                                Enter a website URL to check if it's safe
                            </SectionSubtitle>
                        </S.TextWrapper>
                        <SearchBar
                            placeholder = 'Enter a domain or IP address'
                        />
                    </>
                ) : (
                    <>
                        {
                            whoisQuery && !whoisQuery?.parsed?.ip && (
                                <ResultDomain
                                    isRaw = { isRaw }
                                    setIsRaw = { setIsRaw }
                                />
                            )
                        }
                        {
                            whoisQuery && whoisQuery?.parsed?.ip && (
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

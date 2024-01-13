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
import { ipv4Regex, urlRegex } from '@/view/components/SearchBar/static';

// Types
type PropTypes = {
    /* type props here */
}

const WhoisQuery: FC<PropTypes> = () => {
    const [ isRaw, setIsRaw ] = useState(false);
    const { whoisquery: { whoisQuery }, fetchWhoisqueryDomain, fetchWhoisqueryIp } = useWhoisquery();

    const submitFunction = (ipOrUrl: string) => {
        if (ipOrUrl) {
            if (ipOrUrl.match(urlRegex)) {
                fetchWhoisqueryDomain(ipOrUrl);
            }
            if (ipOrUrl.match(ipv4Regex)) {
                fetchWhoisqueryIp(ipOrUrl);
            }
        }
    };

    return (
        <S.Container>
            {
                !whoisQuery ? (
                    <>
                        <S.TextWrapper>
                            <SectionTitle $styles = { S.TitleStyles }>
                                Whois Query
                            </SectionTitle>
                            <SectionSubtitle $styles = { S.SubtitleStyles }>
                                Search for detailed information about IP addresses and domains,
                                including registration information, ownership, and more
                            </SectionSubtitle>
                        </S.TextWrapper>
                        <SearchBar
                            placeholder = 'Enter a domain or IP address'
                            submitFunction = { submitFunction }
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

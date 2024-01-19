// Core
import React, { FC, useEffect, useState } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, ResultDomain, ResultIP, SearchBar } from '../../components';

// Styles
import * as S from './styles';
import { SectionSubtitle, SectionTitle, Spinner } from '@/view/elements';
import { useWhoisquery } from '@/bus/whoisquery';
import { ipv4Regex, urlRegex } from '@/view/components/SearchBar/static';
import { useLocation, useNavigate } from 'react-router-dom';

// Types
type PropTypes = {
    /* type props here */
}

const WhoisQuery: FC<PropTypes> = () => {
    const [ isRaw, setIsRaw ] = useState(false);
    const { whoisquery: { whoisQuery, isLoading }, fetchWhoisqueryDomain, fetchWhoisqueryIp } = useWhoisquery();
    const { hash, pathname } = useLocation();
    const navigate = useNavigate();


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

    useEffect(() => {
        if (hash) {
            submitFunction(hash.replace('#', '').trim());
        }
    }, [ hash ]);

    if (isLoading) {
        return <Spinner loading = { isLoading } />;
    }

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
                            submitFunction = { (ipOrUrl) => navigate(`${pathname}#${ipOrUrl}`) }
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
